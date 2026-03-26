import type { SiteLocale } from "~/data/site";
import { siteCopy } from "~/data/i18n";

const DEFAULT_LOCALE: SiteLocale = "zh";

export function useSiteLocale() {
  const localeCookie = useCookie<SiteLocale>("petpulse-locale", {
    default: () => DEFAULT_LOCALE,
    sameSite: "lax"
  });

  const locale = useState<SiteLocale>("site-locale", () => localeCookie.value ?? DEFAULT_LOCALE);

  watch(
    locale,
    (value) => {
      localeCookie.value = value;
    },
    { immediate: true }
  );

  const toggleLocale = () => {
    locale.value = locale.value === "zh" ? "en" : "zh";
  };

  const setLocale = (value: SiteLocale) => {
    locale.value = value;
  };

  const copy = computed(() => siteCopy[locale.value]);

  return {
    locale,
    copy,
    toggleLocale,
    setLocale
  };
}
