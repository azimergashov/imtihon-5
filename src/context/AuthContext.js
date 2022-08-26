import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthProvayder = ({children}) =>{
    const localData =JSON.parse(window.localStorage.getItem("token"))
    const localAuthorId = JSON.parse(window.localStorage.getItem("authorId"))
    const localBookId = JSON.parse(window.localStorage.getItem("bookId"))
    const localIdAuthor = JSON.parse(window.localStorage.getItem('idAuthor'))
    const localUserImg = JSON.parse(window.localStorage.getItem("userImg"))
    const localLanguage = JSON.parse(window.localStorage.getItem("language"))
    const localTheme = JSON.parse(window.localStorage.getItem("theme"))

    const [token, setToken] = useState(localData || '')
    const [authorId, setAuthorId] = useState(localAuthorId || "")
    const [bookId, setBookId] = useState(localBookId || '')
    const [idAuthor, setIdAuthor] = useState(localIdAuthor || '')
    const [userImg, setUserImg] = useState(localUserImg || '')
    const [theme, setTheme] = useState(localTheme || false)
    const [language, setLanguage] = useState(localLanguage ||'eng')
    const [menu, setMenu] = useState(false)


    useEffect(()=>{
        if(userImg) {
            localStorage.setItem('userImg', JSON.stringify(userImg))
        }else {
            localStorage.removeItem('userImg')
        }
    },[userImg])
    useEffect(()=>{
        if(idAuthor) {
            localStorage.setItem('idAuthor', JSON.stringify(idAuthor))
        }else {
            localStorage.removeItem('idAuthor')
        }
    },[idAuthor])

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
       <AuthContext.Provider value={{token, setToken, authorId, setAuthorId, bookId, setBookId, idAuthor, setIdAuthor, userImg, setUserImg, theme, setTheme, language, setLanguage, menu, setMenu}}>
            {children}
       </AuthContext.Provider>
    )
}