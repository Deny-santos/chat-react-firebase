import React from 'react'
import { MdDonutLarge, MdChat, MdMoreVert } from "react-icons/md"
import * as C from "./styles"
import * as EmailValidator from "email-validator"
import { auth, db } from "../../services/Firebase"
import { useCollection } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"

const SidbarHeader = ({ setUserChat }) => {

    const [user] = useAuthState(auth) //ver se ta logado
    const refchat = db
        .collection("chats")
        .where("users", "array-contains", user.email)

    const [chatsSnapshot] = useCollection(refchat)

    const handleCreateChat = () => {
        const emailInput = prompt("escreva o email desejado")

        if(!emailInput) return

        if(!EmailValidator.validate(emailInput)) {
            return alert("email invalido")
        }  else if (emailInput === user.email) {
            return alert("insira um email diferente do seu")
        } else if(chatExists(emailInput)){
            return alert("o chat já existe")
        }

        db.collection("chats").add({users: [user.email, emailInput]})
    }

    const chatExists = (emailChat) => {
        return !!chatsSnapshot?.docs.find(
            (chat) => chat.data().users.find((user) => user === emailChat)?.length > 0
        )
    }

    return (
    <C.Container>
        <C.Avatar src={user?.photoURL} onClick={() => [auth.signOut(), setUserChat(null)]}/>

        <C.Options>
            <MdDonutLarge/>
            <MdChat onClick={handleCreateChat} />
            <MdMoreVert />
        </C.Options>
    </C.Container>
  )
}

export default SidbarHeader