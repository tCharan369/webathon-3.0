import { createContext,useState } from "react"
export const allUsersContextObj = createContext()

function AllUsersContext({children}) {

   let [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    profileImageUrl: "",
    role: "",
   })

  return (
    <allUsersContextObj.Provider value={{ currentUser, setCurrentUser }}>
      {children} 
    </allUsersContextObj.Provider>
  )
}

export default AllUsersContext