// React
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router"
import { useCallback, useState } from "react"
// Components
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
    <>
    {/* Language code is optional */}
    {/* See 'Index.jsx' and custom hook for more details */}
      <Route path="/:langCode?" element={<Index />} />
      <Route path="/:langCode/about" element={<About />} />
      <Route path="/:langCode/services" element={<Services />} />
      <Route path="/:langCode/contact" element={<Contact />} />
      <Route path="*" element={<Notfound />} />
    </>
  )
);

export default function App() {
  // Get language options from local storage
  // If it doesn't exist fallback to english options
  const getInitialLanguageOptions = () => {
    let localStorageLangOptionSet = JSON.parse(localStorage.getItem(LOCALSTORAGEKEY))
    if (localStorageLangOptionSet) {
      return localStorageLangOptionSet
    }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(ENGLISHLANGUAGEOPTIONS))
    return ENGLISHLANGUAGEOPTIONS
  }
  const [languageOptions, setLanguageOptions] = useState(getInitialLanguageOptions)

  // wrap in useCallback to ensure it remains stable on rerenders
  const updateLanguageOptions = useCallback((language, textDirection) => {
    // Store new language options in local storage
    const updatedOptions = { language: language, textDirection: textDirection }
    localStorage.setItem(LOCALSTORAGEKEY, JSON.stringify(updatedOptions))
    // Update current language options
    setLanguageOptions(updatedOptions)
    console.log("language changed")
  }, [])

  const appContext = {
    languageOptions,
    setLanguageOptions,
    updateLanguageOptions,
  }

  return (
    <LanguageContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </LanguageContext.Provider>
  )
}
