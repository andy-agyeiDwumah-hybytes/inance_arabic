// Firebase
import {
  setDoc,
  doc,
  serverTimestamp,
  addDoc,
  collection,
} from "firebase/firestore";

const createNewUser = async (firestore, email, name, phoneNumber) => {
  await setDoc(doc(firestore, "users", email), {
    email: email,
    name: name,
    phoneNumber: phoneNumber,
    // Tracks when the server receives an update
    serverTimestamp: serverTimestamp(),
  });
};

const sendEmailToUser = async (
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

export { createNewUser, sendEmailToUser };
