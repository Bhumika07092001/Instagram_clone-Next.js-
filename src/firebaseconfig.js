import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBEwxFrkcPUg9zxonN2umIA1Z_E3X1tGP8",
  authDomain: "webapp-1912c.firebaseapp.com",
  databaseURL: "https://webapp-1912c-default-rtdb.firebaseio.com",
  projectId: "webapp-1912c",
  storageBucket: "webapp-1912c.appspot.com",
  messagingSenderId: "637487044305",
  appId: "1:637487044305:web:8408e6e2fb3276cb7ad7f0",
  measurementId: "G-K8MFHV3XSL",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
