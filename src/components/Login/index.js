import React from 'react'
import { auth, provider } from '../../services/Firebase'
import * as C from "./Styles"

const Loguin = () => {

    function hendleSingin() {
        auth.signInWithPopup(provider).catch(alert) // signInWithPopup = janela pup-up..  caso erro da um alert
    }

  return (
    <C.Container>
        <C.Button onClick={hendleSingin}>Loguin Com O Google</C.Button>
    </C.Container>
  )
}

export default Loguin