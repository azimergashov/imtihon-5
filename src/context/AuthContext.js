import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvayder = ({children}) =>{
    const localData =JSON.parse(window.localStorage.getItem("token"))
    const localAuthorId = JSON.parse(window.localStorage.getItem("authorId"))
    const localBookId = JSON.parse(window.localStorage.getItem("bookId"))
    const [token, setToken] = useState(localData || '')
    const [authorId, setAuthorId] = useState(localAuthorId || "")
    const [bookId, setBookId] = useState(localBookId || '')



    useEffect(()=>{
        if(bookId) {
            localStorage.setItem('bookId', JSON.stringify(bookId))
        }else {
            localStorage.removeItem('bookId')
        }
    },[bookId])

    useEffect(()=>{
        if(authorId) {
            localStorage.setItem('authorId', JSON.stringify(authorId))
        }else {
            localStorage.removeItem('aurhorId')
        }
    },[authorId])

    useEffect(()=>{
        if(token) {
            localStorage.setItem('token', JSON.stringify(token))
        }else {
            localStorage.removeItem('token')
        }
    },[token])
    return(
       <AuthContext.Provider value={{token, setToken, authorId, setAuthorId, bookId, setBookId}}>
            {children}
       </AuthContext.Provider>
    )
}