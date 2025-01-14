// Components
import Services from "../../components/services/Services"
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import CanonicalTags from "../../components/canonicalTags/CanonicalTags"
// React
import { useLocation, useParams } from "react-router"
// i18
import { useTranslation } from "react-i18next"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"

export default function ServicesPage() {
  // Add default value to avoid error when shown
  // as a component rather than page
  let { langCode = "" } = useParams()
  const { pathname } = useLocation()
  const { t, i18n } = useTranslation("services")
  let languageCode = i18n.language
  let currentPage = `/${languageCode}/services`

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
