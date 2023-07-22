import { createContext, useState } from "react"
import axios from "axios"

const ProfileContext = createContext()

function Provider({ children }) {
  const [profiles, setProfiles] = useState([])

  return (
    <ProfileContext.Provider
      value={{
        profiles,
        setProfiles,
      }}
    >
      {children}
    </ProfileContext.Provider>
  )
}

export { Provider }

export default ProfileContext
