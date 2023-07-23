import ForumText from "./ForumText"
import InputBox from "./InputBox"
import { useEffect, useState } from "react"
import io from "socket.io-client"
const socket = io.connect("http://localhost:3000")

function ForumPage() {
  const [chats, setChats] = useState([])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChats((previousChats) => [...previousChats, data.message])
      console.log(data.message)
    })
  }, [socket])

  const handleSendMessage = (message) => {
    console.log(chats)
    socket.emit("send_message", { message: message })
    setChats((previousChats) => [...previousChats, message])
    console.log(chats)
  }

  const renderedChats = chats.map((chat, index) => {
    return (
      <>
        <ForumText key={index} message={chat} />
      </>
    )
  })

  return (
    <>
      <div className="w-full min-h-[90vh] flex bg-gray-100 my-4 flex-col bg-chat-pattern md:bg-chat-pattern-desktop bg-cover bg-no-repeat bg-center">
        <div className="w-full mx-auto h-full  rounded-md px-2 py-5 flex flex-col justify-start gap-4 grow">
          {renderedChats}
        </div>
        <InputBox handleSendMessage={handleSendMessage} />
      </div>
    </>
  )
}

export default ForumPage
