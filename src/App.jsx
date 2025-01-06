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
import { LanguageContext } from "./context/languageContext"
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

export default function App() {

  const [currentLanguage, setCurrentLanguage] = useState("en")
  const { i18n } = useTranslation()
  
  useEffect(() => {
    const lang = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) ?? "en";
  
    const html = document.documentElement
    if (lang === "en") {
      html.setAttribute("dir", "ltr")
    } else if (lang === "ar") {
      html.setAttribute("dir", "rtl")
    }
  
    i18n.changeLanguage(lang)
    setCurrentLanguage(lang)
  }, [i18n])

  useEffect(() => {
    const html = document.documentElement

   if (currentLanguage === "en") {
     html.setAttribute("dir", "ltr");
   } else if (currentLanguage === "ar") {
     html.setAttribute("dir", "rtl");
   }
  }, [currentLanguage])

  const updateCurrentLanguage = language => {
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(language))
    setCurrentLanguage(language)
  }

  const appContext = {
    currentLanguage,
    updateCurrentLanguage
  };

  return (
    <LanguageContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </LanguageContext.Provider>
  );
}