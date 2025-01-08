// React
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router"
import { useCallback, useEffect, useState } from "react"
// Components
import Layout from "./components/layout/Layout"
import About from "./components/about/About"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
// Pages
import Notfound from "./pages/notfound/Notfound"
import Index from "./pages/index"
// Make JQuery available to entire project
import * as $ from "jquery"
// i18n
import i18n from "./i18n"
// Context
import { LanguageContext } from "./context/languageContext"
// Constants
import { LOCALSTORAGEKEY, ENGLISHLANGUAGEOPTIONS } from "./constants/Constants"

const router = createBrowserRouter(
  createRoutesFromElements(
    // Language code is optional
    // See 'Index.jsx' and custom hook for more details
    <Route path="/:langCode?" element={<Layout />} errorElement={<Notfound />}>
      <Route index element={<Index />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
)

export default function App() {
  // Set default to english language
  const [languageOptions, setLanguageOptions] = useState(
    ENGLISHLANGUAGEOPTIONS
  )

  // Updates text direction for website when user changes language
  useEffect(() => {
    const html = document.documentElement

    if (languageOptions["textDirection"] === "ltr") {
      html.setAttribute("dir", "ltr")
    } else if (languageOptions["textDirection"] === "rtl") {
      html.setAttribute("dir", "rtl")
    }
  }, [languageOptions])

  // Important: wrap in useCallback to ensure it remains stable on rerenders
  // Function is created on every render
  const updateLanguageOptions = useCallback((language, textDirection) => {
    // Store new language options in local storage
    const updatedOptions = { language: language, textDirection: textDirection }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
    // Update current language options
    setLanguageOptions(updatedOptions)
  }, [])

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
