// React
import { useRef, useState } from "react"
// Firebase
import { firestore } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"
// Utils
import { checkDateDifference } from "../../utils/dateUtils"
import { sendEmailToUser, createNewUser } from "../../utils/firebaseUtils"

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

    // Get document reference
    const docRef = doc(firestore, "users", email)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const serverTimestamp = new Date(
        docSnap.data()["serverTimestamp"].toDate()
      ).toLocaleDateString("en-US")
      const hasBeenThreeDaysOrMoreSinceLastEmail =
        checkDateDifference(serverTimestamp)
      if (!hasBeenThreeDaysOrMoreSinceLastEmail) {
        alert(
          "You've already submitted a request. Please wait up to 3 days " +
            "before sending another message. We appreciate your patience!"
        )
      } else {
        await sendEmailToUser(firestore, name, phoneNumber, email, message)
      }
    } else {
      try {
        await createNewUser(firestore, email, name, phoneNumber)
        await sendEmailToUser(firestore, name, phoneNumber, email, message)
        alert(
          "Form successfully submitted! We will get in touch with " +
            "you within 3 days. Please wait before submitting another request."
        )
      } catch (e) {
        console.error("Error sending email: ", e)
        alert("An error occurred while sending the message.")
      }
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
  )
}
