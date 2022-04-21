import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDDZgzlvHdde_rnaVPa5Aa38gnSL6U-tyw",
  authDomain: "my-react-project-b1781.firebaseapp.com",
  projectId: "my-react-project-b1781",
  storageBucket: "my-react-project-b1781.appspot.com",
  messagingSenderId: "982742280732",
  appId: "1:982742280732:web:b98936faff0155b84b0dd9"
};

const app = initializeApp(firebaseConfig);
export const dbFirebase =  getFirestore(app); 