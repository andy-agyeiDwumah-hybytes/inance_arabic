// React
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router"
import { useEffect, useState } from "react"
// Components
import Layout from "./components/layout/Layout"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
// Pages
import Notfound from "./pages/notfound/Notfound"
import Index from "./pages/index"
// Make JQuery available to entire Project
import * as $ from "jquery"
// i18n
import i18n from "./i18n"
import { useTranslation } from "react-i18next"
// Context
import { LanguageContext } from "./context/languageContext"
// Constants
import { LOCALSTORAGEKEY } from "./constants/Constants"

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

const englishLanguageOptions = {
  language: "en",
  textDirection: "ltr",
}

export default function App() {
  const [languageOptions, setLanguageOptions] = useState(
    englishLanguageOptions
  )
  // Get language updater function
  const { i18n } = useTranslation()

  useEffect(() => {
    // Default to english language options if language options not set in local storage
    const langOptions =
      JSON.parse(localStorage.getItem(LOCALSTORAGEKEY)) ??
      englishLanguageOptions

    const html = document.documentElement
    // Check language text direction and update HTML 'dir' attribute
    if (langOptions["textDirection"] === "ltr") {
      html.setAttribute("dir", "ltr")
    } else if (langOptions["textDirection"] === "rtl") {
      html.setAttribute("dir", "rtl")
    }

    // Update language
    i18n.changeLanguage(langOptions["language"])
    setLanguageOptions(langOptions)
  }, [i18n])

  useEffect(() => {
    // Updates text direction when user changes language
    const html = document.documentElement

    if (languageOptions["textDirection"] === "ltr") {
      html.setAttribute("dir", "ltr")
    } else if (languageOptions["textDirection"] === "rtl") {
      html.setAttribute("dir", "rtl")
    }
  }, [languageOptions])

  const updateLanguageOptions = (language, textDirection) => {
    // Store new language options in local storage
    const updatedOptions = { language: language, textDirection: textDirection }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
    setLanguageOptions(updatedOptions)
  }

  const appContext = {
    languageOptions,
    updateLanguageOptions,
  }

  return (
    <LanguageContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </LanguageContext.Provider>
  )
}
