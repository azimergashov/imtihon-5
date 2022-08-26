
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useAuth } from '../../../hook/useAuth'
import { CardBook } from '../../Card'

export const SovedBook = () =>{
    const [data, setData] = useState([])

    const {token} = useAuth()
    useEffect(() =>{
        axios.get("https://book-service-layer.herokuapp.com/book/genreId/3" , {
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
                            <CardBook e={e} key={e.id}/>
                        ))
                    }
                </ul>
            }
            </div>


        </>
    )
}