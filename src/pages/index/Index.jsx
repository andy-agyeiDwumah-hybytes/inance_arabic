// React
import React, { Suspense, useEffect, useState } from "react"
import { useLocation, useParams } from "react-router"
// Components
import About from "../../components/about/About"
import Client from "../../components/client/Client"
import Feature from "../../components/feature/Feature"
import Professional from "../../components/professional/Professional"
import Services from "../../components/services/Services"
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
// import Contact from "../../components/contact/Contact"
// Lazy load Contact component (Fixes google map bug)
const Contact = React.lazy(() => import("../../components/contact/Contact"))
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
import useOnScreen from "../../hooks/useOnScreen"
// i18
import { useTranslation } from "react-i18next"

export default function Index() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  // Add default value when user doesn't provide language code (see custom hook)
  let { langCode = "home" } = useParams()
  // Start loading Contact component when at least xx% of it is visible on the screen
  const [contactRef, isContactVisible] = useOnScreen({ threshold: 0.25 })
  // Tracks whether the Contact component has already been loaded
  // Remain in DOM after it has loaded
  const [hasContactLoaded, setHasContactLoaded] = useState(false)

  // Load the Contact component only once when it first becomes visible
  useEffect(() => {
    if (isContactVisible && !hasContactLoaded) {
      setHasContactLoaded(true)
    }
  }, [isContactVisible, hasContactLoaded])

  useLanguageChange(langCode, pathname, pathname)

  return (
    <>
      <div className="hero_area">
        <Header />
      </div>
      <main>
        <Feature />
        <About />
        <Professional />
        <Services />
        <Client />
        {/* <Contact /> */}
        <div ref={contactRef}>
          {hasContactLoaded && (
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          )}
        </div>
      </main>
      {/* Show when pathname matches current page */}
      {pathname === `/${i18n.language}` && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  )
}
