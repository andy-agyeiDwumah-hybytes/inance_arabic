// Components
import About from "../../components/about/About"
import Client from "../../components/client/Client"
import Contact from "../../components/contact/Contact"
import Feature from "../../components/feature/Feature"
import Professional from "../../components/professional/Professional"
import Services from "../../components/services/Services"
import GetInTouch from "../../components/getInTouch/GetInTouch"
import Footer from "../../components/footer/Footer"
// React
import { useLocation, useParams } from "react-router"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// i18
import { useTranslation } from "react-i18next"

export default function Index() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  // Add default value when user doesn't provide language code (see custom hook)
  let { langCode = "home" } = useParams()

  useLanguageChange(langCode, pathname, pathname)

  return (
    <>
      <Feature />
      <About />
      <Professional />
      <Services />
      <Client />
      <Contact />
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
