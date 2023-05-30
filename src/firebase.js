import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDvGShVH4qRbgwzhYh3EPCmOSJCOflN00w",
  authDomain: "cookieclicker-hp.firebaseapp.com",
  projectId: "cookieclicker-hp",
  storageBucket: "cookieclicker-hp.appspot.com",
  messagingSenderId: "498179076271",
  appId: "1:498179076271:web:c9205760ad8f28a6c8645a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
