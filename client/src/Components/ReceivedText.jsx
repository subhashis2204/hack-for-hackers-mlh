import person1 from "../assets/person2.svg"
import person3 from "../assets/person3.svg"
import person4 from "../assets/person4.svg"

function ReceivedText({ content }) {
  const bot = [person1, person3, person4][Math.floor(Math.random() * 3)]

  return (
    <>
      <div className="text-white font-poppins flex gap-4">
        <img src={person4} alt="" className="min-w-[3rem]" />
        <div className="bg-black bg-opacity-50 p-4 rounded-md flex flex-col items-center">
          {content}
        </div>
      </div>
    </>
  )
}

export default ReceivedText
