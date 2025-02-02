// Firebase
import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
  updateDoc,
} from "firebase/firestore";
import { firestore } from "../firebase";
// Utils
import { checkDateDifference } from "./dateUtils";
// React toastify
import { toast } from "react-toastify";

const createNewUser = async (firestore, email, name, phoneNumber, message) => {
  await setDoc(doc(firestore, "users", email), {
    email: email,
    name: name,
    phoneNumber: phoneNumber,
    message: message,
    // Tracks when the server receives an update
    timestamp: serverTimestamp(),
  });
};

const sendUserMessageToMe = async (
  firestore,
  name,
  phoneNumber,
  email,
  message
) => {
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
};

const updateUserInfo = async (docRef, userMessage) => {
  // Update last time a user sent a message and store latest message
  await updateDoc(docRef, {
    timestamp: serverTimestamp(),
    message: userMessage,
  });
};

const manageSendMessage = async (
  t,
  docSnap,
  docRef,
  userName,
  userPhoneNumber,
  userEmail,
  userMessage
) => {
  // Check if user exists within database
  if (docSnap.exists()) {
    // Store date when message was submitted
    const serverTimestamp = new Date(
      docSnap.data()["timestamp"].toDate()
    ).toLocaleDateString("en-US");
    const hasBeenThreeDaysOrMoreSinceLastEmail =
      checkDateDifference(serverTimestamp);
    if (!hasBeenThreeDaysOrMoreSinceLastEmail) {
      toast.info(t("formSubmittedRecently"));
    } else {
      try {
        await updateUserInfo(docRef, userMessage);
        await sendUserMessageToMe(
          firestore,
          userName,
          userPhoneNumber,
          userEmail,
          userMessage
        );
        toast.success(t("messageSentSuccesfully"));
      } catch (e) {
        console.error(e);
        toast.error(t("errorProcessingMessage"));
      }
    }
    // User does not exist...
  } else {
    try {
      await createNewUser(
        firestore,
        userEmail,
        userName,
        userPhoneNumber,
        userMessage
      );
      await sendUserMessageToMe(
        firestore,
        userName,
        userPhoneNumber,
        userEmail,
        userMessage
      );
      toast.success(t("messageSentSuccesfully"));
    } catch (e) {
      console.error(e);
      toast.error(t("errorProcessingMessage"));
    }
  }
};

export { createNewUser, sendUserMessageToMe, manageSendMessage };
