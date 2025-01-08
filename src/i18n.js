// i18n
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// English translations
import AboutEn from "./locales/en/about.json"
import ClientEn from "./locales/en/client.json"
import ContactEn from "./locales/en/contact.json"
import FeatureEn from "./locales/en/feature.json"
import FooterEn from "./locales/en/footer.json"
import GetInTouchEn from "./locales/en/getInTouch.json"
import HeaderEn from "./locales/en/header.json"
import HeroEn from "./locales/en/hero.json"
import ProfessionalEn from "./locales/en/professional.json"
import ServicesEn from "./locales/en/services.json"
import NotFoundEn from "./locales/en/notFound.json"
// Arabic translations
import AboutAr from "./locales/ar/about.json";
import ClientAr from "./locales/ar/client.json";
import ContactAr from "./locales/ar/contact.json";
import FeatureAr from "./locales/ar/feature.json";
import FooterAr from "./locales/ar/footer.json";
import GetInTouchAr from "./locales/ar/getInTouch.json";
import HeaderAr from "./locales/ar/header.json";
import HeroAr from "./locales/ar/hero.json";
import ProfessionalAr from "./locales/ar/professional.json";
import ServicesAr from "./locales/ar/services.json";
import NotFoundAr from "./locales/ar/notFound.json";

// Translations
const resources = {
  en: {
    about: AboutEn,
    client: ClientEn,
    contact: ContactEn,
    feature: FeatureEn,
    footer: FooterEn,
    getInTouch: GetInTouchEn,
    header: HeaderEn,
    hero: HeroEn,
    professional: ProfessionalEn,
    services: ServicesEn,
    notFound: NotFoundEn,
  },
  ar: {
    about: AboutAr,
    client: ClientAr,
    contact: ContactAr,
    feature: FeatureAr,
    footer: FooterAr,
    getInTouch: GetInTouchAr,
    header: HeaderAr,
    hero: HeroAr,
    professional: ProfessionalAr,
    services: ServicesAr,
    notFound: NotFoundAr,
  },
};

i18n
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // Language to use,
    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
