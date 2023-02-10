import React from 'react'
import * as C from "./styles"
import SidbarChats from '../SidbarChats'
import SidbarHeader from '../SidbarHeader'

const Sidbar = ({setUserChat, userChat}) => {
  return (
    <C.Container>
        <SidbarHeader setUserChat={setUserChat}/>
        <SidbarChats setUserChat={setUserChat} userChat={userChat}/>
    </C.Container>
  )
}

export default Sidbar