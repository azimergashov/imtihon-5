import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () =>{
    const {token, setToken, authorId, setAuthorId, bookId, setBookId, idAuthor, setIdAuthor, userImg, setUserImg, theme, setTheme, language, setLanguage} = useContext(AuthContext)


    return {token, setToken, authorId, setAuthorId, bookId, setBookId, idAuthor, setIdAuthor, userImg, setUserImg,theme, setTheme, language, setLanguage}

}