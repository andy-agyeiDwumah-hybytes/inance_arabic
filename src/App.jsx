// React
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router"
import { useEffect, useState } from "react"
// Components
import Layout from "./components/layout/Layout"
import Notfound from "./pages/notfound/Notfound"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
// Pages
import Index from "./pages/index"
// Make JQuery available to entire Project
import * as $ from "jquery";
// i18n
import i18n from "./i18n"
// Context
import { TextDirectionContext } from "./context/textDirectionContext"
// Constants
import { LOCALSTORAGEKEY } from "./constants/Constants"
import { useTranslation } from "react-i18next"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Notfound />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

 const englishOptions = {
   language: "en",
   textDirection: "ltr",
 };

export default function App() {

  const [languageOptions, setLanguageOptions] = useState(englishOptions)
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const langOptions = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) ?? englishOptions;
  
    const html = document.documentElement
    if (langOptions["textDirection"] === "ltr") {
      html.setAttribute("dir", "ltr");
    } else if (langOptions["textDirection"] === "rtl") {
      html.setAttribute("dir", "rtl");
    }
  
    i18n.changeLanguage(langOptions["language"])
    setLanguageOptions(langOptions)
  }, [i18n])

  useEffect(() => {
    const html = document.documentElement;

    if (languageOptions["textDirection"] === "ltr") {
      html.setAttribute("dir", "ltr");
    } else if (languageOptions["textDirection"] === "rtl") {
      html.setAttribute("dir", "rtl");
    }
  }, [languageOptions]);

  const updateLanguageOptions = (language, textDirection) => {
    const updatedOptions = { language: language, textDirection: textDirection }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
    setLanguageOptions(updatedOptions)
  }

  const appContext = {
    languageOptions,
    updateLanguageOptions,
  };

  return (
    <TextDirectionContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </TextDirectionContext.Provider>
  );
}