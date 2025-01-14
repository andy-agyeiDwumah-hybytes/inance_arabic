// Components
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
import Header from "../../components/header/Header"
import CanonicalTags from "../../components/canonicalTags/CanonicalTags"
import Contact from "../../components/contact/Contact"
// i18
import { useTranslation } from "react-i18next"
// React
import { useLocation, useParams } from "react-router"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"

export default function ContactPage() {
  const { t, i18n } = useTranslation("contact")
  let { langCode } = useParams()
  const { pathname } = useLocation()
  let currentPage = `/${i18n.language}/contact`

  useLanguageChange(langCode, pathname, `/${langCode}/contact`)

  return (
    <>
      {pathname === currentPage ? (
        <>
          <CanonicalTags pagePath={currentPage} extension="contact" />
          <div className="hero_area">
            <Header />
          </div>
          <main>
            <Contact t={t} />
          </main>
          <GetInTouch />
          <Footer />
        </>
      ) : (
        // Do not show main tag when pathname doesn't match current page
        <Contact t={t} />
      )}
    </>
  )
}
