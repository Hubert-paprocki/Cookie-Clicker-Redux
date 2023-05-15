import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyDvGShVH4qRbgwzhYh3EPCmOSJCOflN00w",
//   authDomain: "cookieclicker-hp.firebaseapp.com",
//   projectId: "cookieclicker-hp",
//   storageBucket: "cookieclicker-hp.appspot.com",
//   messagingSenderId: "498179076271",
//   appId: "1:498179076271:web:c9205760ad8f28a6c8645a",
// };
const firebaseConfig = {
  apiKey: "AIzaSyDGFWMYylS8KWCKyjT_KcSh_cOUv3mvC_E",
  authDomain: "test-95906.firebaseapp.com",
  projectId: "test-95906",
  storageBucket: "test-95906.appspot.com",
  messagingSenderId: "263337393029",
  appId: "1:263337393029:web:bdc5df3adcde106551e2ec",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
