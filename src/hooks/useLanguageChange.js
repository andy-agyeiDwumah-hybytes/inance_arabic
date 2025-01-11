// React
import { useContext, useEffect } from "react";
import { useNavigate, useNavigationType } from "react-router";
// Languages
import { languages } from "../languages/languageCodes";
// Constants
import {
  LOCALSTORAGEKEY,
} from "../constants/Constants";
// Context
import { LanguageContext } from "../context/languageContext";
// i18
import { useTranslation } from "react-i18next";

export default function useLanguageChange(langCode, pathname, currentPage) {
  const { languageOptions, setLanguageOptions } = useContext(LanguageContext);
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const navigationType = useNavigationType()

  useEffect(() => {
    // Only run hook if pathname matches current page
    // Some components (i.e., about, services, contact) are also pages
    if (pathname !== currentPage) return;

    // Check if language code in URL is supported
    const languageCodeExists = languages.find(
      val => val.languageCode === langCode
    );

    // langCode === "home" - when pathname is "/"
    if (languageCodeExists || langCode === "home") {
      // Page refresh or back/forward navigation detected
      if (navigationType === "POP") {
        console.log("update page: custom hook");
        if (langCode === "home") {
          console.log("No lang code provided. navigating to language home page");
          // Value comes from local storage (see App.jsx)
          navigate(`/${languageOptions.language}`);
          i18n.changeLanguage(languageOptions.language);
          document.documentElement.setAttribute("dir", languageOptions.textDirection);
        }
        else if (languageOptions.language !== langCode) {
          console.log("Local storage key not equal to lang code")
          // Update local storage and language state
          const updatedOptions = { language: langCode, textDirection: languageCodeExists.writingMode }
          localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
          setLanguageOptions({
            language: languageCodeExists.languageCode,
            textDirection: languageCodeExists.writingMode,
          });
          i18n.changeLanguage(langCode);
          document.documentElement.setAttribute("dir", languageCodeExists.writingMode);
        } else {
          console.log("Local storage key equal to lang code.");
          i18n.changeLanguage(languageCodeExists.languageCode);
          document.documentElement.setAttribute("dir", languageCodeExists.writingMode);
        }
      } else {
        // When a link is clicked - do not update state, local storage, or change language
        console.log("no update: custom hook");
      }
    } else {
      // Language code does not exist - navigate back to language home page found in local storage
      navigate(`/${languageOptions.language}`);
      i18n.changeLanguage(languageOptions.language);
      console.log("language code doesn't exist")
    }
  }, [i18n, langCode, pathname, currentPage, navigate, navigationType, setLanguageOptions, languageOptions])
}
