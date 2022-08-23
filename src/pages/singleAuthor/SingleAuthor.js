import { useEffect, useState } from "react"
import { useAuth } from "../../hook/useAuth"
import axios from 'axios'
import { CardSingleAuth, Header } from "../../components"
import styled from "styled-components"
import { Outlet } from "react-router-dom"

export const SingleAuthor = () => {
    const [data, setData] = useState([])

    const {token, authorId} = useAuth()

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${authorId}` , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data))
        .catch(er => console.log(er))
    }, [token, authorId])



    return(
        < Wrapper >

        <Header/>

        <Outlet/>
          {
            data &&
                <CardSingleAuth data={data}/>
          }
        </Wrapper>

    )
}



const Wrapper = styled.div`
    min-height: 100vh;
    background-color: #000000;
`
