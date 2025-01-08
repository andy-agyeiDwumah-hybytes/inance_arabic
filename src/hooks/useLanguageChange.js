// React
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
// Languages
import { languages } from "../languages/languageCodes";
// Constants
import {
  LOCALSTORAGEKEY,
  ENGLISHLANGUAGEOPTIONS,
} from "../constants/Constants";
// Context
import { LanguageContext } from "../context/languageContext";
// i18
import { useTranslation } from "react-i18next";

export default function useLanguageChange(langCode, pathname, currentPage) {
  const { updateLanguageOptions } = useContext(LanguageContext);
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    // Only run hook if pathname matches current page
    // Some components (i.e., about, services, contact) are also pages
    if (pathname !== currentPage) return;

    // Check if language code in URL is supported
    const languageCodeExists = languages.find(
      val => val.languageCode === langCode
    );

    if (languageCodeExists) {
      // console.log("language code exists");
      // Update language and local storage
      i18n.changeLanguage(languageCodeExists.languageCode);
      updateLanguageOptions(
        languageCodeExists.languageCode,
        languageCodeExists.writingMode
      );
    } else {
      // console.log("language code doesn't exist");
      // Retrieve current language code in local storage
      // If not provided, fallback to English language options
      const localStorageLangOptions =
        JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) ??
        ENGLISHLANGUAGEOPTIONS;

      const languageCode = localStorageLangOptions.language;

      i18n.changeLanguage(languageCode);
      updateLanguageOptions(
        languageCode,
        localStorageLangOptions.textDirection
      );
      // Navigate to language home page
      navigate(`/${languageCode}`);
    }
  }, [i18n, langCode, pathname, currentPage]);

  return null;
}
