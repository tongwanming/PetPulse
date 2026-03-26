import type { SiteLocale } from "~/data/site";

export const localeOptions: { value: SiteLocale; label: string }[] = [
  { value: "zh", label: "中文" },
  { value: "en", label: "EN" }
];

export const siteCopy = {
  zh: {
    brandSubtitle: "猫狗叫声与养宠知识站",
    nav: {
      home: "首页",
      sounds: "宠物叫声",
      training: "训练口令",
      guides: "养宠常识",
      stages: "成长阶段",
      about: "关于"
    },
    footer: {
      description: "宠物叫声、逗宠声音、养宠知识与成长阶段指南。",
      contact: "联系我们",
      disclaimer: "免责声明",
      privacy: "隐私政策"
    },
    common: {
      training: "训练口令",
      sounds: "声音内容",
      guides: "指南",
      stages: "成长阶段",
      voices: "声音版本",
      totalAudio: "总音频数",
      backToTraining: "返回训练口令库",
      backToSounds: "返回声音列表",
      backToGuides: "返回知识列表",
      backToStages: "返回阶段列表",
      previous: "上一条",
      next: "下一条",
      trainingGoal: "训练目标",
      trainingTips: "训练提醒",
      viewTrainingPage: "查看训练页",
      audience: "适合人群",
      readMore: "阅读详情",
      details: "查看详情",
      playable: "可直接播放",
      waitingAudio: "等待上传音频",
      useCase: "适用场景",
      caution: "注意事项",
      intro: "导读",
      keyPoints: "核心要点",
      stageIntro: "阶段导读",
      stageFocus: "这一阶段建议重点关注"
    },
    audioPlayer: {
      play: "播放",
      pause: "暂停",
      audioConnected: "已连接音频文件",
      audioMissing: "等待上传真实音频文件"
    },
    trainingIndex: {
      eyebrow: "Training",
      title: "训练口令音频库",
      description: "把常用训练口令按页面整理出来，便于试听不同声线版本，并和训练知识内容联动。",
      searchTitle: "快速检索",
      searchPlaceholder: "搜索：过来、安静、趣味训练、召回...",
      searchSummary: (items: number, variants: number) =>
        `当前展示 ${items} 条训练口令。每条口令都提供 ${variants} 个声音版本，并会按当前语言切换对应音频。`
    },
    home: {
      badge: "PetPulse · 宠物声音与养宠知识站",
      titlePrefix: "一个更好看、也更好用的",
      titleAccent: "猫狗内容官网",
      description: "把猫狗叫声、逗宠互动声音、养宠常识、风险提醒和成长阶段知识，整理成更容易查找、浏览和继续扩充的内容网站。",
      primaryCta: "先看声音内容",
      secondaryCta: "浏览养宠知识",
      board: "品牌看板",
      cuteUseful: "Cute + Useful",
      priorityLabel: "本周优先模块",
      priorityTitle: "先把声音内容做好，再往知识页扩",
      priorityBody: "这个结构适合持续增长。首页负责导流，列表页负责聚合，详情页负责承接搜索和后续补内容。",
      recommended: "推荐做法",
      recommendedTitle: "真实音频放 `public/audio`",
      recommendedBody: "页面数据与文件路径分离，后续维护最省事。",
      strategy: "内容策略",
      strategyTitle: "以猫狗高频搜索问题做专题",
      strategyBody: "更适合 SEO，也更容易持续补文章。",
      collectionsTitle: "首页推荐专题",
      collectionsDescription: "这些模块让首页更像一个内容产品，而不是简单的链接集合。",
      enterCollection: "进入专题",
      soundsTitle: "猫狗声音与逗宠内容",
      soundsDescription: "先把声音内容做成结构化页面，后续你只需要往 public/audio 里放入真实音频文件并补上链接。",
      exploreTitle: "常用内容入口",
      exploreDescription: "把官网最核心的几个方向做成显眼入口，首页负责引导，列表页和详情页承接搜索需求。",
      guidesTitle: "养宠常识与注意事项",
      guidesDescription: "把新手高频会搜的问题放在前面，首页承担导流，详情页承接搜索流量。",
      stagesTitle: "按成长阶段整理内容",
      stagesDescription: "把猫狗不同年龄段拆开，避免所有知识都堆在一个列表里。",
      noticeTitle: "养宠内容使用提醒",
      noticeDescription: "声音和知识页都建议保留边界说明，这类内容站更容易建立可信度。"
    },
    guidesIndex: {
      title: "养宠常识与注意事项",
      description: "内容以搜索友好的专题页来组织，适合继续扩充成长为一个完整的宠物知识网站。"
    },
    soundsIndex: {
      title: "宠物叫声与互动声音",
      description: "这里集中放猫叫、狗叫、逗猫和逗狗声音。真实音频文件建议统一存放在 public/audio 目录。",
      searchTitle: "声音库检索",
      searchPlaceholder: "搜索：安抚、警觉、逗猫、饭点...",
      searchSummary: (count: number) => `当前展示 ${count} 条声音内容。你可以按动物类型切换，也可以直接按关键词搜索情绪和用途。`,
      summaryLabels: ["总音频", "猫咪相关", "狗狗相关", "互动音效"],
      featuredTitle: "推荐试听",
      featuredDescription: "先从更有代表性的声音开始，适合首页推荐、用户第一次访问和内容联动。",
      groupItems: (count: number) => `${count} 条内容`,
      emptyGroup: "当前筛选条件下，这个分组还没有匹配结果。可以切换分类或换个关键词。",
      groups: {
        cats: { title: "猫咪叫声", description: "更偏情绪表达和状态识别，适合和养猫知识页联动。" },
        dogs: { title: "狗狗叫声", description: "更适合做邀玩、警觉、陪伴等行为场景解读。" },
        teaser: { title: "互动与召唤音效", description: "更适合作为快速播放内容，适合逗宠和注意力唤回。" }
      }
    },
    soundDetail: {
      player: "播放区",
      popularTags: "热门标签",
      popularTagsDescription: "用标签继续探索同类声音。",
      backToLibrary: "回到声音库",
      uploadTitle: "后续补真实音频的方法",
      relatedTitle: "相关推荐",
      relatedDescription: "基于当前音频的动物类型、分类和标签，为你推荐更接近的声音内容。",
      allSounds: "查看全部声音"
    },
    stagesIndex: {
      title: "猫狗各阶段养护知识",
      description: "按阶段划分内容，更适合覆盖搜索意图，也更方便你继续扩展专题。"
    },
    about: {
      title: "关于 PetPulse",
      description: "PetPulse 不是单纯展示公司信息的落地页，而是一个围绕猫狗声音与养宠内容构建的宠物知识官网。",
      expandTitle: "适合继续扩充的内容方向",
      expandItems: [
        "增加更多猫狗叫声类型，并接入真实音频文件。",
        "把知识页继续细分为饮食、行为、训练、医疗、用品等专题。",
        "首页加入推荐文章、热门搜索和最新更新模块。",
        "后续接入真实 Logo、品牌插画与更完整的文案体系。"
      ],
      boundaryTitle: "内容边界说明",
      boundaryBody: "网站内容可以作为日常养宠参考，但不替代兽医诊断。涉及疾病、误食、持续异常行为等情况，仍应尽快联系线下专业机构。",
      modulesTitle: "官网后续可以增加的通用模块",
      modulesItems: [
        "热门文章、最新更新、专题推荐，让首页更像真正运营中的内容站。",
        "免责声明、隐私政策、联系我们等标准页面，完善通用官网信息。",
        "后续如果内容多到几十篇以上，再切到 Markdown 或 CMS，会比现在更合适。"
      ],
      pagesTitle: "站点通用页面"
    },
    contact: {
      title: "联系我们",
      description: "如果你想反馈站点问题、提交宠物内容建议，或者讨论宠物相关合作，可以通过下面的信息联系。",
      infoTitle: "联系方式",
      email: "邮箱",
      siteUrl: "站点地址",
      fitContent: "适合联系的内容",
      fitBody: "内容纠错、功能建议、宠物声音补充、合作沟通。",
      beforeTitle: "联系前建议",
      beforeItems: [
        "如果是页面错误，请尽量附上页面链接和截图。",
        "如果是音频建议，尽量说明适用的宠物类型和使用场景。",
        "如果涉及医疗判断，请直接咨询线下兽医，本站不提供诊疗结论。"
      ]
    },
    privacy: {
      title: "隐私政策",
      description: "PetPulse 当前为内容展示型网站，隐私政策重点说明访问数据、联系方式和第三方托管服务。",
      infoTitle: "我们可能收集的信息",
      infoBody: "当前站点不提供账号注册、评论和表单提交等复杂功能。若你通过邮箱联系站点，可能会提供你的邮箱地址、昵称和消息内容；此外，Cloudflare 等托管服务可能会生成基础访问日志和匿名统计数据。",
      usageTitle: "这些信息如何被使用",
      usageItems: [
        "用于回复你的站点反馈、内容建议和合作沟通。",
        "用于排查页面异常、优化音频内容和改进站点结构。",
        "不会主动将你的联系信息出售或用于无关营销。"
      ],
      thirdPartyTitle: "第三方服务",
      thirdPartyBody: "本站使用 GitHub 管理代码，使用 Cloudflare Pages/Workers 提供托管和访问服务。第三方平台可能根据其自身条款处理必要的技术数据，具体请以对应平台官方政策为准。"
    },
    disclaimer: {
      title: "免责声明",
      description: "PetPulse 提供的是宠物声音和养宠内容参考，不构成医疗、诊断或其他专业结论。",
      referenceTitle: "内容参考性质",
      referenceBody: "站内关于猫狗叫声、训练口令、养宠常识、成长阶段和注意事项的内容，仅用于一般信息参考和日常养宠辅助，不替代兽医诊断、线下检查、行为评估或法律建议。",
      audioTitle: "音频使用提醒",
      audioItems: [
        "声音内容适合短时播放，不建议长时间循环刺激宠物。",
        "如果宠物出现明显紧张、烦躁、躲避、低鸣、吠叫升级等表现，应立即停止播放。",
        "训练口令音频仅作为辅助材料，训练效果仍取决于环境、节奏、奖励与个体差异。"
      ],
      liabilityTitle: "责任边界",
      liabilityBody: "对于因使用本站内容或音频所导致的直接或间接后果，包括但不限于宠物应激、误判、训练失败、误食或延误就诊等风险，用户应结合实际情况自行判断，并及时联系专业机构处理。"
    }
  },
  en: {
    brandSubtitle: "Pet sounds and care guides",
    nav: {
      home: "Home",
      sounds: "Pet Sounds",
      training: "Training",
      guides: "Care Guides",
      stages: "Life Stages",
      about: "About"
    },
    footer: {
      description: "Pet sounds, teaser audio, care guides, and life-stage knowledge for cats and dogs.",
      contact: "Contact",
      disclaimer: "Disclaimer",
      privacy: "Privacy"
    },
    common: {
      training: "Training",
      sounds: "Sounds",
      guides: "Guides",
      stages: "Stages",
      voices: "Voice variants",
      totalAudio: "Total audio",
      backToTraining: "Back to training library",
      backToSounds: "Back to sounds",
      backToGuides: "Back to guides",
      backToStages: "Back to stages",
      previous: "Previous",
      next: "Next",
      trainingGoal: "Training goal",
      trainingTips: "Training tips",
      viewTrainingPage: "Open training page",
      audience: "Audience",
      readMore: "Read more",
      details: "View details",
      playable: "Playable now",
      waitingAudio: "Waiting for audio upload",
      useCase: "Use case",
      caution: "Caution",
      intro: "Overview",
      keyPoints: "Key points",
      stageIntro: "Stage overview",
      stageFocus: "What to focus on in this stage"
    },
    audioPlayer: {
      play: "Play",
      pause: "Pause",
      audioConnected: "Audio file connected",
      audioMissing: "Waiting for a real audio file"
    },
    trainingIndex: {
      eyebrow: "Training",
      title: "Training command library",
      description: "Browse core training commands, compare voice variants, and pair audio playback with practical training guidance.",
      searchTitle: "Quick search",
      searchPlaceholder: "Search: come, quiet, recall, fun tricks...",
      searchSummary: (items: number, variants: number) =>
        `Showing ${items} commands. Each command includes ${variants} voice variants and switches to the matching audio language.`
    },
    home: {
      badge: "PetPulse · Pet sounds and care knowledge",
      titlePrefix: "A better-looking, easier-to-use",
      titleAccent: "pet content website",
      description: "Organize cat and dog sounds, teaser audio, care basics, risk reminders, and life-stage knowledge into a content site that is easier to browse, search, and keep expanding.",
      primaryCta: "Browse sounds first",
      secondaryCta: "Read care guides",
      board: "Brand board",
      cuteUseful: "Cute + Useful",
      priorityLabel: "Current priority",
      priorityTitle: "Build the sound library first, then expand the knowledge pages",
      priorityBody: "This structure supports steady growth. The homepage drives traffic, list pages group content, and detail pages capture search intent.",
      recommended: "Recommended setup",
      recommendedTitle: "Store real audio in `public/audio`",
      recommendedBody: "Separating page data from file paths keeps long-term maintenance simpler.",
      strategy: "Content strategy",
      strategyTitle: "Build topics around high-frequency cat and dog searches",
      strategyBody: "This is stronger for SEO and easier to expand over time.",
      collectionsTitle: "Featured homepage collections",
      collectionsDescription: "These modules make the homepage feel like a real content product, not just a list of links.",
      enterCollection: "Open collection",
      soundsTitle: "Pet sounds and teaser audio",
      soundsDescription: "Structure the sound content first, then keep adding real audio files under public/audio and link them in data.",
      exploreTitle: "Common entry points",
      exploreDescription: "Turn the core sections of the site into clear homepage entry points that feed into list and detail pages.",
      guidesTitle: "Care basics and safety topics",
      guidesDescription: "Put the questions beginners search most often at the front and let detail pages capture search traffic.",
      stagesTitle: "Organize content by life stage",
      stagesDescription: "Split kitten/puppy, adult, and senior content instead of stacking everything into one long list.",
      noticeTitle: "Content-use reminders",
      noticeDescription: "Audio and knowledge pages should keep clear boundaries. That improves trust for this kind of content site."
    },
    guidesIndex: {
      title: "Care basics and safety topics",
      description: "The content is organized as search-friendly topic pages and can keep growing into a fuller pet knowledge website."
    },
    soundsIndex: {
      title: "Pet sounds and interaction audio",
      description: "This page groups cat vocals, dog vocals, and teaser audio. Real sound files should stay under public/audio.",
      searchTitle: "Library search",
      searchPlaceholder: "Search: calming, alert, teaser, mealtime...",
      searchSummary: (count: number) => `Showing ${count} sound items. Filter by animal type or search by mood and use case.`,
      summaryLabels: ["Total audio", "Cat-related", "Dog-related", "Interactive audio"],
      featuredTitle: "Recommended listening",
      featuredDescription: "Start with the most representative sounds for first-time visitors and homepage recommendations.",
      groupItems: (count: number) => `${count} items`,
      emptyGroup: "No matches in this group for the current filter. Change category or try another keyword.",
      groups: {
        cats: { title: "Cat vocals", description: "Better for mood interpretation and linking to cat-care articles." },
        dogs: { title: "Dog vocals", description: "Useful for alert, play, companionship, and behavior scenarios." },
        teaser: { title: "Interaction and recall audio", description: "Quick-play sounds for teasing pets or regaining attention." }
      }
    },
    soundDetail: {
      player: "Player",
      popularTags: "Popular tags",
      popularTagsDescription: "Use tags to keep exploring related sound content.",
      backToLibrary: "Back to sound library",
      uploadTitle: "How to add more real audio later",
      relatedTitle: "Related recommendations",
      relatedDescription: "Based on animal type, category, and tags, these are the closest related sounds.",
      allSounds: "View all sounds"
    },
    stagesIndex: {
      title: "Care guides by life stage",
      description: "Organizing by stage covers search intent more clearly and makes future expansion easier."
    },
    about: {
      title: "About PetPulse",
      description: "PetPulse is not just a generic company landing page. It is a pet knowledge website built around cat and dog sounds plus practical care content.",
      expandTitle: "Content directions worth expanding",
      expandItems: [
        "Add more cat and dog sound types and wire them to real audio files.",
        "Split guide pages further into feeding, behavior, training, medical, and product topics.",
        "Add recommended articles, hot searches, and latest updates to the homepage.",
        "Introduce a real logo, brand illustration, and a more complete copy system."
      ],
      boundaryTitle: "Content boundary",
      boundaryBody: "The site can help with everyday pet-care reference, but it does not replace veterinary diagnosis. For illness, ingestion, or persistent abnormal behavior, contact an offline professional quickly.",
      modulesTitle: "Standard website modules to add later",
      modulesItems: [
        "Hot articles, latest updates, and featured topics to make the homepage feel like a living content site.",
        "Standard pages such as disclaimer, privacy policy, and contact details.",
        "If content grows to dozens of articles, move to Markdown or a CMS at that point."
      ],
      pagesTitle: "Standard site pages"
    },
    contact: {
      title: "Contact",
      description: "For site feedback, content suggestions, or pet-related collaboration, use the contact details below.",
      infoTitle: "Contact details",
      email: "Email",
      siteUrl: "Site URL",
      fitContent: "Best contact topics",
      fitBody: "Content corrections, feature suggestions, pet sound additions, and collaboration.",
      beforeTitle: "Before you contact us",
      beforeItems: [
        "If the issue is a page error, include the page URL and a screenshot if possible.",
        "For audio suggestions, describe the target pet type and use scenario.",
        "For medical judgment, consult an offline veterinarian directly. This site does not provide diagnosis."
      ]
    },
    privacy: {
      title: "Privacy policy",
      description: "PetPulse is currently a content website. This policy explains access data, contact information, and third-party hosting.",
      infoTitle: "What we may collect",
      infoBody: "The site does not currently provide user accounts, comments, or complex forms. If you contact the site by email, you may provide an email address, nickname, and message content. Cloudflare and similar hosting services may also generate basic access logs and anonymous statistics.",
      usageTitle: "How the information is used",
      usageItems: [
        "To respond to site feedback, content suggestions, and collaboration requests.",
        "To diagnose page issues, improve audio content, and refine site structure.",
        "We do not proactively sell contact information or use it for unrelated marketing."
      ],
      thirdPartyTitle: "Third-party services",
      thirdPartyBody: "The site uses GitHub for code management and Cloudflare Pages/Workers for hosting and delivery. Those platforms may process necessary technical data under their own policies."
    },
    disclaimer: {
      title: "Disclaimer",
      description: "PetPulse provides pet sound and care reference content. It does not constitute medical, diagnostic, or other professional conclusions.",
      referenceTitle: "Reference-only content",
      referenceBody: "Cat and dog sounds, training commands, care basics, stage guides, and safety notes on this site are for general information and daily pet-care support only. They do not replace veterinary diagnosis, in-person evaluation, behavioral assessment, or legal advice.",
      audioTitle: "Audio-use reminders",
      audioItems: [
        "Audio content is intended for short sessions and should not be looped for long periods.",
        "If a pet shows clear stress, avoidance, growling, or escalating barking, stop playback immediately.",
        "Training command audio is only a support tool. Results still depend on timing, environment, rewards, and individual differences."
      ],
      liabilityTitle: "Liability boundary",
      liabilityBody: "Users should judge real situations on their own and contact professionals when needed. That includes risks such as pet stress, misreading behavior, failed training, accidental ingestion, or delayed treatment."
    }
  }
} as const;
