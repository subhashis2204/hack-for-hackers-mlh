import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import Search from "./Components/SearchDiv/Seach"
import Jobs from "./Components/JobDiv/Jobs"
import Value from "./Components/ValueDiv/Value"
import Footer from "./Components/FooterDiv/Footer"
import HomePage from "./Components/HomePage"
import ForumPage from "./Components/ForumPage"
import { Route, Routes } from "react-router-dom"
import Form from "./Components/Form"

const App = () => {
  return (
    <div>
      <div className="w-[85%] m-auto bg-white">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Form />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/blogs" element={<ForumPage />} />
          <Route path="/memes" element={<ForumPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App
