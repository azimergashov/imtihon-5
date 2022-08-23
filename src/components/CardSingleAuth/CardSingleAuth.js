import './cardSingleAuth.scss'
import ijodiLeft from '../../images/ijodi-left.png'
import { useEffect, useState } from 'react'
import { useAuth } from '../../hook/useAuth'
import axios from 'axios'
import { CardBook } from '../Card/CardBook'


export const CardSingleAuth = ({data}) => {
    const [dot, setDot] = useState([])

    const {token, authorId} = useAuth()

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/author/books/${authorId}` , {
            headers:{
                Authorization: token,
            },
        }).then(dot => setDot(dot.data))
        .catch(er => console.log(er))
    }, [token, authorId])



    return (
        <div className='card-single-author'>
            <div className='container card-single-author__wrapper'>
                <div className='card-single-author__left'>
                    <img className='card-single-author__left-img' src={`https://book-service-layer.herokuapp.com/${data.image}`} alt={data.first_name} width={582} height={780}/>

                   <div className='w-100 '>
                   <div className='card-single-author__left-bottom'>
                        <div className='card-single-author__left-bottom-left text-end'>
                            <p className='card-single-author__left-bottom-text'>Tavallud sanasi</p>
                            <h3 className='card-single-author__left-bottom-time text-end'>{data.date_of_birth}</h3>
                            <p className='card-single-author__left-bottom-text text-end'>Toshkent, Uzbekistan</p>
                        </div>
                        <p className='card-single-author__left-bottom-time '>-</p>
                        <div className='card-single-author__left-bottom-right'>
                            <p className='card-single-author__left-bottom-text'>vafot etkan sanasi</p>
                            <h3 className='card-single-author__left-bottom-time'>{data.date_of_death}</h3>
                            <p className='card-single-author__left-bottom-text'>Toshkent, Uzbekistan</p>
                        </div>
                    </div>
                   </div>

                </div>

                <div className='card-single-author__right'>

                 <h1 className='card-single-author__right-title'>{data.first_name} {data.last_name}</h1>
                 <p className='card-single-author__right-text'>{data.bio}</p>
                 <div>
                    <div className='d-flex mb-3'>
                     <img src={ijodiLeft} alt="ijodi" width={14} height={20}/>
                     <p className='card-single-author__right-ijodi m-0 p-0 ms-3'>Ijodi</p>
                    </div>
                    <p className='card-single-author__right-bottom-text '>Yozuvchining ilk asari 1962-yilda „Poʻlat chavandoz“ nomida ocherklar toʻplami tarzida nashrdan chiqdi. Ammo yozuvchiga muvaffaqiyat keltirgan asar 1970-yilda nashr qilingan „Bahor qaytmaydi“ qissasi boʻldi.</p>
                 </div>

                 <h2 className='card-single-author__right-asarlari'>Asarlari</h2>

                  <div className='card-single-author__right-asarlari-wrapper'>
                  <ul className='list d-flex justify-content-between flex-wrap list-unstyled'>
                        {
                            dot.length &&
                            dot.map((e) =>(
                                <CardBook e={e} key={e.id}/>
                            ))
                        }





                    </ul>
                  </div>

                </div>

            </div>
        </div>
    )
}