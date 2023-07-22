import React from 'react'
import {BiTimeFive} from 'react-icons/bi'

import logo2 from '../../Assets/logo-2.png'
import logo3 from '../../Assets/logo-3.png'
import logo4 from '../../Assets/logo-4.png'

import { AiOutlineTwitter,AiFillGithub } from 'react-icons/ai'
import {BiLogoLinkedin} from 'react-icons/bi'
import {CiLocationOn} from 'react-icons/ci'

const Data = [
   {
      id:1,
      image: logo2,
      title: 'John Doe',
      time: 'Now',
      location: 'Canada',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'Web'
   },
   {
      id:2,
      image: logo3,
      title: 'Smith Clark',
      time: 'Now',
      location: 'India',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'App'
   },
   {
      id:3,
      image: logo4,
      title: 'Edmund James',
      time: 'Now',
      location: 'UK',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'Web'
   },
   {
      id:4,
      image: logo4,
      title: 'Edmund James',
      time: 'Now',
      location: 'UK',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'Software'
   },
   {
      id:5,
      image: logo4,
      title: 'Edmund James',
      time: 'Now',
      location: 'UK',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'Backend'
   },
   {
      id:6,
      image: logo4,
      title: 'Edmund James',
      time: 'Now',
      location: 'UK',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      company: 'Ethical'
   }

]

const Jobs = () => {
   return ( 
   <div>
      <div className='jobContainer flex gap-10 justify-center flex-wrap items-center
      py-10'>
         {
            Data.map(({id,image,title,time,location,desc,company}) => {
               return (
                  <div key={id} className='group group/item singleJob w-[250px]
                  p-[20px] bg-white rounded [10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg '>
                     <img src={image} alt="Company Logo" className='w-[30%]' />
                     <span className='flex justify-between items-center gap-4'>
                        <h1 className='text-[16px] font-semibold text-textColor
                        group-hover:text-white'>{title}</h1>
                        <span className='flex items-center text-[#ccc] gap-1'>
                        <BiTimeFive/>{time}
                        </span>
                     </span>
                     <h6 className='text-[#ccc]'>{location}</h6>
                     <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
                     group-hover:text-white'>{desc}</p>
                     <div className='company flex items-center gap-2'>
                        {/* <img src={image} alt="Company Logo" className='w-[15%]' /> */}
                        <span className='text-[10px] py-[1rem] block group-hover:text-white'>{company}</span>
                        <span className='text-[10px] py-[1rem] block group-hover:text-white'>{company}</span>
                        <span className='text-[10px] py-[1rem] block group-hover:text-white'>{company}</span>
                     </div>
{/*          
                     <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px]
                     font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                        Contact Now
                     </button> */}
                     <div className='icons flex gap-4 py-[1rem]'>
                  <BiLogoLinkedin className='bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor'/>
                  <AiFillGithub className='bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor'/>
                  <AiOutlineTwitter className='bg-white p-[8px] h-[40px] w-[40px] rounded-full icon text-blueColor'/>
                  </div>
                     </div>
               )
            })
         }
      </div>
   </div>
   )
}

export default Jobs