function ForumText({ message }) {
  return (
    <>
      <div className="font-poppins flex gap-4">
        {/* <img src={bot} alt="" className="min-w-[3rem]" /> */}
        <div className="bg-gray-500 bg-opacity-25 p-4 rounded-md flex flex-col items-center">
          {message}
        </div>
      </div>
    </>
  )
}

export default ForumText
