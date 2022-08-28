
import iconStar from "../../images/icon-star.png"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import CardBookImg from '../../images/otkir.png'

export const CardBook = ({e}) =>{

    const {setBookId, setIdAuthor, token, theme} = useAuth()
    const [data, setData]= useState([])

    const navigatee = useNavigate()
    const singleBook = () => {
        navigatee("/single-book")
        setBookId(e.id)
        setIdAuthor(e.author_id)
    }


    let authorTitle = `${data?.first_name}-${data?.last_name}`

    useEffect(() => {
        axios.get(`https://book-service-layer.herokuapp.com/author/authorId/${e.author_id}`, {
            headers: {
                Authorization: token,
            }
        }).then(data => setData(data.data)).catch(er => console.log(er))
    }, [token, e])


    let cardImg = CardBookImg

    // if(`https://book-service-layer.herokuapp.com/${e.image}`=== Error){
    //     cardImg = CardBookImg
    //   }else{
    //     cardImg = `https://book-service-layer.herokuapp.com/${e.image}`
    //   }


    return(
        <>
            <li className={!theme ? "card-book card-book-light" :"card-book"} onClick={singleBook}>
                <img className="card-book__img" src={ cardImg  }
                 alt="" width={164} height={246}/>

                <h1 className="card-book__title m-0 p-0 mb-2 mt-3 ms-2" >{e.title}</h1>


                <p className="card-book__author m-0 p-0 ps-2">
                    {authorTitle}
                </p>
                <div className="d-flex ms-2 mt-2">
                <img className="m-0 p-0 " src={iconStar} alt="star" width={12} height={12}/>
                <p className="card-book__author m-0 p-0 ms-2">  4.4 • 5200 ta fikrlar</p>
                </div>


            </li>
        </>
    )
}