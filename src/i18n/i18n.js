import i18n from "i18next";
import en from "./languages/en.json";
import es from "./languages/es.json";

i18n.init({
  fallbackLng: "en",
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});

export default i18n;
