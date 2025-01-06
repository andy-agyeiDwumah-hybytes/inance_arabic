// Components
import ContactForm from "../contactForm/ContactForm";
import GoogleMap from "../googleMap/GoogleMap";
// Styles
import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section
      className="contact_section layout_padding"
      aria-labelledby="contact-us-heading"
    >
      <div className="container">
        <div className="heading_container">
          <h2 id="contact-us-heading">Contact Us</h2>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ContactForm styles={styles} />
          </div>
          <div className="col-md-6">
            <GoogleMap styles={styles} />
          </div>
        </div>
      </div>
    </section>
  );
}
