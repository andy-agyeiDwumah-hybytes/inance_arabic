// Components
import About from "../../components/about/About"
import Client from "../../components/client/Client"
import Contact from "../../components/contact/Contact"
import Feature from "../../components/feature/Feature"
import Professional from "../../components/professional/Professional"
import Services from "../../components/services/Services"
// React
import { useLocation, useParams } from "react-router"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// Languages
import { languages } from "../../languages/languageCodes"

export default function Index() {
  // Set default to below if langCode param not provided
  // E.g., a user goes to pathname "/"
  let { langCode = "notfound" } = useParams()
  const { pathname } = useLocation()

  // Check if language code in param is supported by website
  const languageCodeExists = languages.find(
    val => val.languageCode === langCode
  )
  // If supported get language home page URL
  // Else, set URL to pathname entered by user
  const currentPage = languageCodeExists ? `/${langCode}` : pathname

  useLanguageChange(langCode, pathname, currentPage)

  return (
    <>
      <Feature />
      <About />
      <Professional />
      <Services />
      <Client />
      <Contact />
    </>
  )
}
