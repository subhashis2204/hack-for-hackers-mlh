import React from "react"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="navBar flex justify-between items-center p-[3rem]">
      <div className="logoDiv">
        <h1 className="logo text-[25px] text-blueColor">
          <strong>Dev</strong>Connect
        </h1>
      </div>

      <div className="menu flex gap-8">
        <Link
          to="/blogs"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Blog
        </Link>
        <Link
          to="/forum"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Forum
        </Link>
        <Link
          to="/memes"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Memes
        </Link>
        <Link
          to="/register"
          className="menuList text-[#6f6f6f] hover:text-blueColor"
        >
          Register
        </Link>
      </div>
    </div>
  )
}

export default NavBar
