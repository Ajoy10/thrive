import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9fhF7qqAutdnHUbaDGY_TngjoD_ggQak",
  authDomain: "hackathon-de00f.firebaseapp.com",
  projectId: "hackathon-de00f",
  storageBucket: "hackathon-de00f.appspot.com",
  messagingSenderId: "235102414624",
  appId: "1:235102414624:web:2e529a2337ee44b0f35945",
  measurementId: "G-RDC4PFPXED"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
