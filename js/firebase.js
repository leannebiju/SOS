import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyBUF-1rQFdXfaxQeFy95Ul1t8v_079bXP4",
  authDomain: "tinker-8fe52.firebaseapp.com",
  databaseURL: "https://tinker-8fe52-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "tinker-8fe52",
  storageBucket: "tinker-8fe52.firebasestorage.app",
  messagingSenderId: "119295870853",
  appId: "1:119295870853:web:fe86bc1533dbc6123766ec"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
