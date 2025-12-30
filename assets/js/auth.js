import { auth, db } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import {
  doc,
  setDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

window.signInWithGoogle = async function () {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    await setDoc(doc(db, "users", user.uid), {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      lastLogin: new Date(),
      premium: false
    });

    // redirect after login
    window.location.href = "pages/index.html";

  } catch (error) {
    alert("Google Login Failed");
    console.error(error);
  }
};
