
import Hamid from "../../images/hamid.jpg";
import iconStar from "../../images/icon-star.png"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";

export const CardBook = ({e}) =>{

    const {setBookId} = useAuth()

    const navigatee = useNavigate()
    const singleBook = () => {
        navigatee("/single-book")
        setBookId(e.id)
    }


    let authorTitle = " "

    if(e.author_id === 1){
       authorTitle = "Hamid Olimjon "
    }else if(e.author_id === 2){
        authorTitle ="O'tkir Hoshimov"
    }else{
        authorTitle = "Kimdur"
    }


    return(
        <>
            <li className="card-book" onClick={singleBook}>
                <img className="card-book__img" src={Hamid} alt="" width={164} height={246}/>

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