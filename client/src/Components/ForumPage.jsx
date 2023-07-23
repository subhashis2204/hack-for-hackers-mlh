import UserText from "./ForumText"
import InputBox from "./InputBox"
import { useEffect, useState } from "react"
import io from "socket.io-client"
import ReceivedText from "./ReceivedText"
const socket = io.connect("http://localhost:3000")

function ForumPage() {
  const [chats, setChats] = useState([])

  useEffect(() => {
    const data = {
      role: "server",
      message: "welcome to the DevConnect Forum",
    }

    setChats((previousChats) => [...previousChats, data])
  }, [])

  useEffect(() => {
    socket.on("receive_message", (data) => {
      const msg = { role: "receiver", message: data.message }

      setChats((previousChats) => [...previousChats, msg])
    })
  }, [socket])

  const handleSendMessage = (message) => {
    const msg = { role: "sender", message: message }

    socket.emit("send_message", msg)
    setChats((previousChats) => [...previousChats, msg])
  }

  const renderedChats = chats.map((chat, index) => {
    return (
      <>
        {chat.role === "server" ? (
          <div className="text-center text-sm font-bold ">
            <span className="bg-gray-100 border-4 border-gray-400 p-2 rounded-md">
              {chat.message}
            </span>
          </div>
        ) : (
          ""
        )}
        {chat.role === "sender" ? (
          <UserText key={index} content={chat.message} />
        ) : (
          ""
        )}
        {chat.role === "receiver" ? (
          <ReceivedText key={index} content={chat.message} />
        ) : (
          ""
        )}
      </>
    )
  })

  return (
    <>
      <div className="w-full min-h-[90vh] flex border-4 bg-gray-100 my-4 flex-col bg-chat-pattern md:bg-chat-pattern-desktop bg-cover bg-no-repeat bg-center rounded-md">
        <div className="w-full mx-auto h-full  rounded-md px-2 py-5 flex flex-col justify-start gap-4 grow">
          {renderedChats}
        </div>
        <InputBox handleSendMessage={handleSendMessage} />
      </div>
    </>
  )
}

export default ForumPage
