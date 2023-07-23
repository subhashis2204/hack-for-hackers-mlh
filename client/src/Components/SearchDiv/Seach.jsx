import React, { useContext, useState } from "react"

import { DebounceInput } from "react-debounce-input"
import { AiOutlineCloseCircle, AiOutlineSearch } from "react-icons/ai"
import { BsHouseDoor } from "react-icons/bs"
import { CiLocationOn } from "react-icons/ci"
import ProfileContext from "../../context/Pofiles"
const Search = () => {
  const [term, setTerm] = useState("")
  const { findProfiles, findAllProfiles } = useContext(ProfileContext)

  const handleChange = (e) => {
    setTerm(e.target.value)

    if (e.target.value === "") return findAllProfiles()

    findProfiles(e.target.value)
  }

  return (
    <div className="searchDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]">
      <div className="firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
        <div className="flex gap-2 items-center grow">
          <AiOutlineSearch className="text-[25px] icon" />
          <DebounceInput
            debounceTimeout={300}
            onChange={handleChange}
            type="text"
            className="bg-transparent text-blue-500
               focus:outline-none w-full"
            placeholder="Search Dev Here..."
            value={term}
          />
        </div>
        <button
          className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white
            cursor-pointer hover:bg-blue-300"
        >
          Search
        </button>
      </div>
    </div>
  )
}

export default Search
