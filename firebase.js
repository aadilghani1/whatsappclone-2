import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDUdvOFSDBu16E4L2DEN8Marl035BFsGmo",
  authDomain: "whatsapp-2-64e44.firebaseapp.com",
  projectId: "whatsapp-2-64e44",
  storageBucket: "whatsapp-2-64e44.appspot.com",
  messagingSenderId: "298964244403",
  appId: "1:298964244403:web:397ef01fe0a518c96e5dc6",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
