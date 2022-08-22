import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvayder = ({children}) =>{
    const localData =JSON.parse(window.localStorage.getItem("token"))
    const [token, setToken] = useState(localData || '')
    const [authorId, setAuthorId] = useState("")

    useEffect(()=>{
        if(token) {
            localStorage.setItem('token', JSON.stringify(token))
        }else {
            localStorage.removeItem('token')
        }
    },[token])
    return(
       <AuthContext.Provider value={{token, setToken, authorId, setAuthorId}}>
            {children}
       </AuthContext.Provider>
    )
}