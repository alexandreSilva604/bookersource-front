'use client'

const { createContext, useState } = require("react");

const UserContext = createContext();

export const UserProvider = ({children}) => {

    let loggedUser = null;

    if (typeof localStorage != "undefined") {
        loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    }

    const [user, setUser] = useState(loggedUser);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}