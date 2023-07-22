import React, { useEffect, useState } from "react"
import axios from "axios"

import { AiOutlineTwitter, AiFillGithub } from "react-icons/ai"
import { BiLogoLinkedin } from "react-icons/bi"
import SkillCard from "./SkillCard"
import { FaMapMarkerAlt } from "react-icons/fa"

import { useContext } from "react"
import ProfileContext from "../../context/Pofiles"

const Jobs = () => {
  const { profiles, setProfiles } = useContext(ProfileContext)

  useEffect(() => {
    const getProfiles = async () => {
      const response = await axios.get("http://localhost:3000/users")

      console.log(response.data.users)
      setProfiles(response.data.users)
    }

    getProfiles()
  }, [])

  return (
    <div>
      <div
        className="jobContainer flex gap-10 justify-center flex-wrap items-stretch
      py-10"
      >
        {profiles.map(({ id, avatar, name, location, bio, skills }) => {
          return (
            <div
              key={id}
              className="group group/item singleJob w-[20rem]
                  p-[20px] bg-white rounded [10px] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg flex flex-col"
            >
              <div className="flex flex-col gap-2 items-center justify-center">
                <img src={avatar} alt="Company Logo" className="w-[30%]" />
                <span className="flex justify-between items-center gap-4">
                  <h1
                    className="text-[16px] font-semibold text-textColor
                        "
                  >
                    {name}
                  </h1>
                </span>
                <div className="flex gap-2 items-center justify-center">
                  <FaMapMarkerAlt className="" />
                  <h6 className="text-[#ccc]">{location}</h6>
                </div>
              </div>
              <p
                className="h-[100px] text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                  "
              >
                {bio}
              </p>
              <div className="company flex items-center gap-2">
                {/* <img src={avatar} alt="Company Logo" className='w-[15%]' /> */}
                <div className="flex gap-2 mt-4 flex-wrap">
                  {skills.map((skill) => {
                    return <SkillCard>{skill}</SkillCard>
                  })}
                </div>
              </div>
              <div className="grow"></div>
              {/*          
                     <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
                     font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                        Contact Now
                     </button> */}
              <div className="icons flex gap-4 py-[1rem]">
                <a href="http://"><BiLogoLinkedin className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor" /></a>
                <a href="http://"> <AiFillGithub className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor" /></a>
                <a href="http://"><AiOutlineTwitter className="bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor" /></a>
                
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Jobs
