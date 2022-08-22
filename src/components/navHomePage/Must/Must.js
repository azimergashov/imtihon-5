import './must.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
import { Card } from "../../Card";

export const Must = () =>{

    const [data, setData] = useState([])

    const {token} = useAuth()
    useEffect(() =>{
        axios.get("https://book-service-layer.herokuapp.com/author/genreId/4" , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data)).catch(er => console.log(er))

    }, [])

    return(
        <>
             <div className='container'>
            <h1>Mustaqillik</h1>
            {
                data.length &&
                <ul>
                    {
                        data.map((e) => (
                            <Card e={e} key={e.id}/>
                        ))
                    }
                </ul>
            }
            </div>
        </>
    )
}