// Components
import Services from "../../components/services/Services"
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import CanonicalTags from "../../components/canonicalTags/CanonicalTags"
// React
import { useLocation, useParams } from "react-router"
import { useEffect } from "react"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// React Google Analytics 4
import ReactGA from "react-ga4"

export default function ServicesPage() {
  let { langCode } = useParams()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation("services")
  let languageCode = i18n.language
  let currentPage = `/${languageCode}/services`

  useEffect(() => {
    if (pathname === currentPage) {
      // Pass GA4 measurement ID, allows library to send data to my GA account
      ReactGA.initialize(import.meta.env.VITE_GOOGLE_MEASUREMENT_ID)
      // sends a 'pageview' event (page load or user navigation)
      ReactGA.send({
        hitType: "pageview",
        page: currentPage,
        title: `Services Page - ${languageCode}`,
      })
    }
  }, [currentPage, pathname, languageCode])

  useLanguageChange(langCode, pathname, `/${langCode}/services`)

  return (
    <>
      {pathname === currentPage ? (
        <>
          <CanonicalTags pagePath={currentPage} extension="services" />
          <div className="hero_area">
            <Header />
          </div>
          <main>
            <Services t={t} languageCode={languageCode} />
          </main>
          <GetInTouch />
          <Footer />
        </>
      ) : (
        // Do not show main tag when pathname doesn't match current page
        <Services t={t} languageCode={languageCode} />
      )}
    </>
  )
}
