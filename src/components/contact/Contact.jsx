// Components
import ContactForm from "../contactForm/ContactForm"
import GoogleMap from "../googleMap/GoogleMap"
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"
import Header from "../header/Header"
import CanonicalTags from "../canonicalTags/CanonicalTags"
// Styles
import styles from "./Contact.module.css"
// i18
import { useTranslation } from "react-i18next"
// React
import { useLocation, useParams } from "react-router"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"

export default function Contact() {
  const { t, i18n } = useTranslation("contact")
  // Add default value to avoid error when shown
  // as a component rather than page
  let { langCode = "" } = useParams()
  const { pathname } = useLocation()
  let currentPage = `/${i18n.language}/contact`

  useLanguageChange(langCode, pathname, `/${langCode}/contact`)

  return (
    <>
      {pathname === currentPage && (
        <>
          <CanonicalTags
            pagePath={currentPage}
            extension="contact"
          />
          <div className="hero_area">
            <Header />
          </div>
        </>
      )}
      <section
        className="contact_section layout_padding"
        aria-labelledby="contact-us-heading"
      >
        <div className="container">
          <div className="heading_container">
            <h2 id="contact-us-heading">{t("heading")}</h2>
          </div>
          <div className="row">
            <div className="col-md-6">
              <ContactForm styles={styles} t={t} />
            </div>
            <div className="col-md-6">
              <GoogleMap styles={styles} />
            </div>
          </div>
        </div>
      </section>
      {pathname === currentPage && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  );
}
