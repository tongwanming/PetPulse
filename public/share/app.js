(function () {
  const dictionaries = {
    en: {
      heroTitle: "What Is\nMy Pet\nThinking",
      speech: "AI reads tiny visual clues for playful pet thoughts",
      calendar: "Emotion Calendar",
      thoughts: "Pet Thoughts",
      quote: "This is it. My era has officially begun. All eyes on me, peasants.",
      basis: "Analysis Basis:",
      basisOne: "Head held high like a star on the throne.",
      basisTwo: "Eyes locked in with royal confidence.",
      download: "Download on the",
      downloadSuffix: "",
      caption: "Download and decode more pet thoughts.",
    },
    "zh-CN": {
      heroTitle: "我的宠物\n在想什么",
      speech: "AI 捕捉细微视觉线索，读懂爱玩耍的宠物内心想法",
      calendar: "心情日记",
      thoughts: "宠物想法",
      quote: "就是现在。本喵的时代正式开始，所有人都看我，臣民们。",
      basis: "分析依据：",
      basisOne: "高昂着头，像坐在王座上的明星。",
      basisTwo: "目光坚定，写满自信。",
      download: "前往",
      downloadSuffix: "下载",
      caption: "下载读懂更多宠物心声",
    },
    ja: {
      heroTitle: "うちの子は\n何を考えてる？",
      speech: "AIが小さな視覚的手がかりを読み、遊び好きなペットの気持ちを理解",
      calendar: "気分日記",
      thoughts: "ペットの気持ち",
      quote: "ついに私の時代が正式に始まった。みんな私を見て、しもべたち。",
      basis: "分析の根拠：",
      basisOne: "王座のスターのように頭を高く上げている。",
      basisTwo: "視線はまっすぐ、自信たっぷり。",
      download: "",
      downloadSuffix: "でダウンロード",
      caption: "ダウンロードして、もっとペットの気持ちを読み解こう",
    },
    ko: {
      heroTitle: "우리 펫은\n무슨 생각 중?",
      speech: "인공지능은 미세한 시각적 단서를 읽어 장난기 많은 반려동물의 속마음을 파악한다",
      calendar: "기분 일기",
      thoughts: "반려동물 생각",
      quote: "바로 이거야. 내 시대가 공식적으로 시작됐어. 모두 나를 봐, 신하들.",
      basis: "분석 근거:",
      basisOne: "왕좌 위의 스타처럼 고개를 높이 들고 있어요.",
      basisTwo: "시선이 당당하고 자신감이 넘쳐요.",
      download: "",
      downloadSuffix: "에서 다운로드",
      caption: "다운로드해 더 많은 반려동물의 마음을 해석하세요",
    },
    pt: {
      heroTitle: "O que meu\npet está\npensando?",
      speech: "A IA lê pistas visuais para entender os pets brincalhões",
      calendar: "Diário de humor",
      thoughts: "Pensamentos dos pets",
      quote: "É isso. Minha era começou oficialmente. Todos os olhos em mim, plebeus.",
      basis: "Base da análise:",
      basisOne: "Cabeça erguida como estrela no trono.",
      basisTwo: "Olhar firme, cheio de confiança.",
      download: "Baixe na",
      downloadSuffix: "",
      caption: "Baixe e decifre mais pensamentos dos pets",
    },
    de: {
      heroTitle: "Was denkt mein Haustier?",
      speech: "KI erkennt visuelle Signale und liest die Gedanken verspielter Haustiere.",
      calendar: "Stimmungstagebuch",
      thoughts: "Haustiergedanken",
      quote: "Das ist es. Meine Ära hat offiziell begonnen. Alle Augen auf mich, ihr einfachen Leute.",
      basis: "Analysegrundlage:",
      basisOne: "Der Kopf ist erhoben wie ein Star auf dem Thron.",
      basisTwo: "Der Blick ist fest und voller Selbstvertrauen.",
      download: "Laden im",
      downloadSuffix: "",
      caption: "Herunterladen, um noch mehr Gedanken Ihres Haustiers zu verstehen.",
    },
    fr: {
      heroTitle: "À quoi pense mon animal de compagnie ?",
      speech: "L’IA capture de subtils indices visuels et déchiffre les pensées de votre animal joueur.",
      calendar: "Journal d’humeur",
      thoughts: "Pensées des animaux",
      quote: "Ça y est. Mon règne commence officiellement. Tous les regards sur moi, simples mortels.",
      basis: "Base de l’analyse :",
      basisOne: "La tête haute, comme une star sur son trône.",
      basisTwo: "Un regard fixe, plein d’assurance.",
      download: "Télécharger dans l’",
      downloadSuffix: "",
      caption: "Téléchargez pour comprendre davantage les pensées de votre animal",
    },
    it: {
      heroTitle: "A cosa sta pensando il mio animale domestico?",
      speech: "L’IA cattura sottili indizi visivi e comprende i pensieri del tuo animale amante del gioco.",
      calendar: "Diario dell’umore",
      thoughts: "Pensieri degli animali",
      quote: "Eccoci. La mia era è ufficialmente iniziata. Tutti gli occhi su di me, plebei.",
      basis: "Base dell’analisi:",
      basisOne: "Testa alta, come una star sul trono.",
      basisTwo: "Sguardo fisso e pieno di sicurezza.",
      download: "Scarica su",
      downloadSuffix: "",
      caption: "Scarica per capire di più cosa pensa il tuo animale",
    },
    ar: {
      heroTitle: "ماذا يفكر حيواني الأليف؟",
      speech: "يلتقط الذكاء الاصطناعي المؤشرات البصرية الدقيقة ويفهم أفكار حيوانك الأليف المحب للعب.",
      calendar: "مذكرات المزاج",
      thoughts: "أفكار الحيوانات الأليفة",
      quote: "هذا هو الأمر. بدأ عصري رسمياً. كل الأنظار عليّ، أيها العامة.",
      basis: "أساس التحليل:",
      basisOne: "الرأس مرفوع كأنه نجم على العرش.",
      basisTwo: "نظرة ثابتة مليئة بالثقة.",
      download: "تنزيل من",
      downloadSuffix: "",
      caption: "قم بالتنزيل لفهم المزيد من أفكار حيوانك الأليف.",
    },
  };

  const params = new URLSearchParams(window.location.search);
  const supportedStyleNames = ["real_insight", "sweet_talk", "inner_drama", "savage_roast"];
  const pngFigmaLayerFiles = new Set([
    "en-calendar",
    "en-thoughts",
    "ja-calendar",
    "ja-thoughts",
    "ko-calendar",
    "ko-thoughts",
    "pt-calendar",
    "pt-thoughts",
    "zh-calendar",
    "zh-thoughts",
    "de-calendar",
    "de-thoughts",
    "fr-calendar",
    "fr-thoughts",
    "it-calendar",
    "it-thoughts",
    "ar-calendar",
    "ar-thoughts",
  ]);
  const styleName = resolveStyleName("real_insight");
  const attributionStyleName = resolveStyleName("unknown");
  const lang = resolveLanguage();
  const copy = dictionaries[lang] || dictionaries.en;

  syncScale();
  applyStyleName(styleName);
  applyCopy(copy, lang);

  window.addEventListener("resize", syncScale, { passive: true });
  window.addEventListener("orientationchange", syncScale, { passive: true });

  const storeButton = document.querySelector("[data-store-button]");
  if (storeButton) {
    storeButton.addEventListener("click", openStore);
  }

  function applyCopy(nextCopy, nextLang) {
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextLang === "ar" ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      const key = node.getAttribute("data-i18n");
      if (Object.prototype.hasOwnProperty.call(nextCopy, key)) {
        node.textContent = nextCopy[key];
      }
    });
  }

  function applyStyleName(nextStyleName) {
    document.documentElement.dataset.styleName = nextStyleName;
    document.querySelectorAll("[data-store-button]").forEach((node) => {
      node.setAttribute("data-style-name", nextStyleName);
    });
  }

  function renderFigmaLayers(nextLang) {
    const mount = document.querySelector("[data-figma-layers]");
    if (!mount) return;

    const layers = figmaLayers[nextLang] || figmaLayers.en;
    const fragment = document.createDocumentFragment();
    layers.forEach((layer) => {
      const img = document.createElement("img");
      img.className = `figma-layer ${layer.kind || "hero-layer"}`;
      img.src = `./assets/figma/${layer.file}.${getFigmaLayerExtension(layer.file)}`;
      img.alt = "";
      img.setAttribute("aria-hidden", "true");
      img.style.left = `${layer.x}px`;
      img.style.top = `${layer.y}px`;
      img.style.width = `${layer.w}px`;
      img.style.height = `${layer.h}px`;
      fragment.appendChild(img);
    });

    mount.replaceChildren(fragment);
  }

  function getFigmaLayerExtension(file) {
    return pngFigmaLayerFiles.has(file) ? "png" : "svg";
  }

  function resolveLanguage() {
    const requestedLang = params.get("lang");
    if (requestedLang) return pickLanguage(requestedLang);

    const browserLanguages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language];
    for (const browserLang of browserLanguages) {
      const matchedLang = pickLanguage(browserLang);
      if (matchedLang) return matchedLang;
    }

    return "en";
  }

  function pickLanguage(value) {
    if (!value) return "";
    if (dictionaries[value]) return value;
    const normalized = String(value).toLowerCase();
    if (normalized.startsWith("zh")) return "zh-CN";
    if (normalized.startsWith("ja")) return "ja";
    if (normalized.startsWith("ko")) return "ko";
    if (normalized.startsWith("pt")) return "pt";
    if (normalized.startsWith("de")) return "de";
    if (normalized.startsWith("fr")) return "fr";
    if (normalized.startsWith("it")) return "it";
    if (normalized.startsWith("ar")) return "ar";
    if (normalized.startsWith("en")) return "en";
    return "";
  }

  function resolveStyleName(fallback) {
    const requestedStyleName = params.get("style_name") || params.get("styleName") || "";
    const normalizedStyleName = String(requestedStyleName).trim().toLowerCase().replace(/-/g, "_");
    return supportedStyleNames.includes(normalizedStyleName) ? normalizedStyleName : fallback;
  }

  function openStore() {
    const override = params.get("storeUrl");
    const httpsUrl = override ? withShareContext(override) : buildAdjustUrl();
    const appStoreUrl = httpsUrl.startsWith("https://apps.apple.com")
      ? httpsUrl.replace("https://apps.apple.com", "itms-apps://apps.apple.com")
      : httpsUrl;

    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && appStoreUrl !== httpsUrl) {
      window.location.href = appStoreUrl;
      window.setTimeout(() => {
        window.location.href = httpsUrl;
      }, 650);
      return;
    }

    window.location.href = httpsUrl;
  }

  function buildAdjustUrl() {
    const adjustUrl = new URL("https://app.adjust.com/22upvjh8");
    adjustUrl.searchParams.set("campaign", "pethought_card_share");
    adjustUrl.searchParams.set("adgroup", attributionStyleName);
    return adjustUrl.href;
  }

  function withShareContext(url) {
    try {
      const nextUrl = new URL(url, window.location.href);
      nextUrl.searchParams.set("style_name", styleName);
      return nextUrl.href;
    } catch (_) {
      return url;
    }
  }

  function syncScale() {
    const scale = Math.min(window.innerWidth / 393, 1);
    document.documentElement.style.setProperty("--scale", String(scale));
  }

  const figmaLayers = {
    en: [
      L("en-calendar", 16, 320, 237.21, 446.96, "phone-layer"),
      L("en-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("en-hero", 43, 106, 308.67, 229.46, "hero-layer"),
    ],
    "zh-CN": [
      L("zh-calendar", 16, 320, 237.21, 446.96, "phone-layer"),
      L("zh-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("zh-pet-a", 130, 163, 72.38, 90, "hero-layer"),
      L("zh-pet-b", 89, 226, 107.15, 109.46, "hero-layer"),
      L("zh-deco-green", 248, 108, 47.87, 44.57, "deco-layer"),
      L("zh-deco-pink", 51, 242, 32.49, 32.48, "deco-layer"),
      L("zh-title-8", 55.78, 121.43, 45.7, 45.66, "title-layer"),
      L("zh-title-7", 105, 116, 41, 39, "title-layer"),
      L("zh-title-6", 152, 111, 39.95, 41.48, "title-layer"),
      L("zh-title-5", 195, 109, 45.42, 42.98, "title-layer"),
      L("zh-title-4", 88, 164, 42.29, 43.3, "title-layer"),
      L("zh-title-3", 201, 161, 44.35, 40.78, "title-layer"),
      L("zh-title-2", 248, 161, 39, 37, "title-layer"),
      L("zh-title-1", 288.29, 158.29, 40.43, 40.43, "title-layer"),
      L("zh-speech", 180, 206, 136, 129, "speech-layer"),
      L("zh-leaf", 285, 284.48, 25, 27.15, "deco-layer"),
    ],
    ja: [
      L("ja-calendar", 16, 320, 237.21, 446.96, "phone-layer"),
      L("ja-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("ja-pet-a", 115, 160, 70.77, 88, "hero-layer"),
      L("ja-pet-b", 86, 216, 107.15, 109.46, "hero-layer"),
      L("ja-deco-pink", 46, 242, 32.49, 32.48, "deco-layer"),
      L("ja-deco-orange", 304, 116, 47.87, 44.57, "deco-layer"),
      L("ja-title-14", 70, 119, 38.85, 38.46, "title-layer"),
      L("ja-title-13", 117, 123, 29.87, 26.11, "title-layer"),
      L("ja-title-12", 158, 115, 34.14, 31.05, "title-layer"),
      L("ja-title-11", 204, 122.34, 20.05, 21.45, "title-layer"),
      L("ja-title-10", 229.52, 115, 18.59, 30.1, "title-layer"),
      L("ja-title-9", 257, 115, 39.86, 39.41, "title-layer"),
      L("ja-title-8", 55, 176.15, 39.91, 39.95, "title-layer"),
      L("ja-title-7", 95.56, 174, 19.37, 29.12, "title-layer"),
      L("ja-title-6", 188, 165, 34, 34, "title-layer"),
      L("ja-title-5", 227.55, 167.02, 21.91, 28.96, "title-layer"),
      L("ja-title-4", 249, 168, 21.42, 24.7, "title-layer"),
      L("ja-title-3", 273.94, 173, 26.83, 22.74, "title-layer"),
      L("ja-title-2", 300.07, 174.54, 18.96, 27.15, "title-layer"),
      L("ja-title-1", 317.85, 186.41, 30.38, 29.73, "title-layer"),
      L("ja-speech", 167, 206, 137.31, 135.38, "speech-layer"),
      L("ja-leaf", 294.62, 302, 16.76, 18.21, "deco-layer"),
    ],
    ko: [
      L("ko-calendar", 16, 320, 237.21, 446.96, "phone-layer"),
      L("ko-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("ko-pet-a", 105, 171, 70.77, 88, "hero-layer"),
      L("ko-pet-b", 89, 226, 107.15, 109.46, "hero-layer"),
      L("ko-deco-pink", 51, 242, 32.49, 32.48, "deco-layer"),
      L("ko-deco-orange", 308, 117, 47.87, 44.57, "deco-layer"),
      L("ko-title-14", 98, 122, 27.81, 33.06, "title-layer"),
      L("ko-title-13", 134, 122, 28.56, 31.42, "title-layer"),
      L("ko-title-12", 169.93, 118.95, 26.07, 32.13, "title-layer"),
      L("ko-title-11", 201.58, 119.61, 29.7, 31.45, "title-layer"),
      L("ko-title-10", 233, 118, 31.72, 33.56, "title-layer"),
      L("ko-title-9", 266.35, 120.45, 32.16, 33.66, "title-layer"),
      L("ko-title-8", 45.39, 177.48, 32.1, 33.5, "title-layer"),
      L("ko-title-7", 78.89, 169.22, 28.87, 30.53, "title-layer"),
      L("ko-title-6", 172, 167, 28.94, 32.67, "title-layer"),
      L("ko-title-5", 205.97, 167.84, 27.65, 29.6, "title-layer"),
      L("ko-title-4", 239.33, 168.25, 26.28, 28.18, "title-layer"),
      L("ko-title-3", 270.97, 168.84, 25.69, 27.73, "title-layer"),
      L("ko-title-2", 297.66, 169.84, 34.77, 36.14, "title-layer"),
      L("ko-title-1", 333.97, 178.84, 22.74, 29.79, "title-layer"),
      L("ko-speech", 180, 206, 136, 129, "speech-layer"),
      L("ko-leaf", 288, 290, 20.84, 22.64, "deco-layer"),
    ],
    pt: [
      L("pt-calendar", 15.99, 320, 237.21, 446.96, "phone-layer"),
      L("pt-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("pt-pet-a", 130, 166, 70.77, 88, "hero-layer"),
      L("pt-pet-b", 89, 226, 107.15, 109.46, "hero-layer"),
      L("pt-deco-pink", 51, 242, 32.49, 32.48, "deco-layer"),
      L("pt-deco-orange", 293, 106, 47.87, 44.57, "deco-layer"),
      L("pt-title-1", 63, 116, 36, 40, "title-layer"),
      L("pt-title-2", 111.67, 129.45, 52.46, 37.45, "title-layer"),
      L("pt-title-4", 175.67, 124.66, 55.33, 21.74, "title-layer"),
      L("pt-title-3", 240.83, 108, 46.71, 52.9, "title-layer"),
      L("pt-title-5", 38, 174, 83.96, 46.61, "title-layer"),
      L("pt-title-6", 205, 154, 127.55, 49.82, "title-layer"),
      L("pt-speech", 180, 206, 136, 129, "speech-layer"),
      L("pt-leaf", 287, 276, 20, 23.19, "deco-layer"),
    ],
    de: [
      L("de-calendar", 15.99, 320, 237.21, 446.96, "phone-layer"),
      L("de-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("de-title", 73.14, 112.15, 245.88, 78.54, "title-layer"),
      L("de-pet-a", 35, 172, 70.77, 88, "hero-layer"),
      L("de-pet-b", 99, 195, 107.15, 109.46, "hero-layer"),
      L("de-speech", 182, 196, 154.42, 143, "speech-layer"),
      L("de-deco-orange", 294, 143, 47.87, 44.57, "deco-layer"),
      L("de-deco-pink", 57, 271, 32.49, 32.48, "deco-layer"),
      L("de-leaf", 303, 299, 20, 23.19, "deco-layer"),
    ],
    fr: [
      L("fr-calendar", 15.99, 320, 237.21, 446.96, "phone-layer"),
      L("fr-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("fr-title", 64.05, 93.26, 271.74, 115.63, "title-layer"),
      L("fr-pet-a", 29, 150, 70.77, 88, "hero-layer"),
      L("fr-pet-b", 103, 214, 107.15, 109.46, "hero-layer"),
      L("fr-speech", 178, 205, 154.42, 143, "speech-layer"),
      L("fr-deco-orange", 316, 130, 47.87, 44.57, "deco-layer"),
      L("fr-deco-pink", 61, 250, 32.49, 32.48, "deco-layer"),
    ],
    it: [
      L("it-calendar", 15.99, 320, 237.21, 446.96, "phone-layer"),
      L("it-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("it-title", 42.02, 96.58, 315.19, 105.74, "title-layer"),
      L("it-pet-a", 29, 150, 70.77, 88, "hero-layer"),
      L("it-pet-b", 103, 214, 107.15, 109.46, "hero-layer"),
      L("it-speech", 172, 207, 173.2, 143, "speech-layer"),
      L("it-deco-orange", 316, 130, 47.87, 44.57, "deco-layer"),
      L("it-deco-pink", 61, 250, 32.49, 32.48, "deco-layer"),
    ],
    ar: [
      L("ar-calendar", 15.99, 320, 237.21, 446.96, "phone-layer"),
      L("ar-thoughts", 151, 304, 233.42, 435.8, "phone-layer"),
      L("ar-title", 80.84, 105.58, 237.23, 84.7, "title-layer"),
      L("ar-pet-a", 29, 162, 70.77, 88, "hero-layer"),
      L("ar-pet-b", 103, 181, 107.15, 109.46, "hero-layer"),
      L("ar-speech", 172, 207, 173.2, 143, "speech-layer"),
      L("ar-deco-orange", 270, 140, 47.87, 44.57, "deco-layer"),
      L("ar-deco-pink", 68, 279, 32.49, 32.48, "deco-layer"),
    ],
  };

  function L(file, x, y, w, h, kind) {
    return { file, x, y, w, h, kind };
  }

  renderFigmaLayers(lang);
})();
