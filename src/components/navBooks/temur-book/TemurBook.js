
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
import { CardBook } from '../../Card'

export const TemurBook = () =>{
    const [data, setData] = useState([])

    const {token} = useAuth()
    useEffect(() =>{
        axios.get("https://book-service-layer.herokuapp.com/book/genreId/1" , {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data)).catch(er => console.log(er))
    }, [])


    return(
        <>

            <div className='container'>
            <h1>Temuriylar</h1>
            {
                data.length &&
                <ul className='d-flex justify-content-between flex-wrapp'>
                    {
                        data.map((e) => (
                            <CardBook e={e} key={e.id}/>
                        ))
                    }
                </ul>
            }
            </div>


        </>
    )
}