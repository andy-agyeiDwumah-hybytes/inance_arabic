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
// Utils
import EnsureNoTrailingSlash from "./utils/routeUtils"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Language code is optional */}
      {/* See 'Index.jsx' and custom hook for more details */}
      <Route
        path="/:langCode?"
        element={
          <EnsureNoTrailingSlash>
            <Index />
          </EnsureNoTrailingSlash>
        }
      />
      <Route
        path="/:langCode/about"
        element={
          <EnsureNoTrailingSlash>
            <About />
          </EnsureNoTrailingSlash>
        }
      />
      <Route
        path="/:langCode/services"
        element={
          <EnsureNoTrailingSlash>
            <Services />
          </EnsureNoTrailingSlash>
        }
      />
      <Route
        path="/:langCode/contact"
        element={
          <EnsureNoTrailingSlash>
            <Contact />
          </EnsureNoTrailingSlash>
        }
      />
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

  // Prevents scrollbar flicker
  const handleLinkClick = useCallback((e, pathname, homePage) => {
    if (pathname === homePage) {
      e.preventDefault()
    }
  }, [])

  const appContext = {
    languageOptions,
    setLanguageOptions,
    handleLinkClick
  }

  return (
    <LanguageContext.Provider value={appContext}>
      <RouterProvider router={router} />
    </LanguageContext.Provider>
  );
}
