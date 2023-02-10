import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBRuCCaTceEYY1GZsYJiRfJ9PMm2G3XIhg",
    authDomain: "chat-app-49250.firebaseapp.com",
    projectId: "chat-app-49250",
    storageBucket: "chat-app-49250.appspot.com",
    messagingSenderId: "400187068830",
    appId: "1:400187068830:web:7bf115f66897768521468f"
  };

  const app = firebase.initializeApp(firebaseConfig)

  const db = app.firestore()
  const auth = app.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export {db, auth, provider}