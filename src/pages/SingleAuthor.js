import { useEffect, useState } from "react"
import { useAuth } from "../hook/useAuth"
import axios from 'axios'
import { CardSingleAuth } from "../components"

export const SingleAuthor = () => {
    const [data, setData] = useState([])

    const {token, authorId} = useAuth()

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${authorId}` , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data)).catch(er => console.log(er))
    }, [])

    return(
        <>
        <h1>single author</h1>
          {
            data &&
                <SingleAuthor data={data}/>
          }
        </>

    )
}