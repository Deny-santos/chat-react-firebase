import React, { useEffect, useState} from "react";
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db } from "./services/Firebase"
import Login from "./components/Login";
import Loading from "./components/Loanding";
import Sidbar from "./components/Sidbar";
import * as C from "./styles/app"

function App() {

  const [user, loading] = useAuthState(auth)
  const [userChat , setUserChat  ] = useState(null)

  useEffect(() => {
    if(user) {
      db.collection("user").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL
      })
    }
  }, [user])

  if(loading) return <Loading/>

  if(!user) return <Login/>

  return (
    <C.Container>
      <Sidbar setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
}

export default App;
