// React
import { useRef, useState } from "react";
// Firebase
import { firestore } from "../../firebase";
import { addDoc, collection, doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function ContactForm({ styles, t, i18n }) {
  const formRef = useRef()

  const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async e => {
    e.preventDefault()
    // Get data
    const formData = new FormData(formRef.current)
    const name = formData.get("name")
    const phoneNumber = formData.get("phone-number")
    const email = formData.get("email")
    const message = formData.get("message")

    try {
      // Create new user in 'users' collection. Creates or overrides
      await setDoc(doc(firestore, "users", email), {
        email: email,
        name: name,
        phoneNumber: phoneNumber,
        serverTimestamp: serverTimestamp()
      })

      // Send email to mail collection (will create if it does not exist)
      await addDoc(collection(firestore, "mail"), {
        to: ["andydwumah@gmail.com"],
        message: {
          subject: "Inance Contact Form",
          html:
            `<p><strong>Name:</strong> ${name}</p>` +
            `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` +
            `<p><strong>Email:</strong> ${email}</p>` +
            `<p><strong>Message:</strong> ${message}</p>`,
        },
      });
      alert("Your message has been sent successfully!")
    } catch (e) {
      console.error("Error sending email: ", e)
      alert("An error occurred while sending the message.")
    }
    // Reset fields
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
        {/* Override the default behaviour here depending on writing mode */}
        <input
          type="tel"
          dir={i18n.dir() === "ltr" ? "ltr" : "rtl"}
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
          minLength={100}
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
