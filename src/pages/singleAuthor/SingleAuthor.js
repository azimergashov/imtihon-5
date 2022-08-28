import { useEffect, useState } from "react"
import { useAuth } from "../../hook/useAuth"
import axios from 'axios'
import { CardSingleAuth, Header } from "../../components"
import { Outlet } from "react-router-dom"
import './singleAuth.scss'

export const SingleAuthor = () => {
    const [data, setData] = useState([])

    const {token, authorId, theme} = useAuth()

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${authorId}` , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data))
        .catch(er => console.log(er))
    }, [token, authorId])


    console.log(token);

    return(
        < div className={!theme ? "single-author-light" : "single-author"} >

        <Header/>

        <Outlet/>
          {
            data &&
                <CardSingleAuth data={data}/>
          }
        </div>

    )
}
