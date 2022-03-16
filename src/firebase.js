import firebase from "firebase/app";
import "firebase/auth";

//Inicijalizacija ovih osnova poslije project overview i kreiaranja ovih stvari
const app = firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});

export const auth = app.auth(); //Za koristenje ovih inside elemenata (apiKey,domain itd)
export default app; //trebat ce nam?
