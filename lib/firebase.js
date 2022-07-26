import { initializeApp, getApp, getApps, FirebaseApp } from 'firebase/app'
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAUP4gIDZZQBd5OGI4Gf4KMKYj1t1EBrcI",
  authDomain: "projetovidamendes-469b7.firebaseapp.com",
  projectId: "projetovidamendes-469b7",
  storageBucket: "projetovidamendes-469b7.appspot.com",
  messagingSenderId: "746849240192",
  appId: "1:746849240192:web:7ef2c6d51e02cbb2885265",
}

let app = FirebaseApp

if ( getApps.length ) {
  app = getApp()
} else {
  app = initializeApp(firebaseConfig)
}

export const auth = getAuth(app)