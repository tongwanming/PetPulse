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
  {
    "label": "功能分支",
    "value": "11"
  },
  {
    "label": "SDK/能力集成",
    "value": "37"
  },
  {
    "label": "埋点事件",
    "value": "128"
  },
  {
    "label": "下发参数",
    "value": "33"
  }
];

export const petChatFeatureMindMap: MindMapNode = {
  "id": "features",
  "title": "PetChat 功能总览",
  "summary": "由同步脚本扫描 PetChat/Module 下的业务目录、源码文件和主要类名生成。",
  "source": "PetChat/Module",
  "children": [
    {
      "id": "guide",
      "title": "Onboarding 引导",
      "summary": "Onboarding、宠物类型选择和新用户引导链路。",
      "source": "PetChat/Module/Guide/PCGuideVC.swift",
      "children": [
        {
          "id": "guide-pcguidevc",
          "title": "PCGuideVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        },
        {
          "id": "guide-page",
          "title": "Page",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        },
        {
          "id": "guide-config",
          "title": "Config",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        },
        {
          "id": "guide-movesource",
          "title": "MoveSource",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        },
        {
          "id": "guide-pcguidepagecell",
          "title": "PCGuidePageCell",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        },
        {
          "id": "guide-videolayout",
          "title": "VideoLayout",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Guide/PCGuideVC.swift"
        }
      ]
    },
    {
      "id": "launch",
      "title": "启动、合规与新手引导",
      "summary": "启动、网络权限、协议、归因、登录和远端配置放行流程。",
      "source": "PetChat/Module/Launch/PCAgreementVC.swift",
      "children": [
        {
          "id": "launch-pcagreementvc",
          "title": "PCAgreementVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCAgreementVC.swift"
        },
        {
          "id": "launch-pclaunchvc",
          "title": "PCLaunchVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCLaunchVC.swift"
        },
        {
          "id": "launch-pcuserinfo",
          "title": "PCUserInfo",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCLaunchVC.swift"
        },
        {
          "id": "launch-userres",
          "title": "UserRes",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCLaunchVC.swift"
        },
        {
          "id": "launch-userrespdatagender",
          "title": "UserRespDataGender",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCUserInfo.swift"
        },
        {
          "id": "launch-userrespdata",
          "title": "UserRespData",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/Launch/PCLaunchVC.swift"
        }
      ]
    },
    {
      "id": "maintab",
      "title": "主导航五 Tab",
      "summary": "底部 Tab、入口分发和主页面展示。",
      "source": "PetChat/Module/MainTab/PCTabBarController.swift",
      "children": [
        {
          "id": "maintab-pctabbarcontroller",
          "title": "PCTabBarController",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/MainTab/PCTabBarController.swift"
        }
      ]
    },
    {
      "id": "petcare",
      "title": "PetCare",
      "summary": "扫描到 14 个源码文件，包含 8 个主要类型。",
      "source": "PetChat/Module/PetCare/VC/PCPetCareArticleDetailVC.swift",
      "children": [
        {
          "id": "petcare-manager",
          "title": "Manager",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetCare/Manager"
        },
        {
          "id": "petcare-service",
          "title": "Service",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetCare/Service"
        },
        {
          "id": "petcare-pcpetcarecontentmanager",
          "title": "PCPetCareContentManager",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetCare/Manager/PCPetCareContentManager.swift"
        },
        {
          "id": "petcare-keys",
          "title": "Keys",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetCare/Manager/PCPetCareContentManager.swift"
        },
        {
          "id": "petcare-pcpetcarepettype",
          "title": "PCPetCarePetType",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetCare/Manager/PCPetCareContentManager.swift"
        },
        {
          "id": "petcare-pcpetcarecategory",
          "title": "PCPetCareCategory",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetCare/Manager/PCPetCareContentManager.swift"
        }
      ]
    },
    {
      "id": "pethub",
      "title": "Pet Hub 宠物中心",
      "summary": "宠物档案、历史、我的创作、协议与反馈入口。",
      "source": "PetChat/Module/PetHub/PCPetHubAddPetVC.swift",
      "children": [
        {
          "id": "pethub-minefiledeletemodel",
          "title": "MineFileDeleteModel",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/Model/PCPetHubModel.swift"
        },
        {
          "id": "pethub-minefilemodel",
          "title": "MineFileModel",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/Model/PCPetHubModel.swift"
        },
        {
          "id": "pethub-pcpetmodel",
          "title": "PCPetModel",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/Model/PCPetHubModel.swift"
        },
        {
          "id": "pethub-pcpethubaddpetvc",
          "title": "PCPetHubAddPetVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/PCPetHubAddPetVC.swift"
        },
        {
          "id": "pethub-pcpethubinfovc",
          "title": "PCPetHubInfoVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/PCPetHubInfoVC.swift"
        },
        {
          "id": "pethub-infostackitemview",
          "title": "InfoStackItemView",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetHub/PCPetHubInfoVC.swift"
        }
      ]
    },
    {
      "id": "petmagic",
      "title": "Pet Magic 详情创作",
      "summary": "AI 模板详情、照片选择、制作任务和结果页。",
      "source": "PetChat/Module/PetMagic/PCPetMagicDetailVC.swift",
      "children": [
        {
          "id": "petmagic-manager",
          "title": "Manager",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetMagic/Manager"
        },
        {
          "id": "petmagic-pcpetmagicdownloadcompletionpresenter",
          "title": "PCPetMagicDownloadCompletionPresenter",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagic/Manager/PCPetMagicDownloadCompletionPresenter.swift"
        },
        {
          "id": "petmagic-pcpetmagicdownloadmanager",
          "title": "PCPetMagicDownloadManager",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagic/Manager/PCPetMagicDownloadCompletionPresenter.swift"
        },
        {
          "id": "petmagic-mediatype",
          "title": "MediaType",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagic/Manager/PCPetMagicDownloadManager.swift"
        },
        {
          "id": "petmagic-state",
          "title": "State",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagic/Manager/PCPetMagicDownloadCompletionPresenter.swift"
        },
        {
          "id": "petmagic-snapshot",
          "title": "Snapshot",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagic/Manager/PCPetMagicDownloadCompletionPresenter.swift"
        }
      ]
    },
    {
      "id": "petmagicnew",
      "title": "Pet Magic 模板首页",
      "summary": "AI 模板首页、Banner、分类分页和模板列表。",
      "source": "PetChat/Module/PetMagicNew/vc/PCPetMagicNewListVC.swift",
      "children": [
        {
          "id": "petmagicnew-vc",
          "title": "vc",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetMagicNew/vc"
        },
        {
          "id": "petmagicnew-view",
          "title": "view",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetMagicNew/view"
        },
        {
          "id": "petmagicnew-vm",
          "title": "vm",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetMagicNew/vm"
        },
        {
          "id": "petmagicnew-pcpetmagicnewlistvc",
          "title": "PCPetMagicNewListVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagicNew/vc/PCPetMagicNewListVC.swift"
        },
        {
          "id": "petmagicnew-operationcategory",
          "title": "OperationCategory",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagicNew/vc/PCPetMagicNewListVC.swift"
        },
        {
          "id": "petmagicnew-listkind",
          "title": "ListKind",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetMagicNew/vc/PCPetMagicNewListVC.swift"
        }
      ]
    },
    {
      "id": "petsounds",
      "title": "Pet Sounds 声音库",
      "summary": "训练口令、召唤声、情绪声音播放和免费次数控制。",
      "source": "PetChat/Module/PetSounds/PCPetSoundsVC.swift",
      "children": [
        {
          "id": "petsounds-manager",
          "title": "Manager",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetSounds/Manager"
        },
        {
          "id": "petsounds-pcpetsoundsfreeplaymanager",
          "title": "PCPetSoundsFreePlayManager",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetSounds/Manager/PCPetSoundsFreePlayManager.swift"
        },
        {
          "id": "petsounds-pcpetsoundsvc",
          "title": "PCPetSoundsVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetSounds/PCPetSoundsVC.swift"
        },
        {
          "id": "petsounds-soundtab",
          "title": "SoundTab",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetSounds/PCPetSoundsVC.swift"
        },
        {
          "id": "petsounds-trainingvoicestyle",
          "title": "TrainingVoiceStyle",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetSounds/PCPetSoundsVC.swift"
        },
        {
          "id": "petsounds-trainingcommand",
          "title": "TrainingCommand",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetSounds/PCPetSoundsVC.swift"
        }
      ]
    },
    {
      "id": "pettalk",
      "title": "Pet Talk 跨物种翻译",
      "summary": "跨物种录音、音频翻译、结果页和录音引导。",
      "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingPetResultVC.swift",
      "children": [
        {
          "id": "pettalk-service",
          "title": "Service",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetTalk/Service"
        },
        {
          "id": "pettalk-pcpettalkmodel",
          "title": "PCPetTalkModel",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetTalk/Model/PCPetTalkModel.swift"
        },
        {
          "id": "pettalk-pcpettalkanalyzingpetresultvc",
          "title": "PCPetTalkAnalyzingPetResultVC",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingPetResultVC.swift"
        },
        {
          "id": "pettalk-layout",
          "title": "Layout",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingPetResultVC.swift"
        },
        {
          "id": "pettalk-moodscoreitem",
          "title": "MoodScoreItem",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingPetResultVC.swift"
        },
        {
          "id": "pettalk-viewmodel",
          "title": "ViewModel",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingPetResultVC.swift"
        }
      ]
    },
    {
      "id": "petthoughts",
      "title": "Pet Thoughts 宠物想法",
      "summary": "图片/视频上传、宠物想法分析、聊天化结果和历史。",
      "source": "PetChat/Module/PetThoughts/PCPetThoughtsMoodHistoryVC.swift",
      "children": [
        {
          "id": "petthoughts-manager",
          "title": "Manager",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetThoughts/Manager"
        },
        {
          "id": "petthoughts-service",
          "title": "Service",
          "summary": "扫描到 0 个源码文件。",
          "source": "PetChat/Module/PetThoughts/Service"
        },
        {
          "id": "petthoughts-pcpetthoughtsconversationstore",
          "title": "PCPetThoughtsConversationStore",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetThoughts/Manager/PCPetThoughtsConversationStore.swift"
        },
        {
          "id": "petthoughts-pcpetthoughtspersistedconversation",
          "title": "PCPetThoughtsPersistedConversation",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetThoughts/Manager/PCPetThoughtsConversationStore.swift"
        },
        {
          "id": "petthoughts-pcpetthoughtspersistedmessage",
          "title": "PCPetThoughtsPersistedMessage",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetThoughts/Manager/PCPetThoughtsConversationStore.swift"
        },
        {
          "id": "petthoughts-sender",
          "title": "Sender",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/PetThoughts/Manager/PCPetThoughtsConversationStore.swift"
        }
      ]
    },
    {
      "id": "vip",
      "title": "订阅、会员与支付",
      "summary": "订阅页、购买恢复、会员权益和 paywall 分流。",
      "source": "PetChat/Module/VIP/VC/PCAgreementPopupViewController.swift",
      "children": [
        {
          "id": "vip-pcvippaywallfactory",
          "title": "PCVIPPaywallFactory",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/PCVIPPaywallFactory.swift"
        },
        {
          "id": "vip-pcagreementpopupviewcontroller",
          "title": "PCAgreementPopupViewController",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/VC/PCAgreementPopupViewController.swift"
        },
        {
          "id": "vip-pcvipaviewcontroller",
          "title": "PCVIPAViewController",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/PCVIPPaywallFactory.swift"
        },
        {
          "id": "vip-benefititem",
          "title": "BenefitItem",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/VC/PCVIPAViewController.swift"
        },
        {
          "id": "vip-benefitchipcell",
          "title": "BenefitChipCell",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/VC/PCVIPAViewController.swift"
        },
        {
          "id": "vip-plancardview",
          "title": "PlanCardView",
          "summary": "源码扫描识别出的核心类型。",
          "source": "PetChat/Module/VIP/VC/PCVIPAViewController.swift"
        }
      ]
    }
  ]
};

export const petChatSdkMindMap: MindMapNode = {
  "id": "sdk",
  "title": "三方 SDK 与触发点",
  "summary": "由 Podfile 和源码 import/调用点扫描生成。",
  "source": "Podfile, PetChat/Common, PetChat/Module",
  "children": [
    {
      "id": "-",
      "title": "基础库",
      "summary": "扫描到 4 个 Pod：RxSwift、RxCocoa、SSZipArchive、FBSDKCoreKit。",
      "source": "Podfile",
      "children": [
        {
          "id": "rxswift",
          "title": "RxSwift ~> 6.6",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Base/PCBaseViewVC.swift"
        },
        {
          "id": "rxcocoa",
          "title": "RxCocoa ~> 6.6",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Base/PCBaseViewVC.swift"
        },
        {
          "id": "ssziparchive",
          "title": "SSZipArchive ~> 2.4.3",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:35"
        },
        {
          "id": "fbsdkcorekit",
          "title": "FBSDKCoreKit",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/AppDelegate.swift"
        }
      ]
    },
    {
      "id": "-",
      "title": "媒体与图片",
      "summary": "扫描到 7 个 Pod：Kingfisher、SDWebImage、SDWebImageWebPCoder、lottie-ios、FLAnimatedImage、JXPhotoBrowser、BDAlphaPlayer。",
      "source": "Podfile",
      "children": [
        {
          "id": "kingfisher",
          "title": "Kingfisher ~> 7.0",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Base/PCBaseViewVC.swift"
        },
        {
          "id": "sdwebimage",
          "title": "SDWebImage ~> 5.0",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Extends/PCUIImage+Ext.swift"
        },
        {
          "id": "sdwebimagewebpcoder",
          "title": "SDWebImageWebPCoder ~> 0.14.6",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/AppDelegate.swift"
        },
        {
          "id": "lottie-ios",
          "title": "lottie-ios",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:20"
        },
        {
          "id": "flanimatedimage",
          "title": "FLAnimatedImage",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Extends/PCUIImage+Ext.swift"
        },
        {
          "id": "jxphotobrowser",
          "title": "JXPhotoBrowser",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/PCPhotoPickManager/PCAlbumVCViewController.swift"
        },
        {
          "id": "bdalphaplayer",
          "title": "BDAlphaPlayer",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Module/PetTalk/PCPetTalkAnalyzingResultVC.swift"
        }
      ]
    },
    {
      "id": "ui-",
      "title": "UI 与交互",
      "summary": "扫描到 8 个 Pod：SnapKit、Toast-Swift、SPButton、MJRefresh、DZNEmptyDataSet、FSPagerView、JXSegmentedView、JXPagingView。",
      "source": "Podfile",
      "children": [
        {
          "id": "snapkit",
          "title": "SnapKit ~> 5.7.1",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Base/PCBaseViewVC.swift"
        },
        {
          "id": "toast-swift",
          "title": "Toast-Swift",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:17"
        },
        {
          "id": "spbutton",
          "title": "SPButton",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Module/PetHub/View/PCPetHubView.swift"
        },
        {
          "id": "mjrefresh",
          "title": "MJRefresh",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Base/PCBaseViewVC.swift"
        },
        {
          "id": "dznemptydataset",
          "title": "DZNEmptyDataSet",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/PCPhotoPickManager/PCAlbumVCViewController.swift"
        },
        {
          "id": "fspagerview",
          "title": "FSPagerView",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Module/PetMagicNew/view/PCPetMagicNewBannerHeaderView.swift"
        },
        {
          "id": "jxsegmentedview",
          "title": "JXSegmentedView",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Module/PetMagicNew/PCPetMagicNewJXBridge.swift"
        },
        {
          "id": "jxpagingview",
          "title": "JXPagingView",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Module/PetMagicNew/PCPetMagicNewJXBridge.swift"
        }
      ]
    },
    {
      "id": "-",
      "title": "网络与数据",
      "summary": "扫描到 3 个 Pod：HandyJSON、Alamofire、Protobuf。",
      "source": "Podfile",
      "children": [
        {
          "id": "handyjson",
          "title": "HandyJSON ~> 5.0.2",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/DBManager/PCDBManager.swift"
        },
        {
          "id": "alamofire",
          "title": "Alamofire ~> 5.9",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/NetManager/PCNetworkListener.swift"
        },
        {
          "id": "protobuf",
          "title": "Protobuf",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:49"
        }
      ]
    },
    {
      "id": "-",
      "title": "本地存储",
      "summary": "扫描到 2 个 Pod：FMDB、LKDBHelper。",
      "source": "Podfile",
      "children": [
        {
          "id": "fmdb",
          "title": "FMDB",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:31"
        },
        {
          "id": "lkdbhelper",
          "title": "LKDBHelper",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/DBManager/PCDBManager.swift"
        }
      ]
    },
    {
      "id": "-",
      "title": "埋点、远端配置与归因",
      "summary": "扫描到 13 个 Pod：CocoaLumberjack/Swift、ThinkingSDK、UMCommon、UMDevice、UMAPM、UMABTest、Adjust、Adjust/AdjustGoogleOdm、BDASignalSDK、TikTokBusinessSDK、Firebase/RemoteConfig、Firebase/Analytics、Firebase/Core。",
      "source": "Podfile",
      "children": [
        {
          "id": "cocoalumberjack-swift",
          "title": "CocoaLumberjack/Swift ~> 3.7.4",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:34"
        },
        {
          "id": "thinkingsdk",
          "title": "ThinkingSDK ~> 3.3.3",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift"
        },
        {
          "id": "umcommon",
          "title": "UMCommon",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/UMManager/PCUMManager.swift"
        },
        {
          "id": "umdevice",
          "title": "UMDevice",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:39"
        },
        {
          "id": "umapm",
          "title": "UMAPM",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/UMManager/PCUMAPMBridge.h"
        },
        {
          "id": "umabtest",
          "title": "UMABTest",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:41"
        },
        {
          "id": "adjust",
          "title": "Adjust 5.5.0",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:45"
        },
        {
          "id": "adjust-adjustgoogleodm",
          "title": "Adjust/AdjustGoogleOdm",
          "summary": "由 Podfile 声明集成。",
          "source": "Podfile:46"
        },
        {
          "id": "bdasignalsdk",
          "title": "BDASignalSDK 1.0.5",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/OceanEngineManager/PCOceanEngineManager.swift"
        },
        {
          "id": "tiktokbusinesssdk",
          "title": "TikTokBusinessSDK",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/TikTokBusinessManager/PCTikTokBusinessManager.swift"
        },
        {
          "id": "firebase-remoteconfig",
          "title": "Firebase/RemoteConfig",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/EventManager/EventManager.swift"
        },
        {
          "id": "firebase-analytics",
          "title": "Firebase/Analytics",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/EventManager/EventManager.swift"
        },
        {
          "id": "firebase-core",
          "title": "Firebase/Core",
          "summary": "在业务源码中检测到 import 或调用入口。",
          "source": "PetChat/Common/Managers/EventManager/EventManager.swift"
        }
      ]
    }
  ]
};

export const petChatRemoteParameters: PetChatRemoteParameter[] = [
  {
    "key": "Demo_Key",
    "module": "公共能力",
    "defaultValue": "false / defaultPetTalkTrialConfig.freeTrialCount",
    "feature": "Demo Key：用于验证“参数下发 + 解析层”链路是否打通。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:356"
  },
  {
    "key": "pet_magic_free_trial_count",
    "module": "公共能力",
    "defaultValue": "1",
    "feature": "Pet Magic：免费试用次数（默认 1）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:450, PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:472"
  },
  {
    "key": "pet_talk_free_trial_count",
    "module": "公共能力",
    "defaultValue": "false / defaultPetTalkTrialConfig.freeTrialCount",
    "feature": "Pet Talk：免费试用配置。  兼容两种下发方式： 1）旧版直接下发整数字符串； 2）1.0.9 起下发 JSON（内含 `free_trial_count` / `emotion_free_trial_count`）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:367"
  },
  {
    "key": "emotion_free_trial_count",
    "module": "公共能力",
    "defaultValue": "false / defaultPetTalkTrialConfig.freeTrialCount",
    "feature": "Pet Talk：情绪翻译免费次数（兼容独立 key 的兜底读取）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:378, PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:397"
  },
  {
    "key": "pet_talk_guide_config",
    "module": "公共能力",
    "defaultValue": "0",
    "feature": "Pet Talk：首页引导开关（默认 0）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:415"
  },
  {
    "key": "local_audio_detection_enabled",
    "module": "公共能力",
    "defaultValue": "false",
    "feature": "Pet Talk：客户端本地音频静音检测开关（默认 false）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:421"
  },
  {
    "key": "pet_magic_subscribe_mode",
    "module": "公共能力",
    "defaultValue": "0",
    "feature": "Pet Magic：订阅模式（默认 0，可直接下发 0/1，也可下发 1.0.9 打包 JSON）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:437, PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:443"
  },
  {
    "key": "high_quality",
    "module": "公共能力",
    "defaultValue": "defaultPetMagicConfig.subscribeMode / defaultPetMagicConfig.freeTrialCount",
    "feature": "Pet Magic：高清保存次数/开关（1.0.9 业务配置）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:457, PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:479"
  },
  {
    "key": "pet_sounds_free_trial_count",
    "module": "公共能力",
    "defaultValue": "5",
    "feature": "Pet Sounds：免费试用次数（默认 5）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:488"
  },
  {
    "key": "pet_sounds_subscribe_mode",
    "module": "公共能力",
    "defaultValue": "0",
    "feature": "Pet Sounds：订阅模式（默认 0）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:494"
  },
  {
    "key": "Pet_sounds_rating_guide",
    "module": "公共能力",
    "defaultValue": "4",
    "feature": "Pet Sounds：播放完成第几次后触发评分引导（默认 4）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:500"
  },
  {
    "key": "rating_prompt_type",
    "module": "公共能力",
    "defaultValue": "defaultPetMagicConfig.highQualityCount / 5",
    "feature": "评分引导样式：`system` 为系统评分弹窗，`custom` 为自定义评分弹窗。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:507"
  },
  {
    "key": "petthought_free_trial_count",
    "module": "公共能力",
    "defaultValue": "3",
    "feature": "Pet Thoughts：免费试用次数（默认 3）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:519"
  },
  {
    "key": "pet_thought_free_trial_count",
    "module": "公共能力",
    "defaultValue": "5 / 0",
    "feature": "Pet Thoughts：免费试用次数旧版 key 兼容。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:520"
  },
  {
    "key": "petthought_default_free_style",
    "module": "公共能力",
    "defaultValue": "免费风格（默认",
    "feature": "Pet Thoughts：非订阅用户默认免费风格（默认 real_insight）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:528"
  },
  {
    "key": "petthought_share_qr_url",
    "module": "公共能力",
    "defaultValue": "return \"system\" / 3",
    "feature": "Pet Thoughts：分享图二维码落地页 URL（支持 `{style_name}` 占位符）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:536"
  },
  {
    "key": "ai_vet_free_trial_count",
    "module": "公共能力",
    "defaultValue": "1",
    "feature": "AI Health Assistant：免费试用次数（默认 1）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:545"
  },
  {
    "key": "subscribe_page_type",
    "module": "公共能力",
    "defaultValue": "0",
    "feature": "订阅页类型（默认 0）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:551"
  },
  {
    "key": "Promote_Sub_Group",
    "module": "公共能力",
    "defaultValue": "1 / 0",
    "feature": "买量用户订阅分组配置（JSON 数组字符串）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:575"
  },
  {
    "key": "Organic_Sub_Group",
    "module": "公共能力",
    "defaultValue": "0",
    "feature": "自然用户订阅分组配置（JSON 数组字符串）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:583"
  },
  {
    "key": "Grouping",
    "module": "公共能力",
    "defaultValue": "1 / 0",
    "feature": "独立 Grouping 分组事件参数。  - Note: 运营配置 value（如 `A`）后，客户端需上报 `Grouping_A`。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:560"
  },
  {
    "key": "Grouping_X",
    "module": "公共能力",
    "defaultValue": "1 / 0",
    "feature": "Grouping 参数兼容命名。  - Note: 部分文档以 `Grouping_X` 描述该参数，这里兼容一次旧命名读取。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:566"
  },
  {
    "key": "boarding_enabled",
    "module": "公共能力",
    "defaultValue": "true",
    "feature": "引导页总开关：首次启动是否展示 `PCGuideVC`。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:654"
  },
  {
    "key": "boarding_first",
    "module": "公共能力",
    "defaultValue": "true",
    "feature": "旧版引导页第 1 页是否展示。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:660"
  },
  {
    "key": "boarding_second",
    "module": "公共能力",
    "defaultValue": "true",
    "feature": "旧版引导页第 2 页是否展示。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:666"
  },
  {
    "key": "boarding_third",
    "module": "公共能力",
    "defaultValue": "true",
    "feature": "旧版引导页第 3 页是否展示。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:672"
  },
  {
    "key": "boarding_page_show",
    "module": "启动",
    "defaultValue": "true",
    "feature": "1.0.9 新版引导页顺序配置（JSON 数组字符串）。",
    "triggerLocation": "PetChat/Module/Launch/PCLaunchVC.swift:460",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:678"
  },
  {
    "key": "Iap_pop_open",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "强拉支付配置主 key。  兼容两种下发方式： 1）直接下发 `0/1`； 2）下发 JSON（内含 `Iap_pop_open` / `IAP_Pop_Open_Time` / `Force_Offer_ID`）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:726"
  },
  {
    "key": "IAP_Pop_Open",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "远端配置 IAP_Pop_Open，由 PCRemoteConfigKeys.iapPopOpenUpper 声明。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:727"
  },
  {
    "key": "iap_pop_open",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "远端配置 iap_pop_open，由 PCRemoteConfigKeys.iapPopOpenLower 声明。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:728"
  },
  {
    "key": "IAP_Pop_Open_Time",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "强拉支付时机（兼容独立 key 兜底）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:731"
  },
  {
    "key": "iap_pop_open_time",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "远端配置 iap_pop_open_time，由 PCRemoteConfigKeys.iapPopOpenTimeLower 声明。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:732"
  },
  {
    "key": "Force_Offer_ID",
    "module": "公共能力",
    "defaultValue": "defaultIapPopOpenConfig.isEnabled / defaultIapPopOpenConfig.openTime",
    "feature": "强拉支付商品 ID（兼容独立 key 兜底）。",
    "triggerLocation": "未扫描到业务触发点",
    "parseLocation": "PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:745, PetChat/Common/Managers/RemoteConfig/PCAppRemoteConfig.swift:760"
  }
];

export const petChatAnalyticsEvents: PetChatAnalyticsEvent[] = [
  {
    "id": "Restore_Click",
    "module": "订阅",
    "trigger": "placement: placement) } /// 恢复购买。 func restoreVIP(placement: String? = nil) { markPaywallUserInteractionForAnalytics() guard begi…",
    "location": "PetChat/Module/VIP/VC/PCVIPBaseVC.swift:555",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Restore_Fail",
    "module": "订阅",
    "trigger": "eport.report(withEvent: Event(type: .other, key: PCAdjustEventID.restoreSuccess.rawValue)) PCToastTool.show(PCLocal(str: \"vip.res…",
    "location": "PetChat/Module/VIP/VC/PCVIPAViewController.swift:375, PetChat/Module/VIP/VC/PCVIPBViewController.swift:370, PetChat/Module/VIP/VC/PCVIPCViewController.swift:382, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:517",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Restore_Success",
    "module": "订阅",
    "trigger": "geWithFailureToastIfNeeded() { return } PCToastTool.showError(message) } } override func vipDidCompleteRestore(success: Bool, mes…",
    "location": "PetChat/Module/VIP/VC/PCVIPAViewController.swift:370, PetChat/Module/VIP/VC/PCVIPBViewController.swift:365, PetChat/Module/VIP/VC/PCVIPCViewController.swift:377, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:512",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Agree_Close",
    "module": "订阅",
    "trigger": "ewControlellerDidFinidsh(self, agree: true) } } @objc private func close() { dismissAnimation { [weak self] in guard let `self` =…",
    "location": "PetChat/Module/VIP/VC/PCAgreementPopupViewController.swift:201, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:399",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Agree_Show",
    "module": "订阅",
    "trigger": "et productID = selectedProductID { reportSubClickForContinueButton(productID: productID) } if let agree = agreementView { if agre…",
    "location": "PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:317, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:374",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Agree_Success",
    "module": "订阅",
    "trigger": "URL(string: ConstantURL.loadMemberURL())!) } } @objc private func buttonClick() { dismissAnimation { [weak self] in guard let `se…",
    "location": "PetChat/Module/VIP/VC/PCAgreementPopupViewController.swift:192, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:323, PetChat/Module/VIP/VC/PCVIPCustomViewController.swift:380",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Click",
    "module": "订阅",
    "trigger": "pContinue() { markPaywallUserInteractionForAnalytics() guard let productID = selectedProductID else { return } guard beginPurchas…",
    "location": "PetChat/Module/VIP/VC/PCVIPAViewController.swift:288, PetChat/Module/VIP/VC/PCVIPBViewController.swift:283, PetChat/Module/VIP/VC/PCVIPBaseVC.swift:1100, PetChat/Module/VIP/VC/PCVIPCViewController.swift:317",
    "params": "-",
    "target": "Thinking/Firebase + Adjust"
  },
  {
    "id": "Sub_Close",
    "module": "订阅",
    "trigger": "uccessfulOrderIDForSubClose ?? \"\", PCAdjustEventParamKey.xTimes.rawValue: UserDefaults.standard.subShowTimes ] param.merge(paywal…",
    "location": "PetChat/Module/VIP/VC/PCVIPBaseVC.swift:1133",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Show",
    "module": "订阅",
    "trigger": "ency.rawValue: currency, PCAdjustEventParamKey.price.rawValue: price, PCAdjustEventParamKey.xTimes.rawValue: times ] param.merge(…",
    "location": "PetChat/Module/VIP/VC/PCVIPBaseVC.swift:1373, PetChat/Module/VIP/VC/PCVIPBaseVC.swift:462",
    "params": "-",
    "target": "Thinking/Firebase + Adjust"
  },
  {
    "id": "Sub_Success",
    "module": "订阅",
    "trigger": "orderId.rawValue: String(orderId), PCAdjustEventParamKey.xTimes.rawValue: UserDefaults.standard.subShowTimes ] param.merge(paywal…",
    "location": "PetChat/Module/VIP/VC/PCVIPBaseVC.swift:1170",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Article_Click",
    "module": "公共能力",
    "trigger": "/// 上报文章点击。 static func reportArticleClick(article: PCPetCareArticle, source: String) { var param = articleParams(article) param[…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:285",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Article_Collect",
    "module": "公共能力",
    "trigger": "PCReport.report(withEvent: Event(type: .other, key: PCAdjustEventID.articleShow.rawValue, param: param)) } /// 上报文章收藏操作。 static f…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:297",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Article_Show",
    "module": "公共能力",
    "trigger": "/// 上报文章展示。 static func reportArticleShow(article: PCPetCareArticle, source: String) { var param = articleParams(article) param[P…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:292",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "ATT_Reject",
    "module": "公共能力",
    "trigger": "e: .adjust, token: \"bn92oo\", key: \"ATT_Success\")) PCReport.report(withEvent: Event(type: .other, key: \"ATT_Success\")) } else { PC…",
    "location": "PetChat/Common/Tool/PCFileTool.swift:223",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "ATT_Show",
    "module": "公共能力",
    "trigger": "return } hasRequestedTrackingPermission = true let status = ATTrackingManager.trackingAuthorizationStatus switch status { case .n…",
    "location": "PetChat/Common/Tool/PCFileTool.swift:214",
    "params": "-",
    "target": "Adjust"
  },
  {
    "id": "ATT_Success",
    "module": "公共能力",
    "trigger": "tatus NotificationCenter.default.post(name: .pcTrackingAuthorizationDidChange, object: nil) if status == .authorized { PCReport.r…",
    "location": "PetChat/Common/Tool/PCFileTool.swift:220, PetChat/Common/Tool/PCFileTool.swift:221",
    "params": "-",
    "target": "Adjust"
  },
  {
    "id": "Care_Topic_Tab_Click",
    "module": "公共能力",
    "trigger": "e.rawValue: isEnabled ? ActionType.on : ActionType.off ])) } /// 上报 Pet Care 专题分类点击。 static func reportCareTopicTabClick(petType:…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:275",
    "params": "petType, category",
    "target": "Thinking/Firebase"
  },
  {
    "id": "custom_Prompt_Finish",
    "module": "公共能力",
    "trigger": "type: .other, key: AnalyticsEvent.submit, param: [ \"Source\": result.source.rawValue, \"Feedback\": String(feedback.prefix(256)), \"L…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:142, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:323",
    "params": "Source, Feedback, Length",
    "target": "Thinking/Firebase"
  },
  {
    "id": "custom_Prompt_Finish",
    "module": "公共能力",
    "trigger": "type: .other, key: AnalyticsEvent.submit, param: [ \"Source\": result.source.rawValue, \"Feedback\": String(feedback.prefix(256)), \"L…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:142, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:323",
    "params": "Source, Feedback, Length",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Daily_Tip_Action",
    "module": "公共能力",
    "trigger": "Id.rawValue: tip.tipId, PCAdjustEventParamKey.source.rawValue: source ])) } /// 上报每日小贴士弹窗操作。 static func reportDailyTipAction(tip…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:260",
    "params": "actionType, tipId",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Daily_Tip_Reminder_Set",
    "module": "公共能力",
    "trigger": "Key.actionType.rawValue: actionType, PCAdjustEventParamKey.tipId.rawValue: tip.tipId ])) } /// 上报每日小贴士提醒开关操作。 static func reportD…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:268",
    "params": "actionType",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Daily_Tip_Show",
    "module": "公共能力",
    "trigger": "ect\" static let close = \"close\" static let on = \"on\" static let off = \"off\" } /// 上报每日小贴士弹窗展示。 static func reportDailyTipShow(tip…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:251",
    "params": "petType, tipId, source",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Feedback_Close",
    "module": "公共能力",
    "trigger": "PCReport.report(withEvent: Event(type: .other, key: AnalyticsEvent.show, param: [ \"Source\": source.rawValue ])) } func reportFeed…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:130, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:307",
    "params": "Source",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Feedback_Show",
    "module": "公共能力",
    "trigger": "feedbackView = nil view.dismiss(animated: animated) { view.removeFromSuperview() completion?() } } func reportFeedbackShow(source…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:124, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:297",
    "params": "Source",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Feedback_Submit",
    "module": "公共能力",
    "trigger": "\"Source\": source.rawValue ])) } func reportFeedbackSubmit(result: PCFeedbackResult) { let feedback = result.content.trimmingChara…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:137, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:322",
    "params": "Source, Feedback, Length",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Main_Page_Show",
    "module": "公共能力",
    "trigger": "else { return } appDelegate.window?.backgroundColor = .color_bg appDelegate.window?.rootViewController = PCTabBarController() app…",
    "location": "PetChat/Base/PCRouter.swift:28",
    "params": "Country",
    "target": "Thinking/Firebase"
  },
  {
    "id": "My_Library_Show",
    "module": "公共能力",
    "trigger": "PCReport.report(withEvent: Event(type: .other, key: PCAdjustEventID.articleCollect.rawValue, param: articleParams(article))) } //…",
    "location": "PetChat/Module/PetCare/Model/PCPetCareModels.swift:302",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Finish_Page_Show",
    "module": "公共能力",
    "trigger": "\"\" ) { basePayload in var successPayload = basePayload successPayload[PCAdjustEventParamKey.time.rawValue] = elapsedTime Dispatch…",
    "location": "PetChat/Common/Managers/ProgressManager/PCProgressManager.swift:357",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Load_Again",
    "module": "公共能力",
    "trigger": "ad_Again`。 func reportPetMagicLoadAgainIfNeeded(using template: TemItemInfo?) { guard let template, PCTempManager.consumePetMagic…",
    "location": "PetChat/Common/Managers/PCPhotoPickManager/View/PCPhotoPickerImageView.swift:404, PetChat/Module/PetMagic/PCPetMagicDetailVC.swift:572",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Load_Fail",
    "module": "公共能力",
    "trigger": "dataModel.dataModel) payload[PCAdjustEventParamKey.time.rawValue] = elapsedTime payload[PCAdjustEventParamKey.reason.rawValue] = …",
    "location": "PetChat/Common/Managers/PCPhotoPickManager/View/PCPhotoPickerImageView.swift:301, PetChat/Common/Managers/ProgressManager/PCProgressManager.swift:336",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Load_Success",
    "module": "公共能力",
    "trigger": "= elapsedTime DispatchQueue.main.async { PCReport.report(withEvent: Event(type: .other, key: PCAdjustEventID.petMagicFinishPageSh…",
    "location": "PetChat/Common/Managers/ProgressManager/PCProgressManager.swift:358",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "petchat.rating.dismissed.at",
    "module": "公共能力",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "petchat.rating.pet_sounds.completed.count",
    "module": "公共能力",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "petchat.rating.presentation.timestamps",
    "module": "公共能力",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "petchat.rating.translation.guide.shown",
    "module": "公共能力",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Rating_Guide_Close",
    "module": "公共能力",
    "trigger": "PCReport.report(withEvent: Event(type: .other, key: AnalyticsEvent.show, param: [ \"Source\": source.rawValue ])) } func reportFeed…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:130, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:307",
    "params": "Source",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Rating_Guide_Show",
    "module": "公共能力",
    "trigger": "feedbackView = nil view.dismiss(animated: animated) { view.removeFromSuperview() completion?() } } func reportFeedbackShow(source…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:124, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:297",
    "params": "Source",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Rating_Guide_Submit",
    "module": "公共能力",
    "trigger": "\"Source\": source.rawValue ])) } func reportFeedbackSubmit(result: PCFeedbackResult) { let feedback = result.content.trimmingChara…",
    "location": "PetChat/Common/Managers/PCFeedbackManager/PCFeedbackManager.swift:137, PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:322",
    "params": "Source, Feedback, Length",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Rating_Prompt_Show",
    "module": "公共能力",
    "trigger": "romptType: String) { PCReport.report(withEvent: Event(type: .other, key: AnalyticsEvent.show, param: [ \"Source\": source.rawValue,…",
    "location": "PetChat/Common/Managers/PCRatingManager/PCRatingManager.swift:301",
    "params": "Source, Prompt_Type",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Check_Start",
    "module": "归因",
    "trigger": "Finished: @escaping (PCAttributionInitialWindowResult) -> Void, onResolved: ((PCAttributionResolution) -> Void)? = nil ) { attrib…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:491",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Get_Promote",
    "module": "归因",
    "trigger": "passTime: Int? = nil) { guard attribution.isPaidUser else { return } guard !UserDefaults.standard.bool(forKey: StorageKey.promote…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:1074",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Get_Promote_Final",
    "module": "归因",
    "trigger": "eFinalReported) else { return } var params = promoteParams(from: attribution) params[PCAdjustEventParamKey.form.rawValue] = final…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:1100",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Get_Promote_Server",
    "module": "归因",
    "trigger": "tServerAttribution) { guard attribution.isPaidUser else { return } guard !UserDefaults.standard.bool(forKey: StorageKey.promoteSe…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:1086",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Get_Success",
    "module": "归因",
    "trigger": "ypeNames.contains(eventName) == false if shouldReportType { reportedSDKAttributionTypeNames.insert(eventName) } } if shouldReport…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:1131",
    "params": "passTime, adNetwork, campaign",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Adjust_Init",
    "module": "归因",
    "trigger": "se) } } func registerSDK() { if register { return } register = true configOECallBackParam() Adjust.initSdk(adjustConfig) PCReport…",
    "location": "PetChat/Common/Managers/AdjustManager/AdjustManager.swift:454",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "action_type",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "ad_network",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "adgroup_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "audio_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "audio_type",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "campaign",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "campaign_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "category",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Country",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "creative_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Currency",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "device_type",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Domain",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Form",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "IAP",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "ID",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "network_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "number",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "order_id",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "page_name1",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "pass_time",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Select_Saved_Photo",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Num",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "pet_type",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Price",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Reason",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Request_Domain",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Resource_Cover_URL",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "resource_id",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Resource_Name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Resource_URL",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Retry_Count",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "sounds_name",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "source",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Source",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Sub_Agree_Rejct",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "sub_page",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "sub_success_order_report",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "sub_success_order_report_fail",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "sub_success_order_report_success",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Time",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "tip_id",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "title",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Type",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "video_number",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "video_time",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "voice_personality",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "X_Times",
    "module": "埋点",
    "trigger": "已定义，未扫描到触发调用。",
    "location": "PetChat/Common/Managers/EventManager/PCAdjustEvents.swift:1",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Loading_Show",
    "module": "启动",
    "trigger": "ert.addAction(retryAction) present(alert, animated: true) } override func viewDidAppear(_ animated: Bool) { super.viewDidAppear(a…",
    "location": "PetChat/Module/Launch/PCLaunchVC.swift:377",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "User_Page_Reject",
    "module": "启动",
    "trigger": ") guard delegate == nil else { return } transitionToMainInterface() } @objc private func handleUnAgree() { makeToast(PCLocal(str:…",
    "location": "PetChat/Module/Launch/PCAgreementVC.swift:178, PetChat/Module/Launch/PCAgreementVC.swift:179",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "User_Page_Show",
    "module": "启动",
    "trigger": "super.viewDidLoad() createUI() // Do any additional setup after loading the view. } override func viewDidAppear(_ animated: Bool)…",
    "location": "PetChat/Module/Launch/PCAgreementVC.swift:30",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "User_Page_Success",
    "module": "启动",
    "trigger": "ri(with: ConstantURL.loadServerURL()) } } @objc private func handleAgree() { PCOnboardingManager.hasAcceptedAgreement = true dele…",
    "location": "PetChat/Module/Launch/PCAgreementVC.swift:171",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Click_Bottom_Button",
    "module": "主导航",
    "trigger": "y = 0 tabBar.layer.shadowOffset = .zero tabBar.layer.shadowRadius = 0 tabBar.layer.shadowPath = nil } func handleTabDidSwitch(fro…",
    "location": "PetChat/Module/MainTab/PCTabBarController.swift:218",
    "params": "type",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Page_Show",
    "module": "主导航",
    "trigger": "meter index: 当前展示 tab 的索引。 private func reportPageShow(for index: Int) { guard let pageName = pageShowName(for: index) else { ret…",
    "location": "PetChat/Module/MainTab/PCTabBarController.swift:276",
    "params": "pageName, time",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Onboard_Click",
    "module": "Onboarding",
    "trigger": "导页继续按钮点击埋点。 /// /// - Parameter index: 当前点击时所在页索引（0-based）。 private func reportOnboardClick(for index: Int) { guard let params = …",
    "location": "PetChat/Module/Guide/PCGuideVC.swift:305",
    "params": "pageName, number",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Onboard_Show",
    "module": "Onboarding",
    "trigger": "// 上报引导页子页展示埋点。 /// /// - Parameter index: 当前展示页索引（0-based）。 private func reportOnboardShow(for index: Int) { guard let params = …",
    "location": "PetChat/Module/Guide/PCGuideVC.swift:294",
    "params": "pageName, number",
    "target": "Thinking/Firebase"
  },
  {
    "id": "onboarding_next_click",
    "module": "Onboarding",
    "trigger": "dTapStartButton), for: .touchUpInside) } /// 点击“开始魔法时刻” @objc private func didTapStartButton() { guard let selectedType else { re…",
    "location": "PetChat/Module/Guide/PCSelectPetVC.swift:275",
    "params": "petType",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Add_Pets_Click",
    "module": "Pet Hub",
    "trigger": "ottom.equalToSuperview() } } required init?(coder: NSCoder) { fatalError(\"init(coder:) has not been implemented\") } @objc private…",
    "location": "PetChat/Module/PetHub/View/HubAddPetSection.swift:382",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Add_Pets_Success",
    "module": "Pet Hub",
    "trigger": "PCToastTool.show(PCLocal(str: \"common.success\"),duration: 1) { _ in PCDBManager.shared.getPetDataList { [weak self] records, _ in…",
    "location": "PetChat/Module/PetHub/PCPetHubAddPetVC.swift:224",
    "params": "Pet_Num",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Click_Create",
    "module": "Pet Magic",
    "trigger": "buttonTitle: PCLocal(str: \"alert.ok\") ) } } /// “开始创作”按钮事件，发起任务。 @objc private func handleMakeButtonTapped() { reportPetMagicLoad…",
    "location": "PetChat/Module/PetMagic/PCPetMagicDetailVC.swift:550",
    "params": "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Create_Click",
    "module": "Pet Magic",
    "trigger": "URL\":self.dataModel.cover ?? \"\",\"Resource_URL\":self.dataModel.url ?? \"\"])) } } } } func eventClickActive() { reportPetMagicLoadAg…",
    "location": "PetChat/Module/PetMagic/PCPetMagicDetailVC.swift:446",
    "params": "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Detail_Page_Show",
    "module": "Pet Magic",
    "trigger": "ems.safeObject(at: indexPath.item) else { return } let detailVC = PCPetMagicDetailVC() detailVC.dataModel = data detailVC.dataArr…",
    "location": "PetChat/Module/PetMagic/PCPetMagicVC.swift:430, PetChat/Module/PetMagicNew/vc/PCPetMagicNewListVC.swift:824",
    "params": "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Enter_Album_Page",
    "module": "Pet Magic",
    "trigger": "eak self, weak pickerVC] in self?.handlePhotoPickerTaskCreated(pickerVC: pickerVC) } self.present(pickerVC, animated: true) PCRep…",
    "location": "PetChat/Module/PetMagic/PCPetMagicDetailVC.swift:438",
    "params": "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Magic_Start_Load",
    "module": "Pet Magic",
    "trigger": "CreateClick.rawValue,param: [\"resource_id\":self.dataModel.id ?? \"\",\"Resource_Name\":self.dataModel.name ?? \"\",\"Resource_Cover_URL\"…",
    "location": "PetChat/Module/PetMagic/PCPetMagicDetailVC.swift:447",
    "params": "resource_id, Resource_Name, Resource_Cover_URL, Resource_URL",
    "target": "Thinking/Firebase"
  },
  {
    "id": "pet_audio_click",
    "module": "Pet Sounds",
    "trigger": "cell.maskHidden = !shouldShowVipMask(for: visibleItem) } } /// 上报语音包点击埋点。 /// /// - Parameter item: 当前点击的语音包。 private func report…",
    "location": "PetChat/Module/PetSounds/PCPetSoundsVC.swift:567",
    "params": "audioType, petType, voicePersonality, audioName",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Sounds_Click",
    "module": "Pet Sounds",
    "trigger": "音频成功开始播放后，再消耗一次免费次数，避免点击失败也扣次。 PCPetSoundsFreePlayManager.shared.consumeOnceAfterPlaySuccessIfNeeded() refreshVisibleVipMaskState…",
    "location": "PetChat/Module/PetSounds/PCPetSoundsVC.swift:528",
    "params": "Type, name",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Analyzing_Sound_Fail",
    "module": "Pet Talk",
    "trigger": "reportDomain.isEmpty == false { failParam[PCAdjustEventParamKey.requestDomain.rawValue] = reportDomain } failParam.merge(vipState…",
    "location": "PetChat/Module/PetTalk/PCVoiceRecordVC.swift:516",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Analyzing_Sound_Success",
    "module": "Pet Talk",
    "trigger": "ParamKey.type.rawValue: recordType(for: changeType), PCAdjustEventParamKey.time.rawValue: elapsed, ] successParam.merge(vipStateA…",
    "location": "PetChat/Module/PetTalk/PCVoiceRecordVC.swift:293",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Stop_Recording",
    "module": "Pet Talk",
    "trigger": "ring?) { recordType = type } @objc private func cancelTapped() { onCancel?() } @objc private func stopTapped() { if let recordTyp…",
    "location": "PetChat/Module/PetTalk/View/PCPetTalkRecordingOverlayView.swift:322, PetChat/Module/PetTalk/View/PCPetTalkRecordingOverlayView.swift:326",
    "params": "type",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Talk_Guide_Finish",
    "module": "Pet Talk",
    "trigger": "guard petVoiceCard.bounds.width > 0, petVoiceCard.bounds.height > 0 else { return false } return true } /// 完成首页引导后，记录本地状态并恢复顶部视频…",
    "location": "PetChat/Module/PetTalk/PCPetTalkNewVC.swift:671",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Talk_Guide_Show",
    "module": "Pet Talk",
    "trigger": "shouldRetryTalkGuidePresentation = false attachGuideOverlayIfNeeded() guideContainerView().layoutIfNeeded() introVideoPlayerView.…",
    "location": "PetChat/Module/PetTalk/PCPetTalkNewVC.swift:620",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Tap_to_Record",
    "module": "Pet Talk",
    "trigger": "let model = PCPetTalkModel() model.id = UUID().uuidString model.sourceText = text model.changeType = changeType model.createTime …",
    "location": "PetChat/Module/PetTalk/PCPetTalkNewVC.swift:556, PetChat/Module/PetTalk/PCPetTalkNewVC.swift:1240",
    "params": "type",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Translation_Result_Page_Show",
    "module": "Pet Talk",
    "trigger": "ultPageParam: [String: Any] = [ PCAdjustEventParamKey.type.rawValue: recordType(for: changeType) ] resultPageParam.merge(vipState…",
    "location": "PetChat/Module/PetTalk/PCVoiceRecordVC.swift:417",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Album_Page_Next_Click",
    "module": "Pet Thoughts",
    "trigger": ".fullScreen self.present(pickerVC, animated: true) { viewModel.backAction = { [weak self, weak pickerVC] in guard let self else {…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1293",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "pet_thought_entrance_click",
    "module": "Pet Thoughts",
    "trigger": "} /// 统一处理导航栏右侧按钮点击：空态展示引导，有会话时进入编辑。 @objc private func handleRightButtonTapped() { switch rightButtonMode { case .guide: /// 埋点：…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:722",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Enter_Album_Page",
    "module": "Pet Thoughts",
    "trigger": "视频；在选择达到上限时给出专属提示文案。 viewModel.onSelectionLimitReached = { [weak pickerVC] in pickerVC?.view.makeToastText(PCLocal(str: \"petThoug…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1282",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Load_Again",
    "module": "Pet Thoughts",
    "trigger": "y.featurePetThoughts, resourceId: \"\", soundsName: \"\" )) return } pendingConsumeFreeUse = true } PCReport.report(withEvent: Event(…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1991, PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:3961",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Load_Fail",
    "module": "Pet Thoughts",
    "trigger": "} } /// 处理上传前的图片/视频准备失败，统一移除本轮 loading 并恢复免费次数标记。 private func handleThoughtPreparationFailure(_ error: NetError, loadingMessageI…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1457, PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1902, PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1933",
    "params": "Reason",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Load_Success",
    "module": "Pet Thoughts",
    "trigger": "self.tableView.reloadData() self.scrollToInitialConversationPosition(animated: true) self.scheduleConversationSave() PCReport.rep…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1817",
    "params": "Time",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Start_Load",
    "module": "Pet Thoughts",
    "trigger": "e = normalizedThoughtStyleName(styleNames?.first ?? selectedThoughtStyleName) let loadingStyleNames = shouldRevealAllStyles ? Tho…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1330",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Pet_Thoughts_Upload_Photo_Click",
    "module": "Pet Thoughts",
    "trigger": "ontext: PCVIPSubShowEntryContext( iapEntry: PCVIPIAPEntry.featurePetThoughts, resourceId: \"\", soundsName: \"\" )) return } PCReport…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:1271",
    "params": "-",
    "target": "Thinking/Firebase"
  },
  {
    "id": "Thought_Detail_Click",
    "module": "Pet Thoughts",
    "trigger": "= globalIndexForVisibleRow(indexPath.row) guard allMessages.indices.contains(globalIndex) else { return } guard shouldShowAnalysi…",
    "location": "PetChat/Module/PetThoughts/PCPetThoughtsVC.swift:2448",
    "params": "-",
    "target": "Thinking/Firebase"
  }
];
