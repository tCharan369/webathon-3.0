import { createContext, useState } from "react";
export const allUsersContextObj = createContext();

function AllUsersContext({ children }) {
  const [currentUser, setCurrentUser] = useState({
    fullName: "",
    email: "",
    profileImage: "",
    role: "",
  });

  return (
    <allUsersContextObj.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </allUsersContextObj.Provider>
  );
}

export default AllUsersContext;
