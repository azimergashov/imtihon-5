import './jadid.scss'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
import { Card } from "../../Card";

export const Jadid = () =>{

    const [data, setData] = useState([])

    const {token} = useAuth()
    useEffect(() =>{
        axios.get("https://book-service-layer.herokuapp.com/author/genreId/2" , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data)).catch(er => console.log(er))

    }, [token])

    return(
        <>
             <div className='container'>
            {
                data.length &&
                <ul className='d-flex justify-content-between flex-wrap  list-unstyled'>
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