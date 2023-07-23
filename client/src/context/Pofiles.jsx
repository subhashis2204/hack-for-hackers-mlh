import { createContext, useState } from "react"
import axios from "axios"

const ProfileContext = createContext()

function Provider({ children }) {
  const [profiles, setProfiles] = useState([])

  const findProfiles = async (term) => {
    const response = await axios.get("http://localhost:3000/users/search", {
      params: {
        query: term,
      },
    })

    setProfiles(response.data.message.users)
  }

  const findAllProfiles = async () => {
    const response = await axios.get("http://localhost:3000/users")

    setProfiles(response.data.users)
  }

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        setProfiles,
        findProfiles,
        findAllProfiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export { Provider }

export default ProfileContext
