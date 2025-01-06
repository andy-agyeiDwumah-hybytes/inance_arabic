// Components
import ContactForm from "../contactForm/ContactForm";
import GoogleMap from "../googleMap/GoogleMap";
// Styles
import styles from "./Contact.module.css"
// i18
import { useTranslation } from "react-i18next";

export default function Contact() {

  const [t] = useTranslation("contact")

  return (
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
  );
}
