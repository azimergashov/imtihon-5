import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () =>{
    const {token, setToken, authorId, setAuthorId, bookId, setBookId, idAuthor, setIdAuthor} = useContext(AuthContext)


    return {token, setToken, authorId, setAuthorId, bookId, setBookId, idAuthor, setIdAuthor}

}