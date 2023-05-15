import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3A8spNsNn04DsxcLHTtzmqxxjaAWmlvg",
  authDomain: "cookie-clicker-hp.firebaseapp.com",
  projectId: "cookie-clicker-hp",
  storageBucket: "cookie-clicker-hp.appspot.com",
  messagingSenderId: "495084337250",
  appId: "1:495084337250:web:3f9a6b2c7dcc40a430f93b",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
