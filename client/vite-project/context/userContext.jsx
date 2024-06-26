import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (!user) {
      axios.get("/profile").then(({ data }) => {
        setUser(data);
      });
    }
  },[]);

  return (
<<<<<<< HEAD
    <UserContext.Provider value={[user, setUser]}>
=======
    <UserContext.Provider value={{user, setUser}}>
>>>>>>> f535f35 (This is the first commit of this project in main branch. The repo consists of client and server folders.)
      {children}
    </UserContext.Provider>
  );
}
