import { initializeApp } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";

  import { getAuth } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

  import { getFirestore } from
  "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

    const firebaseConfig = {
    apiKey: "AIzaSyDS5YKJqzSKIoIeWX7nRg2RAJKUgesiRUk",
    authDomain: "codestudio-a9124.firebaseapp.com",
    projectId: "codestudio-a9124",
    storageBucket: "codestudio-a9124.firebasestorage.app",
    messagingSenderId: "447264139064",
    appId: "1:447264139064:web:e1a8ebf9dbad2e3ee403cd",
    measurementId: "G-Y1M096K8H0"
    };

  export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyDS5YKJqzSKIoIeWX7nRg2RAJKUgesiRUk",
//   authDomain: "codestudio-a9124.firebaseapp.com",
//   projectId: "codestudio-a9124",
//   storageBucket: "codestudio-a9124.firebasestorage.app",
//   messagingSenderId: "447264139064",
//   appId: "1:447264139064:web:e1a8ebf9dbad2e3ee403cd",
//   measurementId: "G-Y1M096K8H0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);