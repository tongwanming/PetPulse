export type MindMapNode = {
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

export const petChatSourceRoot = "/Users/xiaomao822/Desktop/git/petchat/PetChat";

export const petChatStats = [
  { label: "功能分支", value: "9" },
  { label: "SDK/能力集成", value: "24" },
  { label: "埋点事件", value: "72" },
  { label: "下发参数", value: "25" }
];

export const petChatFeatureMindMap: MindMapNode = {
  id: "features",
  title: "PetChat 功能总览",
  summary: "从 PetChat iOS 项目读取出的主功能树，按启动链路、五个 Tab、订阅能力和公共能力拆分。",
  source: "PetChat/Module + PetChat/Common/Managers",
  children: [
    {
      id: "launch",
      title: "启动、合规与新手引导",
      summary: "启动页串联网络权限、地区协议、ATT、OceanEngine 归因、Adjust 归因、登录、远端配置和 onboarding。",
      source: "PetChat/Module/Launch/PCLaunchVC.swift",
      children: [
        {
          id: "launch-flow",
          title: "启动放行流程",
          summary: "网络权限完成后，国内 App Store 账号先展示用户协议；随后获取设备标识、发起登录、等待归因窗口与远端配置，最后进入主 Tab。",
          source: "PCLaunchVC.swift, PCRouter.swift"
        },
        {
          id: "agreement",
          title: "用户协议弹窗",
          summary: "国内用户首次启动在 ATT 前展示协议弹窗，同意后继续启动，拒绝则记录拒绝事件。",
          source: "PetChat/Module/Launch/PCAgreementVC.swift"
        },
        {
          id: "onboarding",
          title: "Onboarding 视频引导",
          summary: "首次启动可按远端 `boarding_page_show` 控制 a/b/c/d/e 页面顺序，支持滑动与 Continue 按钮进入下一页。",
          source: "PetChat/Module/Guide/PCGuideVC.swift, PCSelectPetVC.swift"
        },
        {
          id: "pet-selection",
          title: "宠物类型选择",
          summary: "新用户在引导链路里选择猫、狗或两者，后续影响 Pet Talk、Pet Thoughts 的图像与入口状态。",
          source: "PetChat/Module/Guide/PCSelectPetVC.swift, PCPetSelectionManager.swift"
        }
      ]
    },
    {
      id: "tabs",
      title: "主导航五 Tab",
      summary: "底部 Tab 顺序为 Pet Magic、Pet Thoughts、Pet Talk、Pet Sounds、Pet Hub，默认选中 Pet Talk。",
      source: "PetChat/Module/MainTab/PCTabBarController.swift",
      children: [
        { id: "tab-magic", title: "Pet Magic", summary: "AI 模板、Banner、分类分段、创作入口与我的创作进度。", source: "PCPetMagicNewVC.swift" },
        { id: "tab-thoughts", title: "Pet Thoughts", summary: "上传宠物图片或视频，生成宠物想法并以聊天列表展示。", source: "PCPetThoughtsVC.swift" },
        { id: "tab-talk", title: "Pet Talk", summary: "猫狗场景切换、人声转宠物声、宠物声转人类解释、录音与结果页。", source: "PCPetTalkNewVC.swift" },
        { id: "tab-sounds", title: "Pet Sounds", summary: "训练口令、召唤声音、情绪/自然声音播放与 VIP 锁。", source: "PCPetSoundsVC.swift" },
        { id: "tab-hub", title: "Pet Hub", summary: "宠物档案、翻译历史、我的创作、隐私协议入口和反馈入口。", source: "PCPetHubVC.swift" }
      ]
    },
    {
      id: "pet-magic",
      title: "Pet Magic AI 创作",
      summary: "使用 FaceSwap/Chatplay 模板接口获取 Banner、一级分组、二级分类与模板列表，进入详情后选择照片并创建任务。",
      source: "PetChat/Module/PetMagicNew, PetChat/Module/PetMagic",
      children: [
        {
          id: "magic-home",
          title: "模板首页与分类",
          summary: "JXSegmentedView + JXPagingView 展示远端 operation categories；每个分组用横向 section 或分页网格展示模板。",
          source: "PCPetMagicNewVC.swift, PCPetMagicNewListVC.swift"
        },
        {
          id: "magic-detail",
          title: "特效详情与开始制作",
          summary: "模板详情页展示资源信息，可选择已存照片或进入相册，点击立即制作后创建 AI 任务。",
          source: "PCPetMagicDetailVC.swift"
        },
        {
          id: "magic-progress",
          title: "任务进度与结果",
          summary: "进度管理器轮询制作状态，支持成功完成页、失败提示、重试和进度角标。",
          source: "PCProgressManager.swift, PCPetMagicDownloadManager.swift"
        },
        {
          id: "magic-cache",
          title: "缓存与降级",
          summary: "模板列表失败时读取 PCJSONDiskCache；缺少缓存时使用内置 mock/fallback sections 避免空白。",
          source: "PCJSONDiskCache.swift, PCFaceSwapCacheKeys.swift"
        }
      ]
    },
    {
      id: "pet-thoughts",
      title: "Pet Thoughts 宠物想法",
      summary: "用相册图片或视频调用 pet-thoughts 接口分析，结果以聊天气泡、依据展开和历史恢复的形式呈现。",
      source: "PetChat/Module/PetThoughts",
      children: [
        { id: "thoughts-upload", title: "媒体上传", summary: "点击上传按钮进入相册；支持 PHAsset 图片和视频，视频会导出后上传。", source: "PCPetThoughtsVC.swift" },
        { id: "thoughts-analysis", title: "想法分析", summary: "调用图片/视频分析接口，成功后输出宠物回复、分析说明和依据列表；失败时保留可重试状态。", source: "PCPetThoughtsService.swift" },
        { id: "thoughts-chat", title: "聊天化呈现", summary: "消息分为宠物、人类、图片、视频、loading；支持打字动画、本地分页、编辑和删除。", source: "PCPetThoughtsVC.swift, PCPetThoughtCells.swift" },
        { id: "thoughts-quota", title: "免费次数与付费墙", summary: "非会员受免费次数控制，成功后消费次数，超限时拉起订阅页。", source: "PCPetThoughtsFreeTrialManager.swift" }
      ]
    },
    {
      id: "pet-talk",
      title: "Pet Talk 跨物种翻译",
      summary: "猫狗场景切换，录制人声或宠物声，调用跨物种音频接口，展示分析动画与翻译结果。",
      source: "PetChat/Module/PetTalk",
      children: [
        { id: "talk-scenario", title: "猫狗场景", summary: "顶部视频和背景资源按猫/狗切换，默认猫场景，支持 intro/loop 视频状态。", source: "PCPetTalkNewVC.swift" },
        { id: "talk-record", title: "录音交互", summary: "AVAudioRecorder 录音，最长 60 秒，overlay 支持取消与停止，停止时进入分析流程。", source: "PCPetTalkNewVC.swift, PCPetTalkRecordingOverlayView.swift" },
        { id: "talk-api", title: "音频翻译接口", summary: "宠物音频转人类解释、人声转猫/狗音频，结果保存本地并进入结果页。", source: "PCPetTalkAudioService.swift, PCVoiceRecordVC.swift" },
        { id: "talk-guide", title: "录音引导", summary: "首次录音前展示 Talk Guide，引导完成后记录状态并继续录音。", source: "PCPetTalkGuideOverlayView.swift, PCPetTalkNewVC.swift" }
      ]
    },
    {
      id: "pet-sounds",
      title: "Pet Sounds 声音库",
      summary: "内置训练口令、猫狗召唤、情绪/自然声音；使用 AVAudioPlayer 播放并按远端配置控制免费次数与评分引导。",
      source: "PetChat/Module/PetSounds/PCPetSoundsVC.swift",
      children: [
        { id: "sounds-training", title: "训练口令", summary: "坐下、过来、趴下、安静、握手、击掌、转圈、不可以；支持 commanding/gentle/playful 声线。", source: "PCPetSoundsVC.swift" },
        { id: "sounds-summon", title: "猫狗召唤声", summary: "猫/狗的爱你、饥饿、好奇、开心、陪我玩、吵架等声音，部分 VIP 锁定。", source: "PCPetSoundsVC.swift" },
        { id: "sounds-emotion", title: "情绪与自然声音", summary: "猫吸引、狗自然声等素材区，按 section + grid 展示。", source: "PCPetSoundsVC.swift" },
        { id: "sounds-rating", title: "播放后的评分引导", summary: "播放完成后累计次数，达到远端阈值时触发系统或自定义评分弹窗。", source: "PCRatingManager.swift" }
      ]
    },
    {
      id: "pet-hub",
      title: "Pet Hub 宠物中心",
      summary: "管理宠物资料、翻译历史和我的创作，并承载隐私协议、用户协议、反馈入口。",
      source: "PetChat/Module/PetHub",
      children: [
        { id: "hub-pets", title: "宠物档案", summary: "展示、添加、编辑和删除本地宠物数据；添加成功后刷新宠物列表。", source: "PCPetHubVC.swift, PCPetHubAddPetVC.swift" },
        { id: "hub-history", title: "Talk 历史", summary: "展示翻译历史，支持播放源音频/结果音频、查看详情、批量选择与删除。", source: "PCPetHubViewModel.swift" },
        { id: "hub-creations", title: "我的创作", summary: "从 Hub 进入我的创作页，和 Pet Magic 的制作结果形成闭环。", source: "PCPetHubMyCreations.swift" },
        { id: "hub-settings", title: "协议与反馈", summary: "右上信息面板进入隐私政策、用户协议和反馈弹窗。", source: "PCPetHubInfoVC.swift, PCFeedbackManager.swift" }
      ]
    },
    {
      id: "vip",
      title: "订阅、会员与强拉支付",
      summary: "StoreKit 2 商品加载、购买、恢复、权益校验、订阅页 A/B/Custom，以及冷启动强拉 paywall。",
      source: "PetChat/Common/Managers/StoreKit, PetChat/Module/VIP",
      children: [
        { id: "vip-paywall", title: "订阅页", summary: "PCVIPPaywallFactory 根据远端配置创建不同订阅页；展示套餐、协议、恢复购买和关闭。", source: "PCVIPBaseVC.swift, PCVIPPaywallFactory.swift" },
        { id: "vip-storekit", title: "StoreKit 2 交易", summary: "加载 Product、发起 purchase、监听 Transaction.updates、读取 currentEntitlements。", source: "PremiumCenter.swift, IAPPurchaseEngine.swift" },
        { id: "vip-server", title: "服务端验单", summary: "交易成功后将 order_id/productID 给服务端 checkOrder/report，服务端拒绝时不授予会员。", source: "PCServerGatekeeper.swift, PCPurchaseService.swift" },
        { id: "vip-force", title: "冷启动强拉支付", summary: "首页首次可见后可按远端配置对非会员自动拉起订阅页并附加强拉购买逻辑。", source: "PCTabBarController.swift, PCIapPopOpenManager.swift" }
      ]
    },
    {
      id: "common",
      title: "公共基础能力",
      summary: "网络、数据库、图片、相册、视频、评分、反馈、远端配置、归因调试和埋点统一入口。",
      source: "PetChat/Common",
      children: [
        { id: "common-network", title: "网络与签名", summary: "NetworkManager + Alamofire，按 Storefront 选择 host，统一请求模型、错误和签名头。", source: "NetManager" },
        { id: "common-db", title: "本地数据库", summary: "LKDBHelper/FMDb 保存宠物数据、Talk 历史和本地业务状态。", source: "DBManager/PCDBManager.swift" },
        { id: "common-media", title: "相册/视频/音频", summary: "PHPhotoLibrary、AVFoundation、视频播放器、相册选择器和录制页面复用。", source: "PCPhotoPickManager, PCVideoPlayerView.swift" },
        { id: "common-events", title: "统一埋点", summary: "PCReport.report 统一路由 Adjust 事件和 Thinking/Firebase 事件，并在 Debug 打印触发位置。", source: "PCReportTool.swift, EventManager.swift" }
      ]
    }
  ]
};

export const petChatSdkMindMap: MindMapNode = {
  id: "sdk",
  title: "三方 SDK 与触发点",
  summary: "从 Podfile、AppDelegate、各 Manager 和 import 扫描得到的 SDK 集成树。",
  source: "Podfile, AppDelegate.swift, Common/Managers",
  children: [
    {
      id: "analytics-sdk",
      title: "埋点与分析",
      summary: "ThinkingSDK 和 Firebase Analytics 由 EventManager 统一初始化与上报；PCReport 的 `.other` 事件最终进入这条链路。",
      source: "EventManager.swift, PCReportTool.swift",
      children: [
        { id: "thinking", title: "ThinkingSDK", summary: "AppDelegate 前置创建 ThinkingMangaer；EventManager.trackThinking 调用 TDAnalytics.track，并同步用户属性。", source: "ThinkingMangaer.swift, EventManager.swift" },
        { id: "firebase-analytics", title: "Firebase Analytics", summary: "存在 GoogleService-Info.plist 时 FirebaseApp.configure；Analytics.logEvent 上报并设置 user properties。", source: "EventManager.swift, GoogleService-Info.plist" }
      ]
    },
    {
      id: "attribution",
      title: "广告归因与买量",
      summary: "Adjust、OceanEngine/BDASignal、TikTok Business、Facebook SDK 共同服务启动归因、买量判定和回传参数。",
      source: "AdjustManager.swift, PCOceanEngineManager.swift, PCTikTokBusinessManager.swift, AppDelegate.swift",
      children: [
        { id: "adjust", title: "Adjust SDK", summary: "ATT 完成后 startAttributionFlow 初始化 Adjust，查询 attribution/adid，冻结自然或买量结果，并向 Adjust 上报付费/留存 token。", source: "AdjustManager.swift" },
        { id: "oceanengine", title: "OceanEngine + BDASignalSDK", summary: "AppDelegate 记录启动上下文，Launch 中 setup 查询巨量融合归因；解析 deeplink clickid，并把 callback_param/track_id 同步到 Adjust partner parameter。", source: "PCOceanEngineManager.swift" },
        { id: "tiktok", title: "TikTok Business SDK", summary: "隐私链路完成后由 PCLaunchVC 调用 setupIfNeeded；配置完整时 initializeSdk。", source: "PCTikTokBusinessManager.swift, PCLaunchVC.swift" },
        { id: "facebook", title: "Facebook SDK Core", summary: "AppDelegate didFinishLaunching 和 openURL 交给 FBSDKCoreKit ApplicationDelegate。", source: "AppDelegate.swift" }
      ]
    },
    {
      id: "remote-config",
      title: "远端配置与 A/B",
      summary: "Firebase Remote Config 与友盟 UMRemoteConfig 竞争先成功来源，PCAppRemoteConfig 把下发参数映射给业务。",
      source: "PCRemoteConfigCenter.swift, PCUMRemoteConfigBridge.m, PCAppRemoteConfig.swift",
      children: [
        { id: "firebase-rc", title: "Firebase Remote Config", summary: "AppDelegate 启动 PCRemoteConfigCenter；fetchAndActivate 成功后记录 firebase 来源并通知业务。", source: "PCRemoteConfigCenter.swift" },
        { id: "um-rc", title: "友盟 RemoteConfig/ABTest", summary: "PCUMManager 初始化 UMCommon/APM；Objective-C bridge 监听 UMRemoteConfig 成功回调并通知 Swift 层。", source: "PCUMManager.swift, PCUMRemoteConfigBridge.m" },
        { id: "business-config", title: "业务开关", summary: "控制 onboarding 页、订阅页类型、免费次数、评分弹窗、Pet Magic 高质量模式、强拉支付等。", source: "PCAppRemoteConfig.swift, PCRemoteConfigKeys.swift" }
      ]
    },
    {
      id: "purchase",
      title: "支付与会员",
      summary: "StoreKit 2 与服务端验单共同决定会员态；订阅页、功能锁和冷启动 paywall 都读取 PremiumCenter/UserDefaults 状态。",
      source: "Common/Managers/StoreKit, Module/VIP",
      children: [
        { id: "storekit", title: "StoreKit 2", summary: "加载商品、购买、恢复、监听交易更新、读取当前权益和 storefront 国家码。", source: "PremiumCenter.swift, IAPPurchaseEngine.swift, PCStorefrontTool.swift" },
        { id: "server-order", title: "服务端订单校验", summary: "purchase/report/checkOrder 接口校验交易；服务端拒绝时阻止会员态。", source: "PCPurchaseService.swift, PCServerGatekeeper.swift" },
        { id: "paywall-ui", title: "订阅页 UI", summary: "PCVIPA/B/Custom 订阅页展示、点击、关闭、恢复购买、协议弹窗和成功回调。", source: "Module/VIP/VC" }
      ]
    },
    {
      id: "network-media-ui",
      title: "网络、媒体和 UI 基础库",
      summary: "这些 SDK 支撑模板请求、图片加载、音频播放、布局、分页和本地持久化。",
      source: "Podfile, Common, Module",
      children: [
        { id: "networking", title: "Alamofire", summary: "NetworkManager 发送业务 API；Pet Thoughts 也保留 ongoing DataRequest 以便取消。", source: "PCNetworkManager.swift, PCPetThoughtsVC.swift" },
        { id: "images", title: "Kingfisher / SDWebImage / WebP", summary: "远端图片加载、缓存与 WebP 解码；AppDelegate 启动时注册 SDImageWebPCoder。", source: "AppDelegate.swift, PCKingfisher+Ex.swift" },
        { id: "layout-rx", title: "SnapKit / RxSwift / RxCocoa", summary: "SnapKit 做约束布局；Rx 用于 ViewModel subject 与页面绑定。", source: "Base, Module/PetMagicNew" },
        { id: "lists", title: "MJRefresh / JXSegmentedView / JXPagingView / FSPagerView", summary: "分页加载、分段切换、嵌套列表和 banner/轮播组件。", source: "PCPetMagicNewVC.swift, PCPetMagicNewListVC.swift" },
        { id: "animation", title: "Lottie / BDAlphaPlayer / FLAnimatedImage", summary: "Pet Sounds 动画、透明视频/Alpha Player、GIF 动效等资源展示。", source: "Podfile, Module/PetSounds, Resource" },
        { id: "storage", title: "FMDB / LKDBHelper / SSZipArchive", summary: "本地数据库与资源解压/缓存，用于宠物数据、历史和创作相关状态。", source: "PCDBManager.swift, Podfile" }
      ]
    }
  ]
};

export const petChatRemoteParameters: PetChatRemoteParameter[] = [
  {
    key: "Demo_Key",
    module: "调试/链路验证",
    defaultValue: "false",
    feature: "验证 Firebase/友盟参数下发、读取来源和解析层是否打通；启动页日志会打印当前 demo 开关。",
    triggerLocation: "Module/Launch/PCLaunchVC.swift:162",
    parseLocation: "Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:281"
  },
  {
    key: "pet_magic_free_trial_count",
    module: "Pet Magic",
    defaultValue: "1",
    feature: "控制非会员 Pet Magic 可免费制作次数；也可被 `pet_magic_subscribe_mode` 打包 JSON 覆盖。",
    triggerLocation: "Module/PetMagic/Manager/PCPetMagicFreeMakeManager.swift:36, 49",
    parseLocation: "PCAppRemoteConfig.swift:367"
  },
  {
    key: "pet_magic_subscribe_mode",
    module: "Pet Magic",
    defaultValue: "0",
    feature: "控制 Pet Magic 是否走订阅模式；支持直接下发 0/1，也支持 JSON 打包 `pet_magic_free_trial_count` 和 `high_quality`。",
    triggerLocation: "Module/PetMagic/Manager/PCPetMagicFreeMakeManager.swift:64, PCPetMagicDetailVC.swift:186",
    parseLocation: "PCAppRemoteConfig.swift:331"
  },
  {
    key: "high_quality",
    module: "Pet Magic",
    defaultValue: "0",
    feature: "控制 Pet Magic 高清保存权益/次数，非会员保存高清资源时读取该额度。",
    triggerLocation: "Module/PetMagic/Manager/PCPetMagicHighQualityManager.swift:26, 35",
    parseLocation: "PCAppRemoteConfig.swift:371"
  },
  {
    key: "pet_talk_free_trial_count",
    module: "Pet Talk",
    defaultValue: "3",
    feature: "控制 Pet Talk 总免费录音/翻译次数；1.0.9 后可下发 JSON，并包含 `free_trial_count` 和 `emotion_free_trial_count`。",
    triggerLocation: "Module/PetTalk/PCPetTalkFreeTrialManager.swift:27, 34, 65",
    parseLocation: "PCAppRemoteConfig.swift:298"
  },
  {
    key: "emotion_free_trial_count",
    module: "Pet Talk",
    defaultValue: "1",
    feature: "作为 Pet Talk 情绪/宠物声翻译免费次数的独立兜底 key，最终值不会超过总免费次数。",
    triggerLocation: "Module/PetTalk/PCPetTalkFreeTrialManager.swift:40, 73",
    parseLocation: "PCAppRemoteConfig.swift:310, 324"
  },
  {
    key: "pet_talk_guide_config",
    module: "Pet Talk",
    defaultValue: "true / 1",
    feature: "控制 Pet Talk 首页首次录音引导是否展示；关闭后直接进入录音流程。",
    triggerLocation: "Module/PetTalk/PCPetTalkNewVC.swift:333",
    parseLocation: "PCAppRemoteConfig.swift:338"
  },
  {
    key: "pet_sounds_free_trial_count",
    module: "Pet Sounds",
    defaultValue: "5",
    feature: "控制非会员 Pet Sounds 可免费播放次数。",
    triggerLocation: "Module/PetSounds/Manager/PCPetSoundsFreePlayManager.swift:40, 50",
    parseLocation: "PCAppRemoteConfig.swift:386"
  },
  {
    key: "pet_sounds_subscribe_mode",
    module: "Pet Sounds",
    defaultValue: "0",
    feature: "控制 Pet Sounds 是否启用订阅锁定模式。",
    triggerLocation: "Module/PetSounds/Manager/PCPetSoundsFreePlayManager.swift:30",
    parseLocation: "PCAppRemoteConfig.swift:392"
  },
  {
    key: "Pet_sounds_rating_guide",
    module: "评分",
    defaultValue: "4",
    feature: "控制 Pet Sounds 播放完成累计到第几次后触发评分引导；代码会用 max(1, value) 兜底。",
    triggerLocation: "Common/Managers/PCRatingManager/PCRatingManager.swift:136",
    parseLocation: "PCAppRemoteConfig.swift:398"
  },
  {
    key: "rating_prompt_type",
    module: "评分",
    defaultValue: "system",
    feature: "控制评分弹窗样式，支持 `system` 系统评分弹窗或 `custom` 自定义反馈评分弹窗。",
    triggerLocation: "Common/Managers/PCRatingManager/PCRatingManager.swift:277",
    parseLocation: "PCAppRemoteConfig.swift:404"
  },
  {
    key: "pet_thought_free_trial_count",
    module: "Pet Thoughts",
    defaultValue: "1",
    feature: "控制非会员 Pet Thoughts 图片/视频分析免费次数。",
    triggerLocation: "Module/PetThoughts/Manager/PCPetThoughtsFreeTrialManager.swift:26, 33, 40",
    parseLocation: "PCAppRemoteConfig.swift:417"
  },
  {
    key: "subscribe_page_type",
    module: "订阅",
    defaultValue: "0",
    feature: "保留的订阅页类型参数，启动日志会读取；当前实际 paywall 分流主要由订阅分组的 `sub_page` 决定。",
    triggerLocation: "Module/Launch/PCLaunchVC.swift:165",
    parseLocation: "PCAppRemoteConfig.swift:423"
  },
  {
    key: "Promote_Sub_Group",
    module: "订阅分组",
    defaultValue: "Default 分组：sub_page=B, sub_enter=A, sub_vip=A, sub_magic=B, sub_sounds=C, sub_talk=A, sub_thoughts=D, selected/first=com.petchat.week02, second=com.petchat.yearly03, close_transparency=0.5, close_time=0",
    feature: "买量用户订阅页分组配置，按 Campaign/Ad_Group 命中不同 paywall、套餐、功能入口订阅页资源和关闭按钮策略。",
    triggerLocation: "Module/VIP/PCVIPPaywallFactory.swift:88, Common/Managers/EventManager/PCGroupingReportManager.swift:150",
    parseLocation: "PCAppRemoteConfig.swift:439, 654"
  },
  {
    key: "Organic_Sub_Group",
    module: "订阅分组",
    defaultValue: "Default 分组：与 Promote_Sub_Group 默认值相同",
    feature: "自然用户订阅页分组配置，未命中买量归因时作为 paywall 样式和套餐选择来源。",
    triggerLocation: "Module/VIP/PCVIPPaywallFactory.swift:85, 94",
    parseLocation: "PCAppRemoteConfig.swift:447, 654"
  },
  {
    key: "Grouping",
    module: "分组埋点",
    defaultValue: "空字符串",
    feature: "独立分组事件参数；下发 `A` 时会上报 `Grouping_A`，为空则不上报。",
    triggerLocation: "Common/Managers/EventManager/PCGroupingReportManager.swift:142",
    parseLocation: "PCAppRemoteConfig.swift:429"
  },
  {
    key: "Grouping_X",
    module: "分组埋点",
    defaultValue: "空字符串",
    feature: "兼容旧命名的 Grouping 参数；主 key 为空时读取该 key。",
    triggerLocation: "Common/Managers/AdjustManager/AdjustManager.swift:258, PCGroupingReportManager.swift:142",
    parseLocation: "PCAppRemoteConfig.swift:435"
  },
  {
    key: "boarding_enabled",
    module: "Onboarding",
    defaultValue: "true / 1",
    feature: "控制首次启动是否展示引导页；同时受本地 `PCBoardingManager.hasShownBoarding` 限制，只展示一次。",
    triggerLocation: "Module/Launch/PCLaunchVC.swift:460",
    parseLocation: "PCAppRemoteConfig.swift:550"
  },
  {
    key: "boarding_page_show",
    module: "Onboarding",
    defaultValue: "{\"boarding_first\":\"a\",\"boarding_second\":\"b\",\"boarding_third\":\"c\"}",
    feature: "控制新版引导页顺序，支持 a/b/c/d/e/0；0 会被过滤为不展示。",
    triggerLocation: "Module/Guide/PCGuideVC.swift:86",
    parseLocation: "PCAppRemoteConfig.swift:574"
  },
  {
    key: "boarding_first",
    module: "Onboarding",
    defaultValue: "true / 1",
    feature: "旧版引导页第 1 页展示开关；当前新版主要使用 `boarding_page_show`，该 key 仍保留兼容解析。",
    triggerLocation: "Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:556",
    parseLocation: "PCAppRemoteConfig.swift:556"
  },
  {
    key: "boarding_second",
    module: "Onboarding",
    defaultValue: "true / 1",
    feature: "旧版引导页第 2 页展示开关；当前新版主要使用 `boarding_page_show`，该 key 仍保留兼容解析。",
    triggerLocation: "Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:562",
    parseLocation: "PCAppRemoteConfig.swift:562"
  },
  {
    key: "boarding_third",
    module: "Onboarding",
    defaultValue: "true / 1",
    feature: "旧版引导页第 3 页展示开关；当前新版主要使用 `boarding_page_show`，该 key 仍保留兼容解析。",
    triggerLocation: "Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:568",
    parseLocation: "PCAppRemoteConfig.swift:568"
  },
  {
    key: "Iap_pop_open / IAP_Pop_Open / iap_pop_open",
    module: "强拉支付",
    defaultValue: "false",
    feature: "控制买量非会员是否在订阅页展示后强拉系统支付；支持直接下发 0/1 或 JSON 打包。",
    triggerLocation: "Common/Managers/VIP/PCIapPopOpenManager.swift:41, 56",
    parseLocation: "PCAppRemoteConfig.swift:604"
  },
  {
    key: "IAP_Pop_Open_Time / iap_pop_open_time",
    module: "强拉支付",
    defaultValue: "-1",
    feature: "控制强拉系统支付的延迟时机；-1/0 立即触发，正数按秒延迟。",
    triggerLocation: "Common/Managers/VIP/PCIapPopOpenManager.swift:132",
    parseLocation: "PCAppRemoteConfig.swift:612, 630"
  },
  {
    key: "Force_Offer_ID",
    module: "强拉支付",
    defaultValue: "com.petchat.week02",
    feature: "控制强拉支付商品 ID；非默认商品必须存在于当前订阅分组的 first/second offer 中才允许触发。",
    triggerLocation: "Common/Managers/VIP/PCIapPopOpenManager.swift:119",
    parseLocation: "PCAppRemoteConfig.swift:616, 634"
  }
];

export const petChatAnalyticsEvents: PetChatAnalyticsEvent[] = [
  { id: "Adjust_Init", module: "归因", trigger: "Adjust SDK 初始化完成后上报", location: "Common/Managers/AdjustManager/AdjustManager.swift:448", params: "-", target: "Thinking/Firebase" },
  { id: "Adjust_Check_Start", module: "归因", trigger: "启动归因查询窗口时上报", location: "AdjustManager.swift:485", params: "-", target: "Thinking/Firebase" },
  { id: "Adjust_Get_Success", module: "归因", trigger: "SDK attribution 回调首次拿到 network 时上报", location: "AdjustManager.swift:1108", params: "pass_time, ad_network, campaign", target: "Thinking/Firebase" },
  { id: "Adjust_Get_Promote", module: "归因", trigger: "SDK 首次判定买量用户时上报", location: "AdjustManager.swift:1066", params: "network_name, campaign, adgroup, creative, pass_time", target: "Thinking/Firebase" },
  { id: "Adjust_Get_Promote_Server", module: "归因", trigger: "服务端归因首次判定买量用户时上报", location: "AdjustManager.swift:1078", params: "network_name, campaign, adgroup, creative", target: "Thinking/Firebase" },
  { id: "Adjust_Get_Promote_Final", module: "归因", trigger: "最终统一归因判定买量用户时上报", location: "AdjustManager.swift:1092", params: "network_name, campaign, adgroup, creative, Form", target: "Thinking/Firebase" },
  { id: "Adjust_Get_Type_*", module: "归因", trigger: "SDK attribution 解析出来源类型时按来源动态生成事件名", location: "AdjustManager.swift:1124", params: "pass_time", target: "Thinking/Firebase" },
  { id: "Promote_User", module: "Adjust", trigger: "买量用户冻结或升级为买量时上报 Adjust token", location: "AdjustManager.swift:1003, 1032", params: "-", target: "Adjust" },
  { id: "Next_Day_Login", module: "Adjust", trigger: "用户首次打开后 24-48 小时内再次打开 App，仅一次", location: "AdjustManager.swift:171", params: "-", target: "Adjust" },
  { id: "User_Page_Show", module: "启动合规", trigger: "展示用户协议弹窗", location: "Module/Launch/PCAgreementVC.swift:30", params: "-", target: "Thinking/Firebase" },
  { id: "User_Page_Success", module: "启动合规", trigger: "用户协议弹窗点击同意", location: "PCAgreementVC.swift:171", params: "-", target: "Thinking/Firebase" },
  { id: "User_Page_Reject", module: "启动合规", trigger: "用户协议弹窗点击拒绝", location: "PCAgreementVC.swift:178", params: "-", target: "Thinking/Firebase" },
  { id: "ATT_Show", module: "启动合规", trigger: "ATT 权限申请弹框调起成功", location: "Common/Tool/PCFileTool.swift:209", params: "-", target: "Thinking/Firebase" },
  { id: "ATT_Success", module: "启动合规", trigger: "用户允许 ATT 权限", location: "PCFileTool.swift:214-215", params: "-", target: "Thinking/Firebase + Adjust" },
  { id: "ATT_Reject", module: "启动合规", trigger: "用户拒绝 ATT 权限", location: "PCFileTool.swift:217", params: "-", target: "Thinking/Firebase" },
  { id: "Loading_Show", module: "启动", trigger: "启动 Loading 页面展示", location: "Module/Launch/PCLaunchVC.swift:347", params: "-", target: "Thinking/Firebase" },
  { id: "Main_Page_Show", module: "启动", trigger: "冷启动后主页展示", location: "Base/PCRouter.swift:28", params: "Country", target: "Thinking/Firebase" },
  { id: "Page_Show", module: "主 Tab", trigger: "首次展示默认 Tab 或切换底部 Tab 后上报", location: "Module/MainTab/PCTabBarController.swift:237", params: "page_name1, Time", target: "Thinking/Firebase" },
  { id: "Click_Bottom_Button", module: "主 Tab", trigger: "点击底部 Tab 按钮", location: "PCTabBarController.swift:186", params: "Type", target: "Thinking/Firebase" },
  { id: "Onboard_Show", module: "Onboarding", trigger: "引导页当前页展示", location: "Module/Guide/PCGuideVC.swift:241", params: "video_number, video_time", target: "Thinking/Firebase" },
  { id: "Onboard_Click", module: "Onboarding", trigger: "引导页点击 Continue", location: "PCGuideVC.swift:251", params: "video_number, video_time", target: "Thinking/Firebase" },
  { id: "onboarding_next_click", module: "Onboarding", trigger: "宠物选择页点击下一步", location: "Module/Guide/PCSelectPetVC.swift:275", params: "pet_type", target: "Thinking/Firebase" },
  { id: "Sub_Show", module: "订阅", trigger: "订阅页套餐按钮展示", location: "Module/VIP/VC/PCVIPBaseVC.swift:1053", params: "IAP, ID, resource_id, sounds_name, device_type, Currency, Price, X_Times", target: "Thinking/Firebase + Adjust" },
  { id: "Sub_Click", module: "订阅", trigger: "订阅页套餐按钮点击", location: "PCVIPBaseVC.swift:856, 695", params: "IAP, ID, resource_id, sounds_name, device_type, Currency, Price, X_Times", target: "Thinking/Firebase + Adjust" },
  { id: "Sub_Success", module: "订阅", trigger: "订阅购买成功并完成回调", location: "PCVIPBaseVC.swift:917, PCVIPA/B/Custom", params: "IAP, ID, resource_id, order_id, device_type, Currency, Price, X_Times", target: "Thinking/Firebase + Adjust" },
  { id: "Sub_Close", module: "订阅", trigger: "订阅页关闭", location: "PCVIPBaseVC.swift:888", params: "IAP, ID, resource_id, order_id, device_type, Currency, Price, X_Times", target: "Thinking/Firebase" },
  { id: "Sub_success_week", module: "Adjust", trigger: "周订阅成功时上报 Adjust token", location: "PCVIPBaseVC.swift:925", params: "-", target: "Adjust" },
  { id: "Sub_success_year", module: "Adjust", trigger: "年订阅成功时上报 Adjust token", location: "PCVIPBaseVC.swift:929", params: "-", target: "Adjust" },
  { id: "Sub_Agree_Show", module: "订阅协议", trigger: "订阅页展示协议同意弹窗", location: "PCVIPCustomViewController.swift:312", params: "-", target: "Thinking/Firebase" },
  { id: "Sub_Agree_Success", module: "订阅协议", trigger: "协议弹窗点击同意", location: "PCAgreementPopupViewController.swift:192, PCVIPCustomViewController.swift:318", params: "-", target: "Thinking/Firebase" },
  { id: "Sub_Agree_Close", module: "订阅协议", trigger: "协议弹窗关闭", location: "PCAgreementPopupViewController.swift:201, PCVIPCustomViewController.swift:391", params: "-", target: "Thinking/Firebase" },
  { id: "Restore_Click", module: "订阅", trigger: "点击恢复购买", location: "PCVIPBaseVC.swift:358", params: "-", target: "Thinking/Firebase" },
  { id: "Restore_Success", module: "订阅", trigger: "恢复购买成功", location: "PCVIPA/B/CustomViewController.swift", params: "-", target: "Thinking/Firebase" },
  { id: "Restore_Fail", module: "订阅", trigger: "恢复购买失败", location: "PCVIPA/B/CustomViewController.swift", params: "-", target: "Thinking/Firebase" },
  { id: "Talk_Guide_Show", module: "Pet Talk", trigger: "首次录音引导展示", location: "Module/PetTalk/PCPetTalkNewVC.swift:346", params: "-", target: "Thinking/Firebase" },
  { id: "Talk_Guide_Finish", module: "Pet Talk", trigger: "首次录音引导完成", location: "PCPetTalkNewVC.swift:397", params: "-", target: "Thinking/Firebase" },
  { id: "Tap_to_Record", module: "Pet Talk", trigger: "点击录音入口", location: "PCPetTalkNewVC.swift:904", params: "Type", target: "Thinking/Firebase" },
  { id: "Stop_Recording", module: "Pet Talk", trigger: "手动停止录音或 overlay 停止回调", location: "PetTalk/View/PCPetTalkRecordingOverlayView.swift:322, 326", params: "Type", target: "Thinking/Firebase" },
  { id: "Analyzing_Sound_Success", module: "Pet Talk", trigger: "音频分析/翻译成功", location: "Module/PetTalk/PCVoiceRecordVC.swift:136", params: "Type, Time", target: "Thinking/Firebase" },
  { id: "Analyzing_Sound_Fail", module: "Pet Talk", trigger: "音频分析/翻译失败", location: "PCVoiceRecordVC.swift:272", params: "Reason", target: "Thinking/Firebase" },
  { id: "Translation_Result_Page_Show", module: "Pet Talk", trigger: "翻译结果页展示", location: "PCVoiceRecordVC.swift:244", params: "Type", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Detail_Page_Show", module: "Pet Magic", trigger: "Banner 或模板列表进入详情页", location: "PCPetMagicNewListVC.swift:822, PCPetMagicVC.swift:430", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Click_Create", module: "Pet Magic", trigger: "详情页点击开始制作", location: "Module/PetMagic/PCPetMagicDetailVC.swift:552", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Select_Saved_Photo", module: "Pet Magic", trigger: "选择已存照片", location: "PCPetMagicDetailVC.swift:387", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Enter_Album_Page", module: "Pet Magic", trigger: "进入相册页", location: "PCPetMagicDetailVC.swift:491", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Create_Click", module: "Pet Magic", trigger: "相册页点击立即制作", location: "PCPetMagicDetailVC.swift:499", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Start_Load", module: "Pet Magic", trigger: "创建任务开始制作", location: "PCPetMagicDetailVC.swift:500", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Load_Success", module: "Pet Magic", trigger: "制作任务成功", location: "Common/Managers/ProgressManager/PCProgressManager.swift:358", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL, Time", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Load_Fail", module: "Pet Magic", trigger: "制作任务失败或图片处理失败", location: "PCProgressManager.swift:336, PCPetMagicDetailVC.swift:605, PCPhotoPickerImageView.swift:307", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL, Time, Reason", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Load_Again", module: "Pet Magic", trigger: "制作失败后点击重试", location: "PCPetMagicDetailVC.swift:628, PCPhotoPickerImageView.swift:410", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "Pet_Magic_Finish_Page_Show", module: "Pet Magic", trigger: "制作完成页展示", location: "PCProgressManager.swift:357", params: "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL", target: "Thinking/Firebase" },
  { id: "pet_thought_entrance_click", module: "Pet Thoughts", trigger: "点击 Pet Thoughts 入口/空态入口", location: "Module/PetThoughts/PCPetThoughtsVC.swift:297", params: "-", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Upload_Photo_Click", module: "Pet Thoughts", trigger: "点击上传图片按钮", location: "PCPetThoughtsVC.swift:465", params: "-", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Enter_Album_Page", module: "Pet Thoughts", trigger: "进入相册页", location: "PCPetThoughtsVC.swift:476", params: "-", target: "Thinking/Firebase" },
  { id: "Album_Page_Next_Click", module: "Pet Thoughts", trigger: "相册页点击下一步", location: "PCPetThoughtsVC.swift:487", params: "-", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Start_Load", module: "Pet Thoughts", trigger: "开始分析图片/视频", location: "PCPetThoughtsVC.swift:521", params: "-", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Load_Success", module: "Pet Thoughts", trigger: "分析成功并输出结果", location: "PCPetThoughtsVC.swift:897", params: "Time", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Load_Fail", module: "Pet Thoughts", trigger: "分析失败", location: "PCPetThoughtsVC.swift:560, 619, 911", params: "Reason", target: "Thinking/Firebase" },
  { id: "Pet_Thoughts_Load_Again", module: "Pet Thoughts", trigger: "点击重试", location: "PCPetThoughtsVC.swift:1581", params: "-", target: "Thinking/Firebase" },
  { id: "Thought_Detail_Click", module: "Pet Thoughts", trigger: "点击想法详情/依据展开入口", location: "PCPetThoughtsVC.swift:1110", params: "-", target: "Thinking/Firebase" },
  { id: "Pet_Sounds_Click", module: "Pet Sounds", trigger: "点击语音包条目", location: "Module/PetSounds/PCPetSoundsVC.swift:528", params: "Name, Type", target: "Thinking/Firebase" },
  { id: "pet_audio_click", module: "Pet Sounds", trigger: "点击具体音频播放", location: "PCPetSoundsVC.swift:567", params: "audio_type, voice_personality, audio_name", target: "Thinking/Firebase" },
  { id: "Add_Pets_Click", module: "Pet Hub", trigger: "点击添加宠物按钮", location: "Module/PetHub/View/HubAddPetSection.swift:382", params: "-", target: "Thinking/Firebase" },
  { id: "Add_Pets_Success", module: "Pet Hub", trigger: "添加宠物成功", location: "Module/PetHub/PCPetHubAddPetVC.swift:224", params: "Pet_Num", target: "Thinking/Firebase" },
  { id: "Rating_Guide_Show", module: "评分", trigger: "评分引导展示", location: "Common/Managers/PCRatingManager/PCRatingManager.swift:297", params: "Source, Prompt_Type", target: "Thinking/Firebase" },
  { id: "Rating_Prompt_Show", module: "评分", trigger: "系统或自定义评分弹窗展示", location: "PCRatingManager.swift:301", params: "type", target: "Thinking/Firebase" },
  { id: "Rating_Guide_Close", module: "评分", trigger: "评分引导关闭", location: "PCRatingManager.swift:307", params: "Source", target: "Thinking/Firebase" },
  { id: "Rating_Guide_Submit", module: "评分", trigger: "自定义评分提交", location: "PCRatingManager.swift:322", params: "Source, Rating, Request_System_Review, Feedback", target: "Thinking/Firebase" },
  { id: "Feedback_Show", module: "反馈", trigger: "意见反馈弹窗展示", location: "Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:124", params: "Source", target: "Thinking/Firebase" },
  { id: "Feedback_Close", module: "反馈", trigger: "意见反馈弹窗关闭", location: "PCFeedbackManager.swift:130", params: "Source", target: "Thinking/Firebase" },
  { id: "Feedback_Submit", module: "反馈", trigger: "意见反馈提交", location: "PCFeedbackManager.swift:137", params: "Source, Feedback, Length", target: "Thinking/Firebase" },
  { id: "custom_Prompt_Finish", module: "评分/反馈", trigger: "自定义评分或反馈流程完成", location: "PCRatingManager.swift:323, PCFeedbackManager.swift:142", params: "type, star_count, content", target: "Thinking/Firebase" }
];
