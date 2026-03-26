export type SoundItem = {
  slug: string;
  title: string;
  animal: "猫咪" | "狗狗";
  category: "叫声" | "逗宠声音";
  summary: string;
  useCase: string;
  caution: string;
  audio?: string;
  duration: string;
  mood: string;
  tags: string[];
};

export type GuideItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string;
  readTime: string;
  bullets: string[];
  intro: string;
  sections: {
    heading: string;
    body: string;
    tips?: string[];
  }[];
};

export type StageItem = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  audience: string;
  readTime: string;
  bullets: string[];
  intro: string;
  sections: {
    heading: string;
    body: string;
    tips?: string[];
  }[];
};

export type SiteLocale = "zh" | "en";
export type LocalizedText = Record<SiteLocale, string>;
export type TrainingVoiceKey = "female" | "kid" | "male";

export type TrainingItem = {
  slug: string;
  command: LocalizedText;
  summary: LocalizedText;
  goal: LocalizedText;
  tips: LocalizedText[];
  tags: LocalizedText[];
  variants: {
    voice: TrainingVoiceKey;
    audio: LocalizedText;
  }[];
};

export const trainingVoiceLabels: Record<TrainingVoiceKey, LocalizedText> = {
  female: { zh: "女声", en: "Female" },
  kid: { zh: "童声", en: "Kid" },
  male: { zh: "男声", en: "Male" }
};

export function getLocalizedText(value: string | LocalizedText, locale: SiteLocale) {
  return typeof value === "string" ? value : value[locale];
}

export function getTrainingVoiceLabel(voice: TrainingVoiceKey, locale: SiteLocale) {
  return trainingVoiceLabels[voice][locale];
}

export const siteStats = [
  { label: "猫狗声音分类", value: "16+" },
  { label: "养宠知识专题", value: "6+" },
  { label: "成长阶段模块", value: "6+" }
];

export const quickTopics = [
  {
    title: "猫狗叫声",
    description: "按动物和用途区分猫叫、狗叫、互动声音，方便快速查找。",
    href: "/sounds"
  },
  {
    title: "逗宠声音",
    description: "适合短时互动的逗猫逗狗声音，并附带使用提醒。",
    href: "/sounds"
  },
  {
    title: "养宠常识",
    description: "从饮食、作息、用品、行为观察等基础主题切入。",
    href: "/guides"
  },
  {
    title: "阶段知识",
    description: "覆盖幼年、成年、老年阶段的照护重点与风险提醒。",
    href: "/stages"
  },
  {
    title: "训练口令",
    description: "把常用训练口令做成可试听页面，便于练习和对比不同声音版本。",
    href: "/training"
  }
];

export const commonNotes = [
  "声音内容适合短时播放，不建议长时间循环刺激宠物。",
  "涉及误食、外伤、持续呕吐腹泻、呼吸异常等情况，应优先联系兽医。",
  "成长阶段知识适合做 SEO 专题页，后续可以继续细分为饮食、训练、健康等专题。",
  "真实音频文件建议统一命名并放在 public/audio 中，后续维护更轻松。"
];

export const heroHighlights = [
  "猫狗叫声与互动声音整理",
  "新手友好的养宠知识导航",
  "按成长阶段拆分内容专题"
];

export const featuredCollections = [
  {
    title: "猫咪安抚与互动",
    description: "适合收纳温柔猫叫、啾啾声和短时互动音频，帮助主人快速找到更适合的播放场景。",
    accent: "bg-peach/55",
    href: "/sounds"
  },
  {
    title: "狗狗情绪与训练",
    description: "把警觉、邀玩、召回等声音和训练常识结合起来，页面会更有内容价值。",
    accent: "bg-mint/65",
    href: "/guides"
  },
  {
    title: "阶段式养护专题",
    description: "把幼年、成年、老年拆开，后续持续填内容时不会混成一个难读的大列表。",
    accent: "bg-sand",
    href: "/stages"
  }
];

export const uploadSteps = [
  "把 mp3 或 wav 文件放到 public/audio，例如 public/audio/cat-soft-meow.mp3。",
  "在 data/site.ts 对应声音条目里补充 audio 字段，例如 /audio/cat-soft-meow.mp3。",
  "如果一个主题有多段音频，可以继续扩展成数组，后续再改成多音频播放器。",
  "音频标题尽量包含用途和动物类型，便于后续搜索和 SEO。"
];

export const soundCategories = [
  { label: "全部声音", value: "all" },
  { label: "猫咪叫声", value: "cat-call" },
  { label: "狗狗叫声", value: "dog-call" },
  { label: "逗宠互动", value: "tease" }
] as const;

export const popularSoundTags = [
  "安抚",
  "警觉",
  "逗猫",
  "逗狗",
  "召回",
  "互动",
  "饭点",
  "撒娇"
];

export const soundItems: SoundItem[] = [
  {
    slug: "cat-call-soft",
    title: "温柔猫叫声",
    animal: "猫咪",
    category: "叫声",
    summary: "适合安抚注意力、吸引猫咪靠近，也适合作为声音示例页的基础内容。",
    useCase: "轻声互动、引导观察、内容展示",
    caution: "不要长时间循环播放，避免让猫咪因找不到声音来源而紧张.",
    audio: "/audio/library/cat-call-soft.mp3",
    duration: "00:18",
    mood: "轻柔安抚",
    tags: ["猫叫", "安抚", "轻声互动"]
  },
  {
    slug: "dog-bark-alert",
    title: "警觉型狗叫声",
    animal: "狗狗",
    category: "叫声",
    summary: "用于展示狗狗警觉叫声的场景差异，帮助主人理解声音背后的情绪。",
    useCase: "情绪识别、训练观察、知识讲解",
    caution: "仅用于短时示例，敏感犬可能会因刺激而变得兴奋.",
    audio: "/audio/library/dog-bark-alert.mp3",
    duration: "00:12",
    mood: "警觉提醒",
    tags: ["狗叫", "警觉", "行为识别"]
  },
  {
    slug: "tease-cat-chirp",
    title: "逗猫啾啾声",
    animal: "猫咪",
    category: "逗宠声音",
    summary: "模拟高频轻快的互动节奏，适合作为逗猫页面的代表内容。",
    useCase: "唤起好奇、互动游戏、短时专注",
    caution: "如果猫咪出现耳朵后压、甩尾等表现，应立即停止播放.",
    audio: "/audio/library/tease-cat-chirp.mp3",
    duration: "00:16",
    mood: "活泼好奇",
    tags: ["逗猫", "高频", "互动"]
  },
  {
    slug: "tease-dog-whistle",
    title: "逗狗互动口哨",
    animal: "狗狗",
    category: "逗宠声音",
    summary: "适合训练召回、引导注意力和增加互动感的基础声音内容。",
    useCase: "召回训练、互动引导、户外注意力唤回",
    caution: "避免在狗狗过度兴奋时重复播放，防止建立错误刺激反应.",
    audio: "/audio/library/tease-dog-whistle.mp3",
    duration: "00:15",
    mood: "专注引导",
    tags: ["逗狗", "召回", "训练"]
  },
  {
    slug: "cat-mother-call",
    title: "母猫呼唤幼猫叫声",
    animal: "猫咪",
    category: "叫声",
    summary: "适合作为知识页示例内容，用来解释猫咪呼唤和回应类叫声的差异。",
    useCase: "科普讲解、行为观察、内容扩展",
    caution: "不建议对刚到新环境的幼猫反复播放，容易造成寻找行为增强.",
    audio: "/audio/library/cat-mother-call.mp3",
    duration: "00:20",
    mood: "呼唤回应",
    tags: ["母猫", "幼猫", "科普"]
  },
  {
    slug: "dog-play-invite",
    title: "狗狗邀玩叫声",
    animal: "狗狗",
    category: "叫声",
    summary: "展示狗狗在兴奋和邀玩状态下的声音特点，适合做互动行为科普。",
    useCase: "行为识别、互动教学、训练辅助说明",
    caution: "当狗狗已明显兴奋时不要继续刺激，避免情绪持续升高.",
    audio: "/audio/library/dog-play-invite.mp3",
    duration: "00:14",
    mood: "邀玩兴奋",
    tags: ["狗狗邀玩", "互动", "行为"]
  },
  {
    slug: "cat-warning-grumble",
    title: "猫咪警告低鸣",
    animal: "猫咪",
    category: "叫声",
    summary: "适合用来解释猫咪在不舒服、被打扰或准备警告时的声音变化。",
    useCase: "情绪边界识别、行为科普、错误互动提醒",
    caution: "听到这类声音时应停止挑逗和逼近，先给猫咪拉开安全距离。",
    audio: "/audio/library/cat-warning-grumble.mp3",
    duration: "00:11",
    mood: "防御警告",
    tags: ["猫咪警告", "低鸣", "边界感"]
  },
  {
    slug: "cat-seeking-attention",
    title: "猫咪求关注叫声",
    animal: "猫咪",
    category: "叫声",
    summary: "表现猫咪想引起主人注意时更黏人的发声，适合做日常互动类内容。",
    useCase: "互动科普、主人回应训练、情绪识别",
    caution: "不要每次都立刻强化，以免猫咪把持续喊叫和即时满足建立过强关联。",
    audio: "/audio/library/cat-seeking-attention.mp3",
    duration: "00:13",
    mood: "撒娇黏人",
    tags: ["求关注", "撒娇", "互动"]
  },
  {
    slug: "cat-hungry-demand",
    title: "猫咪催饭叫声",
    animal: "猫咪",
    category: "叫声",
    summary: "适合搭配饮食内容，展示猫咪在固定饭点前后常见的急切发声状态。",
    useCase: "饭点行为识别、饮食管理、内容讲解",
    caution: "尽量保持固定喂食节奏，避免被频繁催饭打乱长期计划。",
    audio: "/audio/library/cat-hungry-demand.mp3",
    duration: "00:10",
    mood: "急切催促",
    tags: ["催饭", "饮食", "猫叫"]
  },
  {
    slug: "cat-alert-curious",
    title: "猫咪警觉好奇叫声",
    animal: "猫咪",
    category: "叫声",
    summary: "适合表现猫咪发现新东西时既紧张又好奇的短促发声。",
    useCase: "环境观察、陌生刺激识别、科普页补充",
    caution: "面对新环境时不要叠加过多刺激，让猫咪按自己的节奏接近。",
    audio: "/audio/library/cat-alert-curious.mp3",
    duration: "00:09",
    mood: "警觉好奇",
    tags: ["新奇刺激", "观察", "短促发声"]
  },
  {
    slug: "dog-protest-grumble",
    title: "狗狗不满抗议声",
    animal: "狗狗",
    category: "叫声",
    summary: "展示狗狗在被限制、被打断或不想配合时的抱怨型发声。",
    useCase: "情绪识别、训练边界、行为观察",
    caution: "先判断是否存在压力源，不要把所有抗议都简单理解成“故意捣乱”。",
    audio: "/audio/library/dog-protest-grumble.mp3",
    duration: "00:12",
    mood: "不满抗议",
    tags: ["抗议", "边界", "情绪识别"]
  },
  {
    slug: "dog-food-excited",
    title: "狗狗饭点兴奋声",
    animal: "狗狗",
    category: "叫声",
    summary: "表现狗狗在看到食物或听到备餐声音时的兴奋状态，适合串联喂食主题。",
    useCase: "饮食场景、情绪识别、日常趣味内容",
    caution: "如果狗狗在饭点过度激动，可以加入等待口令和安静后奖励机制。",
    audio: "/audio/library/dog-food-excited.mp3",
    duration: "00:10",
    mood: "饭点兴奋",
    tags: ["狗狗饭点", "兴奋", "食物"]
  },
  {
    slug: "dog-happy-pup",
    title: "狗狗开心撒欢声",
    animal: "狗狗",
    category: "叫声",
    summary: "适合呈现轻松愉快的互动状态，页面氛围也会更活泼。",
    useCase: "正向情绪展示、互动内容、首页推荐音频",
    caution: "高兴不等于无限制刺激，仍要注意运动后情绪收束。",
    audio: "/audio/library/dog-happy-pup.mp3",
    duration: "00:11",
    mood: "开心轻快",
    tags: ["快乐", "轻快", "互动"]
  },
  {
    slug: "dog-affection-soft",
    title: "狗狗撒娇亲近声",
    animal: "狗狗",
    category: "叫声",
    summary: "更适合搭配主人陪伴、回家欢迎等主题内容，表现温和亲近感。",
    useCase: "陪伴情绪、主页精选、亲近互动",
    caution: "如果狗狗过度依赖关注，也要同步建立独处和安静休息能力。",
    audio: "/audio/library/dog-affection-soft.mp3",
    duration: "00:13",
    mood: "亲近依恋",
    tags: ["撒娇", "陪伴", "亲近"]
  },
  {
    slug: "cat-attractor-bell",
    title: "逗猫铃铛声",
    animal: "猫咪",
    category: "逗宠声音",
    summary: "适合作为逗猫和吸引注意力的短音效，适合做轻量试玩入口。",
    useCase: "吸引注意、短时互动、首页快捷播放",
    caution: "如果猫已经处于高警觉或烦躁状态，不要继续叠加铃铛刺激。",
    audio: "/audio/library/cat-attractor-bell.mp3",
    duration: "00:08",
    mood: "轻快吸引",
    tags: ["铃铛", "逗猫", "吸引注意"]
  },
  {
    slug: "pet-snack-bag",
    title: "零食袋摇晃声",
    animal: "狗狗",
    category: "逗宠声音",
    summary: "常见于召回和饭点前的注意力唤回，也适合作为通用宠物互动音效。",
    useCase: "召回注意力、零食互动、场景演示",
    caution: "不要频繁空放这类声音，否则宠物可能对刺激逐渐脱敏。",
    audio: "/audio/library/pet-snack-bag.mp3",
    duration: "00:09",
    mood: "食物期待",
    tags: ["零食袋", "召回", "互动音效"]
  }
];

export const trainingItems: TrainingItem[] = [
  {
    slug: "come",
    command: { zh: "过来", en: "Come" },
    summary: {
      zh: "最常用的召回口令，适合从短距离和低干扰环境开始练。",
      en: "A core recall command. Start with short distance and low-distraction practice."
    },
    goal: {
      zh: "建立名字反应之外的稳定靠近行为。",
      en: "Build a reliable move-toward-you response beyond simple name recognition."
    },
    tips: [
      { zh: "先在家中短距离练习", en: "Start indoors with short distances." },
      { zh: "过来后立刻奖励", en: "Reward immediately after the pet comes over." },
      { zh: "避免把过来和结束快乐活动强绑定", en: "Avoid making the cue mean fun is always about to end." }
    ],
    tags: [
      { zh: "召回", en: "Recall" },
      { zh: "基础训练", en: "Foundation training" },
      { zh: "高频口令", en: "High-frequency cue" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/come-female.mp3", en: "/audio/training/en/come-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/come-kid.mp3", en: "/audio/training/en/come-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/come-male.mp3", en: "/audio/training/en/come-male.mp3" } }
    ]
  },
  {
    slug: "sit",
    command: { zh: "坐下", en: "Sit" },
    summary: {
      zh: "最适合做起始训练的基础口令之一，容易串联等待和奖励时机。",
      en: "One of the best starter commands and easy to pair with waiting and reward timing."
    },
    goal: {
      zh: "建立基础配合和短暂停留能力。",
      en: "Build basic cooperation and a brief stationary hold."
    },
    tips: [
      { zh: "动作一完成就给奖励", en: "Reward as soon as the action is completed." },
      { zh: "别重复喊太多次", en: "Do not repeat the cue too many times." },
      { zh: "先保证诱导动作足够清晰", en: "Make sure your lure or hand signal is clear first." }
    ],
    tags: [
      { zh: "坐下", en: "Sit" },
      { zh: "基础动作", en: "Basic action" },
      { zh: "新手训练", en: "Beginner training" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/sit-female.mp3", en: "/audio/training/en/sit-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/sit-kid.mp3", en: "/audio/training/en/sit-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/sit-male.mp3", en: "/audio/training/en/sit-male.mp3" } }
    ]
  },
  {
    slug: "down",
    command: { zh: "趴下", en: "Down" },
    summary: {
      zh: "比坐下更需要引导和耐心，适合在宠物已经理解基础配合后加入。",
      en: "Usually needs more guidance than sit and works best after the pet understands basic cooperation."
    },
    goal: {
      zh: "帮助宠物进入更稳定的低唤醒姿态。",
      en: "Help the pet settle into a calmer, lower-arousal posture."
    },
    tips: [
      { zh: "从坐姿引导更容易", en: "It is often easier to guide from a sit." },
      { zh: "训练地面要舒适", en: "Use a comfortable training surface." },
      { zh: "不要在紧张状态下强压动作", en: "Do not force the behavior when the pet is tense." }
    ],
    tags: [
      { zh: "趴下", en: "Down" },
      { zh: "静态动作", en: "Stationary cue" },
      { zh: "进阶基础", en: "Early intermediate" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/down-female.mp3", en: "/audio/training/en/down-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/down-kid.mp3", en: "/audio/training/en/down-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/down-male.mp3", en: "/audio/training/en/down-male.mp3" } }
    ]
  },
  {
    slug: "quiet",
    command: { zh: "安静", en: "Quiet" },
    summary: {
      zh: "适合搭配兴奋管理和暂停提醒，不适合在宠物极度亢奋时硬压使用。",
      en: "Useful for arousal management and pause cues, but not for forcing compliance in peak excitement."
    },
    goal: {
      zh: "帮助宠物从高刺激状态回到可沟通状态。",
      en: "Help the pet return from high stimulation to a state where it can respond."
    },
    tips: [
      { zh: "先降低环境刺激", en: "Reduce environmental stimulation first." },
      { zh: "安静一秒也要及时强化", en: "Reinforce even one quiet second promptly." },
      { zh: "不要把口令变成持续背景音", en: "Do not turn the cue into constant background noise." }
    ],
    tags: [
      { zh: "安静", en: "Quiet" },
      { zh: "情绪管理", en: "Arousal management" },
      { zh: "行为边界", en: "Behavior boundary" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/quiet-female.mp3", en: "/audio/training/en/quiet-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/quiet-kid.mp3", en: "/audio/training/en/quiet-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/quiet-male.mp3", en: "/audio/training/en/quiet-male.mp3" } }
    ]
  },
  {
    slug: "no",
    command: { zh: "不可以", en: "No" },
    summary: {
      zh: "用于明确打断当前行为，但要和允许替代行为一起使用才更有效。",
      en: "Used to interrupt the current behavior, but works best when paired with an allowed alternative."
    },
    goal: {
      zh: "建立边界感，而不是单纯制造压力。",
      en: "Create clear boundaries instead of only adding pressure."
    },
    tips: [
      { zh: "打断后立刻给正确替代", en: "Offer the correct alternative right after the interruption." },
      { zh: "语气坚定但不要失控", en: "Keep the tone firm without escalating." },
      { zh: "不要在已经结束行为后再追着说", en: "Do not keep saying it after the behavior has already ended." }
    ],
    tags: [
      { zh: "边界", en: "Boundary" },
      { zh: "禁止口令", en: "Interruption cue" },
      { zh: "替代行为", en: "Alternative behavior" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/no-female.mp3", en: "/audio/training/en/no-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/no-kid.mp3", en: "/audio/training/en/no-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/no-male.mp3", en: "/audio/training/en/no-male.mp3" } }
    ]
  },
  {
    slug: "shake",
    command: { zh: "握手", en: "Shake" },
    summary: {
      zh: "互动感强的趣味动作，适合作为提高参与度的轻训练内容。",
      en: "A playful, interaction-heavy trick that works well for light engagement training."
    },
    goal: {
      zh: "增加正向互动和目标动作理解。",
      en: "Increase positive interaction and target-action understanding."
    },
    tips: [
      { zh: "训练时长控制在几分钟内", en: "Keep each training round within a few minutes." },
      { zh: "动作完成后及时奖励", en: "Reward quickly when the action is completed." },
      { zh: "不要强拉前爪完成动作", en: "Do not pull the paw to force the behavior." }
    ],
    tags: [
      { zh: "握手", en: "Shake" },
      { zh: "趣味训练", en: "Fun training" },
      { zh: "互动", en: "Interaction" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/shake-female.mp3", en: "/audio/training/en/shake-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/shake-kid.mp3", en: "/audio/training/en/shake-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/shake-male.mp3", en: "/audio/training/en/shake-male.mp3" } }
    ]
  },
  {
    slug: "high-five",
    command: { zh: "击掌", en: "High Five" },
    summary: {
      zh: "适合在握手基础上延伸，动作更轻快，也更适合内容展示。",
      en: "A natural extension of shake with a lighter rhythm that also looks better in demonstrations."
    },
    goal: {
      zh: "增加配合意愿和动作连贯性。",
      en: "Increase willingness to cooperate and improve action flow."
    },
    tips: [
      { zh: "先学会抬爪再学击掌", en: "Teach paw lift before adding the high-five target." },
      { zh: "目标位置保持稳定", en: "Keep the target position steady." },
      { zh: "奖励节奏要快", en: "Keep reward timing fast." }
    ],
    tags: [
      { zh: "击掌", en: "High five" },
      { zh: "互动", en: "Interaction" },
      { zh: "趣味训练", en: "Fun training" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/high-five-female.mp3", en: "/audio/training/en/high-five-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/high-five-kid.mp3", en: "/audio/training/en/high-five-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/high-five-male.mp3", en: "/audio/training/en/high-five-male.mp3" } }
    ]
  },
  {
    slug: "spin",
    command: { zh: "转圈", en: "Spin" },
    summary: {
      zh: "典型的表演型趣味口令，适合作为短时互动和内容演示。",
      en: "A classic trick-style cue that works well for short interaction sessions and demos."
    },
    goal: {
      zh: "提升专注度和动作跟随能力。",
      en: "Improve focus and following behavior."
    },
    tips: [
      { zh: "先用零食手势做诱导", en: "Start with a food lure or hand target." },
      { zh: "动作幅度从小到大", en: "Build the turn gradually from smaller movement." },
      { zh: "避免让关节不适的宠物频繁练", en: "Avoid frequent repetition for pets with joint discomfort." }
    ],
    tags: [
      { zh: "转圈", en: "Spin" },
      { zh: "表演动作", en: "Trick action" },
      { zh: "趣味口令", en: "Fun cue" }
    ],
    variants: [
      { voice: "female", audio: { zh: "/audio/training/zh/spin-female.mp3", en: "/audio/training/en/spin-female.mp3" } },
      { voice: "kid", audio: { zh: "/audio/training/zh/spin-kid.mp3", en: "/audio/training/en/spin-kid.mp3" } },
      { voice: "male", audio: { zh: "/audio/training/zh/spin-male.mp3", en: "/audio/training/en/spin-male.mp3" } }
    ]
  }
];

export const guideItems: GuideItem[] = [
  {
    slug: "cat-care-basics",
    title: "养猫基础常识",
    category: "养猫常识",
    summary: "从饮食、饮水、猫砂盆、抓挠到日常观察，建立稳定的养猫基本盘。",
    audience: "新手猫主人",
    readTime: "5 分钟",
    bullets: ["固定食盆与饮水位置", "保持猫砂盆清洁", "提供垂直空间", "留意精神状态和排泄变化"],
    intro:
      "养猫最重要的不是一开始买多少用品，而是尽快建立稳定、可预测的生活环境。猫咪对环境变化很敏感，只要饮食、排泄、休息和互动都比较稳定，很多常见应激问题就会少很多。",
    sections: [
      {
        heading: "先把生活动线布置清楚",
        body:
          "食物、水、猫砂盆、睡觉区和抓挠区最好分开布置，不要全部挤在一个角落。猫咪通常更喜欢安静、可退可进的位置，尤其是刚到家的前一两周，更需要能藏身和观察环境的空间。",
        tips: ["水碗与食盆分开放", "猫砂盆放在安静位置", "抓板靠近休息区更容易被使用"]
      },
      {
        heading: "观察比频繁干预更重要",
        body:
          "新手常常担心猫咪吃得少、躲起来或者不爱动，但这些表现不一定是生病，也可能只是还在适应。与其不断抱它、追着喂，不如每天固定时间观察食量、饮水、排便和精神状态，判断是否持续异常。",
        tips: ["看连续变化，不只看某一顿", "精神、食欲、排泄要结合判断"]
      },
      {
        heading: "建立低压力互动",
        body:
          "互动不一定是频繁摸抱。很多猫更喜欢用逗猫棒、抛接玩具、纸箱探索来建立信任。给猫留出主动靠近你的空间，会比强行亲近更有效。",
        tips: ["短时多次互动更自然", "结束前让猫有“抓到猎物”的满足感"]
      }
    ]
  },
  {
    slug: "dog-care-basics",
    title: "养狗基础常识",
    category: "养狗常识",
    summary: "涵盖作息、运动、社会化与家庭规则，帮助狗狗更稳定地融入家庭。",
    audience: "新手狗主人",
    readTime: "6 分钟",
    bullets: ["建立固定遛狗节奏", "从小做社会化", "明确允许和禁止行为", "运动量按年龄与体型调整"],
    intro:
      "养狗的核心在于节奏和边界。狗狗通常比猫更依赖稳定的日常安排，如果每天的散步、进食、训练和休息时间比较固定，它的情绪和行为也更容易稳定下来。",
    sections: [
      {
        heading: "规律作息能减少很多行为问题",
        body:
          "很多扑人、乱叫、拆家行为，本质上都和精力没有被合理消耗有关。固定的遛狗时间和活动量能帮助狗狗预期一天的节奏，减少因为无聊或焦虑引发的异常行为。",
        tips: ["先满足基础运动，再谈训练配合", "作息混乱时先调时间表"]
      },
      {
        heading: "社会化不是去“见越多越好”",
        body:
          "真正有效的社会化是让狗在安全、可控的环境里逐步接触声音、人、车、陌生狗和不同场景。重点是让它保持可接受的情绪，而不是一次塞进大量刺激。",
        tips: ["先低刺激再逐步增加难度", "出现害怕时先拉开距离"]
      },
      {
        heading: "家庭规则要统一",
        body:
          "同一个行为今天允许、明天禁止，会让狗很难理解边界。家里每个人都要统一口令和规则，例如能不能上沙发、饭点前是否给零食、出门前怎样等待。",
        tips: ["口令尽量固定", "规则一致比规则严格更重要"]
      }
    ]
  },
  {
    slug: "pet-home-safety",
    title: "家庭养宠注意事项",
    category: "注意事项",
    summary: "从家中危险物品到误食风险，梳理高频但容易被忽略的养宠安全问题。",
    audience: "所有养宠家庭",
    readTime: "4 分钟",
    bullets: ["收纳药品与清洁剂", "避免危险植物", "封闭窗户与阳台", "警惕人类零食误喂"],
    intro:
      "很多养宠风险并不发生在外面，而是发生在家里。对宠物来说，阳台缝隙、开放式垃圾桶、清洁剂、药片和人类零食都可能是高风险源头，越早排查越能减少意外。",
    sections: [
      {
        heading: "先排查会被舔、咬、误食的物品",
        body:
          "清洁用品、药品、精油、巧克力、葡萄、木糖醇口香糖等都不适合暴露放置。尤其是好奇心强的幼猫幼犬，往往会先闻、再舔、再咬，风险上升得很快。",
        tips: ["药品统一高处收纳", "垃圾桶选择有盖款"]
      },
      {
        heading: "家中高处和缝隙也要检查",
        body:
          "窗户、阳台、洗衣机后方、床底电线区、厨房缝隙，都是容易被忽视的位置。猫喜欢跳高和钻缝，狗则可能因为追逐或觅食突然冲向危险位置。",
        tips: ["纱窗不等于安全防护", "电线尽量做收束保护"]
      },
      {
        heading: "异常情况要优先求助专业机构",
        body:
          "如果已经出现误食、反复呕吐、精神萎靡、持续喘气、抽搐等情况，网站内容只能作为辅助参考，不能替代线下专业处理。",
        tips: ["记录误食时间和数量", "拍下包装便于就医说明"]
      }
    ]
  },
  {
    slug: "cat-feeding-tips",
    title: "猫咪饮食与饮水建议",
    category: "养猫常识",
    summary: "帮助主人理解主食、零食、饮水量和喂食频率之间的平衡关系。",
    audience: "想优化饮食结构的猫主人",
    readTime: "5 分钟",
    bullets: ["主食优先，零食控制比例", "多点饮水布局", "观察体重与便便变化", "突然换粮要循序渐进"],
    intro:
      "猫咪饮食问题常常不是“吃不吃”，而是“吃得是否平衡”。长期只吃零食、喝水太少、频繁突然换粮，都会慢慢累积成更难处理的问题。",
    sections: [
      {
        heading: "先保证主食结构稳定",
        body:
          "无论是干粮、湿粮还是混合喂养，核心都应该是完整主食。零食更适合作为奖励或互动辅助，而不是长期占据太高比例。",
        tips: ["先看配料和营养完整性", "零食控制在总热量的小比例内"]
      },
      {
        heading: "饮水管理经常被低估",
        body:
          "很多猫先天饮水欲望就不强，所以需要通过多个水点、流动饮水器和湿粮搭配来提高总摄入。饮水量突然变化，也常常是值得留意的信号。",
        tips: ["家里多个位置放水", "定期清洗饮水容器"]
      },
      {
        heading: "换粮不要太快",
        body:
          "突然换粮容易引起软便、拒食或肠胃不适。更稳妥的做法是逐步增加新粮比例，让猫的消化系统有时间适应。",
        tips: ["3 到 7 天逐步过渡", "换粮期间观察便便状态"]
      }
    ]
  },
  {
    slug: "dog-daily-routine",
    title: "狗狗日常作息安排",
    category: "养狗常识",
    summary: "把遛狗、进食、训练和休息串联成稳定日程，更有助于行为管理。",
    audience: "希望建立稳定生活节奏的狗主人",
    readTime: "5 分钟",
    bullets: ["固定遛狗时段", "把训练融入日常", "运动后再安排安静休息", "规律作息能减少焦虑行为"],
    intro:
      "狗狗比很多人想象中更依赖稳定日常。规律不是为了机械安排，而是为了让它知道什么时候活动、什么时候休息、什么时候能获得关注和反馈。",
    sections: [
      {
        heading: "先固定最核心的两个时间点",
        body:
          "如果暂时做不到很完整的作息表，至少先固定每天的遛狗和进食时间。只要这两个节奏稳定，很多行为问题都会先缓和下来。",
        tips: ["工作日和周末尽量不要差太多", "过长空窗期要用益智玩具分散注意力"]
      },
      {
        heading: "把训练融入生活，不用每次都像上课",
        body:
          "等待、坐下、唤名回应、散步中回头看人，这些都可以拆进日常互动里。训练不是一次练很久，而是高频、短时、明确反馈。",
        tips: ["一次 3 到 5 分钟就够", "做对立刻奖励"]
      },
      {
        heading: "休息同样是作息的一部分",
        body:
          "有些狗不是运动不够，而是太兴奋后不会平静下来。活动后安排一个安静恢复的过程，能帮助狗狗从高刺激状态回到平稳状态。",
        tips: ["准备固定休息点", "运动后不要立刻再加新刺激"]
      }
    ]
  }
];

export const stageItems: StageItem[] = [
  {
    slug: "kitten-stage",
    title: "猫咪幼年阶段指南",
    category: "猫咪阶段",
    summary: "幼猫阶段重点在于安全感建立、饮食频率、免疫计划和早期行为引导。",
    audience: "幼猫主人",
    readTime: "5 分钟",
    bullets: ["高频少量喂食", "逐步熟悉家庭环境", "安排疫苗与驱虫", "避免过早高强度洗澡"],
    intro:
      "幼猫阶段最需要的是稳定和安全。与其急着训练各种行为，不如先让它吃得下、睡得稳、愿意探索环境，并在这个基础上慢慢建立互动和习惯。",
    sections: [
      {
        heading: "先缩小活动范围，再逐渐放开",
        body:
          "刚到家的幼猫不适合一下子接触整个屋子。先给一个安静、封闭感更强的小范围空间，更容易建立安全感，也方便你观察饮食和排泄。",
        tips: ["准备躲藏点和软垫", "前几天减少陌生人围观"]
      },
      {
        heading: "饮食频率要比成年猫更高",
        body:
          "幼猫胃容量小、代谢快，更适合少量多餐。比起一口气吃很多，更重要的是稳定摄入和良好消化。",
        tips: ["按月龄调整频率", "换粮和加零食都要慢一点"]
      },
      {
        heading: "早期建立温和的人宠互动",
        body:
          "幼猫对环境和人的印象建立得很快。轻柔触碰、短时玩耍、固定的喂食和清理动作，都会帮助它更快适应家庭生活。",
        tips: ["互动时间短而频繁", "先让猫主动靠近你"]
      }
    ]
  },
  {
    slug: "adult-cat-stage",
    title: "猫咪成年阶段指南",
    category: "猫咪阶段",
    summary: "成年猫进入相对稳定期，重点是体重管理、环境 enrichment 和压力控制。",
    audience: "成年猫主人",
    readTime: "4 分钟",
    bullets: ["维持体重", "增加互动玩具", "规律体检", "关注饮水量变化"],
    intro:
      "成年猫通常看起来最省心，但问题也容易被忽视。体重、饮水、活动量和行为变化往往是最早的信号，越早建立观察习惯，越容易把问题控制在前期。",
    sections: [
      {
        heading: "维持适度活动是核心",
        body:
          "室内猫尤其容易在成年后活动下降、体重上升。适度的互动玩具、跳台和每日游戏能帮助它维持较好的状态。",
        tips: ["每天安排固定互动时段", "用不同玩具轮换保持新鲜感"]
      },
      {
        heading: "环境变化要循序渐进",
        body:
          "搬家、装修、新成员加入、猫砂或猫粮变化，都可能影响成年猫的稳定感。变化越大，越要给它熟悉旧气味和旧习惯的过渡空间。",
        tips: ["旧用品不要一次性全换掉", "新环境保留可躲藏位置"]
      },
      {
        heading: "把日常观察当成基础保养",
        body:
          "饮水突然变多、掉毛异常、体重下降、变得不愿跳高，往往都值得尽早记录和留意，不要等到问题非常明显才开始处理。",
        tips: ["每月看一次体重", "留意排泄频率与精神状态"]
      }
    ]
  },
  {
    slug: "puppy-stage",
    title: "狗狗幼年阶段指南",
    category: "狗狗阶段",
    summary: "幼犬阶段需要重点处理社会化、口令建立、咬合期管理和安全感。",
    audience: "幼犬主人",
    readTime: "6 分钟",
    bullets: ["建立名字反应", "咬东西时给替代物", "循序渐进社会化", "短时高频训练"],
    intro:
      "幼犬阶段是行为基础建立最快的一段时间。名字反应、定点习惯、啃咬替代、短时训练和安全感建立，都值得尽早开始，但节奏一定要稳。",
    sections: [
      {
        heading: "先建立基本沟通",
        body:
          "名字反应、看向主人、短暂等待，都是之后所有训练的基础。幼犬能先听懂这些，比一开始学很多复杂口令更重要。",
        tips: ["叫名字后立刻给反馈", "先在低干扰环境练习"]
      },
      {
        heading: "啃咬期要给合理替代",
        body:
          "幼犬喜欢咬手、咬家具并不一定是故意捣乱，很多时候只是处在口欲和探索阶段。关键不是一味制止，而是及时给合适替代物。",
        tips: ["准备不同口感的啃咬玩具", "咬错对象时及时转移"]
      },
      {
        heading: "训练宜短不宜长",
        body:
          "幼犬注意力时间有限，几分钟的高质量训练比长时间重复更有效。结束时保持成功体验，会让它更愿意参与下一次训练。",
        tips: ["一次练一两个目标", "做到八成就可以结束"]
      }
    ]
  },
  {
    slug: "senior-dog-stage",
    title: "狗狗老年阶段指南",
    category: "狗狗阶段",
    summary: "老年犬更需要关节、牙口、体重和情绪陪伴方面的持续观察。",
    audience: "老年犬主人",
    readTime: "5 分钟",
    bullets: ["调整运动强度", "补充防滑环境", "定期口腔检查", "注意睡眠和认知变化"],
    intro:
      "老年犬不一定会突然明显变老，很多变化都是缓慢出现的。主人越早开始调整运动、地面防滑、饮食和陪伴方式，狗狗越容易平稳进入老年期。",
    sections: [
      {
        heading: "把“少量多次”作为活动原则",
        body:
          "老年犬通常不适合一次长时间高强度运动，改成更短、更温和但更规律的活动，往往更舒服，也更容易坚持。",
        tips: ["缩短单次时长", "观察活动后恢复状态"]
      },
      {
        heading: "家庭环境要更友好",
        body:
          "光滑地面、过高的沙发、频繁上下楼都可能给关节带来负担。简单的地垫、防滑垫和台阶辅助，能明显提升舒适度。",
        tips: ["常活动区域铺防滑垫", "睡觉位置保持温暖和稳定"]
      },
      {
        heading: "留意认知和作息变化",
        body:
          "如果老年犬开始夜里躁动、白天睡很多、对熟悉口令反应变慢，可能不仅是“老了”，也可能提示需要进一步评估。",
        tips: ["记录行为变化出现频率", "出现明显异常时尽快咨询专业人士"]
      }
    ]
  },
  {
    slug: "senior-cat-stage",
    title: "猫咪老年阶段指南",
    category: "猫咪阶段",
    summary: "老年猫更需要关注体重、饮水、关节和慢性病相关变化。",
    audience: "老年猫主人",
    readTime: "5 分钟",
    bullets: ["观察食欲和饮水量", "增加低跳跃高度的休息区", "定期体检筛查慢性问题", "减少环境频繁变化"],
    intro:
      "老年猫往往不会像狗那样明显表达不舒服，它们更可能通过变安静、跳得少、吃得慢、喝水变化来提示身体状态。这个阶段最重要的是细致观察和减少环境负担。",
    sections: [
      {
        heading: "让日常活动更省力",
        body:
          "如果老年猫开始不爱跳高，不一定只是懒，也可能和关节不适有关。把食盆、水、猫砂盆和休息位调整到更容易抵达的位置，会明显减轻负担。",
        tips: ["减少必须高跳的路线", "猫砂盆边缘不宜过高"]
      },
      {
        heading: "饮水和体重变化值得重点留意",
        body:
          "老年猫出现饮水变化、体重下降或食欲波动时，不要简单理解为“年纪大了”。这类变化往往更值得提早记录并进一步确认。",
        tips: ["定期称重", "观察喝水频次和食量"]
      },
      {
        heading: "稳定感比新鲜感更重要",
        body:
          "很多成年猫喜欢新玩具，但老年猫通常更在意熟悉和可预期。少量、温和的互动和稳定环境，往往比频繁换环境更重要。",
        tips: ["保留常用睡垫和气味", "互动以轻柔短时为主"]
      }
    ]
  }
];
