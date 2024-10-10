import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config object
const config = {
  apiKey: "AIzaSyBi2poxSsL7I8UQoeH1JrD5dbFKhA13t54",
  authDomain: "resume-279909.firebaseapp.com",
  projectId: "resume-279909",
  storageBucket: "resume-279909.appspot.com",
  messagingSenderId: "5618863484",
  appId: "1:5618863484:web:9a129b5257981dc413a8f9",
  measurementId: "G-D9DFPW1H91",
};

const app = initializeApp(config);

const store = getFirestore(app);

export { app, store };
