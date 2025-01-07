// React
import { useRef, useState } from "react";

export default function ContactForm({ styles, t }) {

  const formRef = useRef()

  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    const name = formData.get("name")
    const phoneNumber = formData.get("phone-number")
    const email = formData.get("email")
    const message = formData.get("message")

    console.log(`Name: ${name} ` +
      `\nPhone number: ${phoneNumber}` +
      `\nEmail: ${email} ` +
      `\nMessage: ${message}`) 
    alert("Form was successfully submitted! Check the console.");
  
    setName("")
    setPhoneNumber("")
    setEmail("")
    setMessage("")
  }

  return (
    <form aria-label="Contact" onSubmit={handleSubmit} ref={formRef}>
      <div>
        <input
          type="text"
          placeholder={t("namePlaceholder")}
          className={styles.input}
          aria-label="Name"
          id="name"
          name="name"
          autoComplete="name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>
      <div>
        {/* I would need to override the default behaviour here depending on language */}
        <input
          type="tel"
          placeholder={t("phonePlaceholder")}
          className={styles.input}
          aria-label="Phone Number"
          id="phone-number"
          autoComplete="tel"
          name="phone-number"
          value={phoneNumber}
          onChange={e => setPhoneNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <input
          type="email"
          placeholder={t("emailPlaceholder")}
          className={styles.input}
          aria-label="Email"
          id="email"
          autoComplete="email"
          name="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder={t("messagePlaceholder")}
          id="message"
          className={styles.messageBox}
          aria-label="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <div className="d-flex ">
        <button className={styles.sendBtn} type="submit">
          {t("sendButtonText")}
        </button>
      </div>
    </form>
  );
}
