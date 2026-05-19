import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const websiteRoot = resolve(__dirname, "..");
const petChatRoot = process.env.PETCHAT_REPO || "/Users/xiaomao822/Desktop/git/petchat/PetChat";

const syncOutputPath = resolve(websiteRoot, "data/petchat-sync.ts");
const analysisOutputPath = resolve(websiteRoot, "data/petchat.ts");

if (!existsSync(resolve(petChatRoot, ".git"))) {
  throw new Error(`PetChat git repository not found: ${petChatRoot}`);
}

const git = (args) =>
  execFileSync("git", args, {
    cwd: petChatRoot,
    encoding: "utf8",
    maxBuffer: 1024 * 1024 * 50,
    stdio: ["ignore", "pipe", "pipe"]
  }).trim();

const read = (path) => readFileSync(resolve(petChatRoot, path), "utf8");
const unique = (items) => [...new Set(items.filter(Boolean))];
const toPosix = (path) => path.split("\\").join("/");
const lineNumberForIndex = (text, index) => text.slice(0, index).split(/\n/).length;
const sourceLocation = (file, line) => `${file}:${line}`;
const compact = (text, max = 130) => {
  const value = text.replace(/\s+/g, " ").trim();
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
};

const info = {
  sourceRoot: petChatRoot,
  branch: git(["branch", "--show-current"]) || "detached",
  commit: git(["rev-parse", "HEAD"]),
  shortCommit: git(["rev-parse", "--short=7", "HEAD"]),
  subject: git(["show", "-s", "--format=%s", "HEAD"]),
  committedAt: git(["show", "-s", "--format=%ci", "HEAD"]),
  syncedAt: new Date().toISOString(),
  hasUncommittedChanges: git(["status", "--porcelain"]).length > 0
};

const trackedFiles = git(["ls-files", "--", "PetChat", "Podfile", "doc", "lib"])
  .split(/\n/)
  .filter(Boolean)
  .map(toPosix);

const sourceFiles = trackedFiles.filter((file) =>
  [".swift", ".m", ".mm", ".h"].includes(extname(file)) &&
  !file.startsWith("Pods/") &&
  !file.startsWith("Build/") &&
  !file.includes("/Generated/")
);

const sourceCache = new Map();
const sourceText = (file) => {
  if (!sourceCache.has(file)) {
    sourceCache.set(file, read(file));
  }
  return sourceCache.get(file);
};

const moduleNameFromPath = (file) => {
  if (file.includes("/PetMagicNew/") || file.includes("/PetMagic/")) return "Pet Magic";
  if (file.includes("/PetThoughts/")) return "Pet Thoughts";
  if (file.includes("/PetTalk/")) return "Pet Talk";
  if (file.includes("/PetSounds/")) return "Pet Sounds";
  if (file.includes("/PetHub/")) return "Pet Hub";
  if (file.includes("/VIP/") || file.includes("/StoreKit/")) return "订阅";
  if (file.includes("/Guide/")) return "Onboarding";
  if (file.includes("/Launch/")) return "启动";
  if (file.includes("/RemoteConfig/")) return "远端配置";
  if (file.includes("/Rating/")) return "评分";
  if (file.includes("/Feedback/")) return "反馈";
  if (file.includes("/Adjust") || file.includes("/OceanEngine") || file.includes("/TikTok")) return "归因";
  if (file.includes("/EventManager/")) return "埋点";
  if (file.includes("/MainTab/")) return "主导航";
  return "公共能力";
};

const moduleSummaries = {
  Guide: "Onboarding、宠物类型选择和新用户引导链路。",
  Launch: "启动、网络权限、协议、归因、登录和远端配置放行流程。",
  MainTab: "底部 Tab、入口分发和主页面展示。",
  PetHub: "宠物档案、历史、我的创作、协议与反馈入口。",
  PetMagic: "AI 模板详情、照片选择、制作任务和结果页。",
  PetMagicNew: "AI 模板首页、Banner、分类分页和模板列表。",
  PetSounds: "训练口令、召唤声、情绪声音播放和免费次数控制。",
  PetTalk: "跨物种录音、音频翻译、结果页和录音引导。",
  PetThoughts: "图片/视频上传、宠物想法分析、聊天化结果和历史。",
  VIP: "订阅页、购买恢复、会员权益和 paywall 分流。"
};

const featureTitle = {
  Guide: "Onboarding 引导",
  Launch: "启动、合规与新手引导",
  MainTab: "主导航五 Tab",
  PetHub: "Pet Hub 宠物中心",
  PetMagic: "Pet Magic 详情创作",
  PetMagicNew: "Pet Magic 模板首页",
  PetSounds: "Pet Sounds 声音库",
  PetTalk: "Pet Talk 跨物种翻译",
  PetThoughts: "Pet Thoughts 宠物想法",
  VIP: "订阅、会员与支付"
};

const topModuleDirs = trackedFiles
  .filter((file) => file.startsWith("PetChat/Module/") && [".swift", ".m", ".mm", ".h"].includes(extname(file)))
  .map((file) => file.split("/")[2])
  .filter((name) => name && name !== "Model" && name !== "View" && name !== "ViewModel");

const petChatFeatureMindMap = {
  id: "features",
  title: "PetChat 功能总览",
  summary: "由同步脚本扫描 PetChat/Module 下的业务目录、源码文件和主要类名生成。",
  source: "PetChat/Module",
  children: unique(topModuleDirs).sort().map((dir) => {
    const files = sourceFiles.filter((file) => file.startsWith(`PetChat/Module/${dir}/`));
    const childGroups = unique(
      files
        .map((file) => file.split("/").slice(3, -1)[0])
        .filter((name) => name && !["Model", "View", "ViewModel", "VC", "VM"].includes(name))
    );
    const representative = files.find((file) => /VC\.swift$|ViewController\.swift$/.test(file)) || files[0];
    const classNames = unique(
      files.flatMap((file) => [...sourceText(file).matchAll(/\b(?:class|struct|enum)\s+([A-Za-z_][A-Za-z0-9_]*)/g)].map((match) => match[1]))
    ).slice(0, 8);
    return {
      id: dir.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      title: featureTitle[dir] || dir,
      summary: moduleSummaries[dir] || `扫描到 ${files.length} 个源码文件，包含 ${classNames.length} 个主要类型。`,
      source: representative || `PetChat/Module/${dir}`,
      children: [
        ...childGroups.slice(0, 6).map((group) => {
          const groupFiles = files.filter((file) => file.includes(`/PetChat/Module/${dir}/${group}/`));
          return {
            id: `${dir}-${group}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            title: group,
            summary: `扫描到 ${groupFiles.length} 个源码文件。`,
            source: groupFiles[0] || `PetChat/Module/${dir}/${group}`
          };
        }),
        ...classNames.slice(0, Math.max(0, 6 - childGroups.length)).map((name) => {
          const file = files.find((candidate) => sourceText(candidate).includes(name));
          return {
            id: `${dir}-${name}`.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
            title: name,
            summary: "源码扫描识别出的核心类型。",
            source: file || representative || `PetChat/Module/${dir}`
          };
        })
      ]
    };
  })
};

const parsePodfile = () => {
  if (!trackedFiles.includes("Podfile")) return [];
  return [...read("Podfile").matchAll(/^\s*pod\s+['"]([^'"]+)['"](?:\s*,\s*['"]([^'"]+)['"])?/gm)].map((match) => ({
    name: match[1],
    version: match[2] || "",
    line: lineNumberForIndex(read("Podfile"), match.index)
  }));
};

const sdkCategory = (name) => {
  if (/Firebase|Thinking|Adjust|UM|Facebook|TikTok|BDASignal/i.test(name)) return "埋点、远端配置与归因";
  if (/StoreKit/i.test(name)) return "支付与会员";
  if (/Alamofire|HandyJSON|Protobuf/i.test(name)) return "网络与数据";
  if (/Kingfisher|SDWebImage|Photo|Lottie|AlphaPlayer|FLAnimatedImage/i.test(name)) return "媒体与图片";
  if (/SnapKit|JX|FSPager|Toast|SPButton|MJRefresh|DZNEmpty/i.test(name)) return "UI 与交互";
  if (/FMDB|LKDB/i.test(name)) return "本地存储";
  return "基础库";
};

const pods = parsePodfile();
const sdkGroups = Object.entries(
  pods.reduce((acc, pod) => {
    const category = sdkCategory(pod.name);
    acc[category] ||= [];
    acc[category].push(pod);
    return acc;
  }, {})
);

const petChatSdkMindMap = {
  id: "sdk",
  title: "三方 SDK 与触发点",
  summary: "由 Podfile 和源码 import/调用点扫描生成。",
  source: "Podfile, PetChat/Common, PetChat/Module",
  children: sdkGroups.map(([category, items]) => ({
    id: category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: category,
    summary: `扫描到 ${items.length} 个 Pod：${items.map((item) => item.name).join("、")}。`,
    source: "Podfile",
    children: items.map((item) => {
      const importHit = sourceFiles.find((file) => new RegExp(`\\b(import|@import)\\s+${item.name.split("/")[0].replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`).test(sourceText(file)));
      return {
        id: item.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
        title: item.version ? `${item.name} ${item.version}` : item.name,
        summary: importHit ? "在业务源码中检测到 import 或调用入口。" : "由 Podfile 声明集成。",
        source: importHit || sourceLocation("Podfile", item.line)
      };
    })
  }))
};

const keyFile = "PetChat/Common/Managers/RemoteConfig/PCRemoteConfigKeys.swift";
const appConfigFile = "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift";
const keyText = trackedFiles.includes(keyFile) ? read(keyFile) : "";
const appConfigText = trackedFiles.includes(appConfigFile) ? read(appConfigFile) : "";

const commentBefore = (text, index) => {
  const before = text.slice(0, index).split(/\n/);
  const comments = [];
  for (let i = before.length - 1; i >= 0; i -= 1) {
    const line = before[i].trim();
    if (line.startsWith("///")) comments.unshift(line.replace(/^\/\/\/\s?/, ""));
    else if (line === "" || line.startsWith("// MARK")) continue;
    else break;
  }
  return comments.join(" ");
};

const remoteKeys = [...keyText.matchAll(/static\s+let\s+([A-Za-z0-9_]+)\s*=\s*"([^"]+)"/g)].map((match) => {
  const docs = commentBefore(keyText, match.index);
  const defaultFromDoc = docs.match(/默认\s*([^\s，）。)]+)/)?.[1] || "";
  return {
    symbol: match[1],
    key: match[2],
    docs,
    defaultValue: defaultFromDoc
  };
});

const findSymbolLocations = (symbol) => {
  const pattern = new RegExp(`PCRemoteConfigKeys\\.${symbol}\\b`, "g");
  const hits = [];
  for (const file of sourceFiles) {
    if (file === keyFile) continue;
    const text = sourceText(file);
    for (const match of text.matchAll(pattern)) {
      hits.push(sourceLocation(file, lineNumberForIndex(text, match.index)));
    }
  }
  return hits;
};

const defaultForSymbol = (symbol, docs) => {
  const idx = appConfigText.indexOf(`PCRemoteConfigKeys.${symbol}`);
  const searchArea = idx >= 0 ? appConfigText.slice(Math.max(0, idx - 1200), Math.min(appConfigText.length, idx + 1600)) : "";
  const defaults = unique(
    [...searchArea.matchAll(/default:\s*([^)\n,]+)/g)]
      .map((match) => match[1].trim().replace(/^Self\./, ""))
      .filter((value) => !value.includes("PCRemoteConfigParser"))
  );
  const docDefault = docs.match(/默认\s*([^\s，）。)]+)/)?.[1] || "";
  return docDefault || defaults.slice(0, 2).join(" / ") || "见解析代码";
};

const petChatRemoteParameters = remoteKeys.map((item) => {
  const locations = findSymbolLocations(item.symbol);
  const parseLocations = locations.filter((location) => location.startsWith(appConfigFile)).slice(0, 3);
  const triggerLocations = locations.filter((location) => !location.startsWith(appConfigFile)).slice(0, 4);
  return {
    key: item.key,
    module: moduleNameFromPath(`${item.key} ${triggerLocations.join(" ")}`),
    defaultValue: defaultForSymbol(item.symbol, item.docs),
    feature: item.docs || `远端配置 ${item.key}，由 PCRemoteConfigKeys.${item.symbol} 声明。`,
    triggerLocation: triggerLocations.join(", ") || "未扫描到业务触发点",
    parseLocation: parseLocations.join(", ") || sourceLocation(keyFile, lineNumberForIndex(keyText, keyText.indexOf(item.symbol)))
  };
});

const eventFile = "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift";
const eventText = trackedFiles.includes(eventFile) ? read(eventFile) : "";
const pcAdjustEvents = [...eventText.matchAll(/case\s+([A-Za-z0-9_]+)\s*=\s*"([^"]+)"/g)].map((match) => ({
  symbol: match[1],
  id: match[2]
}));

const privateEventStrings = [];
for (const file of sourceFiles) {
  const text = sourceText(file);
  if (!text.includes("AnalyticsEvent")) continue;
  for (const match of text.matchAll(/static\s+let\s+([A-Za-z0-9_]+)\s*=\s*"([^"]+)"/g)) {
    privateEventStrings.push({ symbol: match[1], id: match[2], file });
  }
}

const eventDefinitions = [...pcAdjustEvents, ...privateEventStrings];

const eventLocations = (event) => {
  const patterns = [
    new RegExp(`PCAdjustEventID\\.${event.symbol}\\b`, "g"),
    new RegExp(`AnalyticsEvent\\.${event.symbol}\\b`, "g"),
    new RegExp(`key:\\s*"${event.id.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}"`, "g")
  ];
  const hits = [];
  for (const file of sourceFiles) {
    const text = sourceText(file);
    for (const pattern of patterns) {
      for (const match of text.matchAll(pattern)) {
        const start = Math.max(0, match.index - 260);
        const end = Math.min(text.length, match.index + 520);
        const context = text.slice(start, end);
        hits.push({
          file,
          line: lineNumberForIndex(text, match.index),
          context
        });
      }
    }
  }
  return hits;
};

const paramsFromContext = (context) => {
  const paramsBlock = context.match(/param:\s*\[([\s\S]*?)\]/)?.[1] || "";
  return unique([
    ...[...paramsBlock.matchAll(/"([^"]+)"\s*:/g)].map((match) => match[1]),
    ...[...paramsBlock.matchAll(/PCAdjustEventParamKey\.([A-Za-z0-9_]+)/g)].map((match) => match[1])
  ]).join(", ") || "-";
};

const petChatAnalyticsEvents = eventDefinitions.map((event) => {
  const hits = eventLocations(event);
  const locations = hits.map((hit) => sourceLocation(hit.file, hit.line));
  const targets = unique(hits.map((hit) => (hit.context.includes("type: .adjust") ? "Adjust" : "Thinking/Firebase")));
  const target = targets.includes("Adjust") && targets.includes("Thinking/Firebase")
    ? "Thinking/Firebase + Adjust"
    : targets[0] || "Thinking/Firebase";
  const firstContext = hits[0]?.context || "";
  return {
    id: event.id,
    module: moduleNameFromPath(hits[0]?.file || event.file || eventFile),
    trigger: firstContext ? compact(firstContext.replace(/\n/g, " ")) : "已定义，未扫描到触发调用。",
    location: unique(locations).slice(0, 4).join(", ") || sourceLocation(event.file || eventFile, 1),
    params: paramsFromContext(firstContext),
    target
  };
}).sort((a, b) => a.module.localeCompare(b.module) || a.id.localeCompare(b.id));

const petChatStats = [
  { label: "功能分支", value: String(petChatFeatureMindMap.children.length) },
  { label: "SDK/能力集成", value: String(pods.length) },
  { label: "埋点事件", value: String(petChatAnalyticsEvents.length) },
  { label: "下发参数", value: String(petChatRemoteParameters.length) }
];

const analysisFile = `export type MindMapNode = {
  id: string;
  title: string;
  summary: string;
  source?: string;
  children?: MindMapNode[];
};

export type PetChatAnalyticsEvent = {
  id: string;
  module: string;
  trigger: string;
  location: string;
  params: string;
  target: "Thinking/Firebase" | "Adjust" | "Thinking/Firebase + Adjust";
};

export type PetChatRemoteParameter = {
  key: string;
  module: string;
  defaultValue: string;
  feature: string;
  triggerLocation: string;
  parseLocation: string;
};

export const petChatSourceRoot = ${JSON.stringify(petChatRoot)};

export const petChatStats = ${JSON.stringify(petChatStats, null, 2)};

export const petChatFeatureMindMap: MindMapNode = ${JSON.stringify(petChatFeatureMindMap, null, 2)};

export const petChatSdkMindMap: MindMapNode = ${JSON.stringify(petChatSdkMindMap, null, 2)};

export const petChatRemoteParameters: PetChatRemoteParameter[] = ${JSON.stringify(petChatRemoteParameters, null, 2)};

export const petChatAnalyticsEvents: PetChatAnalyticsEvent[] = ${JSON.stringify(petChatAnalyticsEvents, null, 2)};
`;

const syncFile = `export const petChatSyncInfo = ${JSON.stringify(info, null, 2)} as const;\n`;

writeFileSync(syncOutputPath, syncFile);
writeFileSync(analysisOutputPath, analysisFile);

console.log(`Synced PetChat metadata: ${info.branch}@${info.shortCommit}`);
console.log(`Generated ${relative(websiteRoot, analysisOutputPath)} from ${sourceFiles.length} source files`);
console.log(`Remote params: ${petChatRemoteParameters.length}, analytics events: ${petChatAnalyticsEvents.length}, SDK pods: ${pods.length}`);
