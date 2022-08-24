import './singleBookCenter.scss'
import SingleBookCenter from '../../../images/1.png'
import { useAuth } from '../../../hook/useAuth'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const SingleBookCenterOne = () =>{
    const {idAuthor, token} = useAuth()
    const [data, setData] = useState([])

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${idAuthor}`, {
            headers:{
                Authorization: token,
            },
        }).then(data => setData(data.data)).catch(er => console.log(er))
    }, [token, idAuthor])

    console.log(data);
    console.log(data);

    return(
        <>
            <div className='single-book-center'>
                <img className="mb-3" src={SingleBookCenter} alt="single-book-center" width={60} height={60}/>
                <p className='single-book-center-two__text'>
                    {data.bio}
                </p>
            </div>


        </>
    )
}