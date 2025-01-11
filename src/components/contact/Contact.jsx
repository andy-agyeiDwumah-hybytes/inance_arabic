// Components
import ContactForm from "../contactForm/ContactForm"
import GoogleMap from "../googleMap/GoogleMap"
// Styles
import styles from "./Contact.module.css"
// i18
import { useTranslation } from "react-i18next"
// React
import { useLocation, useParams } from "react-router"
// Hooks
import useLanguageChange from "../../hooks/useLanguageChange"
// Components
import GetInTouch from "../getInTouch/GetInTouch"
import Footer from "../footer/Footer"

export default function Contact() {
  const { t, i18n } = useTranslation("contact")
  // Add default value to avoid error when shown
  // as a component rather than page
  let { langCode = "" } = useParams()
  const { pathname } = useLocation()

  useLanguageChange(langCode, pathname, `/${langCode}/contact`)

  return (
    <>
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
      {/* Show when pathname matches current page */}
      {pathname === `/${i18n.language}/contact` && (
        <>
          <GetInTouch />
          <Footer />
        </>
      )}
    </>
  );
}
