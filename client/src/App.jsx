import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import Search from "./Components/SearchDiv/Seach"
import Jobs from "./Components/JobDiv/Jobs"
import Value from "./Components/ValueDiv/Value"
import Footer from "./Components/FooterDiv/Footer"
import { variants } from "./variants";
import { Alert } from "./Components/Alert"

const App = () => {
  return (
    <div>
      <div className="w-[85%] m-auto bg-white">
        <NavBar />
        <Search />
        <div className="">
        {variants.map((variant) => (
          <Alert variant={variant} />
        ))}
      </div>
        <Jobs />
        <Value />
        <Footer />
      </div>
    </div>
  )
}

export default App
