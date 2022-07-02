import { initializeApp } from "firebase/app"
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAiJDRsWzRhnQuYoG5cbWYSo88q_1usDIc",
  authDomain: "clone-project-be39f.firebaseapp.com",
  projectId: "clone-project-be39f",
  storageBucket: "clone-project-be39f.appspot.com",
  messagingSenderId: "873090848963",
  appId: "1:873090848963:web:6b404400d2a328b3282a76",
  measurementId: "G-945N8QDEJE"
}

// Initialize Firebase

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth }