import axios from "axios"
import { useState, useEffect } from "react"
import { Card } from "./Card"
import { BiSolidUpvote, BiSolidDownvote } from "react-icons/bi"

import { BsFillShareFill } from "react-icons/bs"

function MemePage() {
  const [memes, setMemes] = useState([])

  useEffect(() => {
    const getMemes = async () => {
      const options = {
        method: "GET",
        url: "https://programming-memes-images.p.rapidapi.com/v1/memes",
        headers: {
          "X-RapidAPI-Key":
            "f2d18d4d5dmsh3520f4c2bb6495ep1e647djsn94cf3b096026",
          "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
        },
      }

      try {
        const response = await axios.request(options)
        console.log(response.data)
        setMemes(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    getMemes()
  }, [])

  const renderedMmes = memes.map((meme, index) => {
    return (
      <>
        <div className="p-2 flex flex-col">
          <img src={meme.image} alt="" key={index} className="w-[25rem]" />
          <div className="grow flex items-end">
            <div className="max-w-min p-2 border-2 border-black rounded-full">
              <BiSolidUpvote className="text-xl" />
            </div>{" "}
            <div className="max-w-min p-2 border-2 border-black rounded-full">
              <BiSolidDownvote className="text-xl" />
            </div>{" "}
            <div className="max-w-min p-2 border-2 border-black rounded-full">
              <BsFillShareFill className="text-xl" />
            </div>{" "}
          </div>
        </div>
      </>
    )
  })

  return (
    <>
      <h1 className="text-xl font-bold py-2 text-center">
        Laugh out with our memes collection
      </h1>
      <div className="flex columns-3 flex-wrap py-5 gap-4 items-start justify-">
        {renderedMmes}
      </div>
    </>
  )
}

export default MemePage
