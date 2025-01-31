// React
import { useRef, useState } from "react"
// Firebase
import { firestore } from "../../firebase"
import { doc, getDoc } from "firebase/firestore"
// Utils
import { checkDateDifference } from "../../utils/dateUtils"
import { sendUserMessageToMe, createNewUser } from "../../utils/firebaseUtils"
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
      alert("Please provide values for all fields")
      return
    }

    // Get document reference
    const docRef = doc(firestore, "users", userEmail)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const serverTimestamp = new Date(
        docSnap.data()["serverTimestamp"].toDate()
      ).toLocaleDateString("en-US")
      const hasBeenThreeDaysOrMoreSinceLastEmail =
        checkDateDifference(serverTimestamp)
      if (!hasBeenThreeDaysOrMoreSinceLastEmail) {
        toast.info(
          "You've recently submitted a message. Please wait up to three days " +
            "before sending another one. We appreciate your patience!"
        )
      } else {
        try {
          await sendUserMessageToMe(
            firestore,
            userName,
            userPhoneNumber,
            userEmail,
            userMessage
          )
        } catch (e) {
          console.error(e)
          toast.error(
            "An error occurred while processing your message. Please try again later."
          );
        }
      }
    } else {
      try {
        await createNewUser(firestore, userEmail, userName, userPhoneNumber)
        await sendUserMessageToMe(
          firestore,
          userName,
          userPhoneNumber,
          userEmail,
          userMessage
        )
        toast.success(
          "Form successfully submitted! We will get in touch with " +
            "you within three days. Please wait three days before submitting another message."
        )
      } catch (e) {
        console.error(e)
        toast.error("An error occurred while processing your message. Please try again later.")
      }
    }
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
      <ToastContainer rtl={i18n.dir() === "rtl"} />
    </>
  );
}
