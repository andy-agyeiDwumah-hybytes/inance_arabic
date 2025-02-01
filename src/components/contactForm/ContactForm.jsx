// React
import { useRef, useState } from "react"
// Firebase
import { firestore } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"
// Utils
import { manageSendMessage } from "../../utils/firebaseUtils"
// React toastify
import { toast, ToastContainer } from "react-toastify"

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
    const userName = formData.get("name").trim()
    const userPhoneNumber = formData.get("phone-number").trim()
    const userEmail = formData.get("email").trim()
    const userMessage = formData.get("message").trim()

    // Check if any fields are empty
    if (!userName || !userPhoneNumber || !userEmail || !userMessage) {
      toast.error(t("emptyFields"))
      return
    }

    // Get document reference
    const docRef = doc(firestore, "users", userEmail)
    const docSnap = await getDoc(docRef)

    manageSendMessage(t, docSnap, userName, userPhoneNumber, userEmail, userMessage)
  
    // Reset fields
    setName("")
    setPhoneNumber("")
    setEmail("")
    setMessage("")
  }

  return (
    <>
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
            inputMode="tel"
            pattern="^\+?[0-9]{7,15}$"
            dir={i18n.dir() === "ltr" ? "ltr" : "rtl"}
            placeholder={t("phonePlaceholder")}
            className={styles.input}
            aria-label="Phone Number"
            id="phone-number"
            name="phone-number"
            value={phoneNumber}
            onChange={e => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <input
            type="email"
            inputMode="email"
            placeholder={t("emailPlaceholder")}
            className={styles.input}
            aria-label="Email"
            id="email"
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
      <ToastContainer rtl={i18n.dir() === "rtl"} />
    </>
  );
}
