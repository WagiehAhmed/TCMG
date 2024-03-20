import React from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import art from "./languages/ar.json";
import ent from "./languages/en.json";

const resources = {
  ar: {
    translation: art,
  },
  en: {
    translation: ent,
  },
};

const options = {
    order: ['querystring', 'navigator'],
    lookupQuerystring: 'lng'
  }

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // lng: "en",
    detection: options,
    react: { useSuspense: false },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
