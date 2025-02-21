import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      example_title: "This is an example title",
      message: "This is a simple message",
    },
  },
  br: {
    translation: {
      example_title: "Esse é um título de exemplo.",
      message: "Essa é uma simples mensagem",
    },
  },
  es: {
    translation: {
      example_title: "Este es un título de ejemplo",
      message: "Este es un mensaje simple",
    },
  },
};

i18n.use(initReactI18next).init({
  lng: "en",
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
