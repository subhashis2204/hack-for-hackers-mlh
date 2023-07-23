import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import Search from "./Components/SearchDiv/Seach"
import Jobs from "./Components/JobDiv/Jobs"
import Value from "./Components/ValueDiv/Value"
import Footer from "./Components/FooterDiv/Footer"
import HomePage from "./Components/HomePage"
import ForumPage from "./Components/ForumPage"
import MemePage from "./Components/MemePage"
import { Route, Routes } from "react-router-dom"
import Form from "./Components/Form"
import { Card } from "./Components/Card"

const App = () => {
  return (
    <div>
      <div className="w-[85%] m-auto bg-white">
        <NavBar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Form />} />
          <Route path="/forum" element={<ForumPage />} />
          {/* <Route path="/blogs" element={<Card
          imgSrc="https://picsum.photos/id/201/300/200"
          imgAlt="Card Image 1"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
        />} /> */}
          <Route path="/memes" element={<MemePage />} />
          <Route
            path="/blogs"
            element={
              <Card
                imgSrc="https://picsum.photos/id/201/300/200"
                imgAlt="Card Image 1"
                title="Card Title"
                description="This is the card description section. You can add more details about the product here"
              />
            }
          />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

export default App
