import "./card.scss";
import {  Outlet } from "react-router-dom";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../hook/useAuth";
import CardImg from '../../images/hamid.jpg'


export const Card = ({ e }) => {
    const {setAuthorId, theme} = useAuth()
    const navigate = useNavigate()
    const singleAuthor =() =>{
        navigate("/single-auth")
        setAuthorId(e.id)
    }
    <Outlet/>

    let cardImg = ""
    if(`https://book-service-layer.herokuapp.com/${e.image}`=== undefined){
      cardImg = CardImg
    }else{
      cardImg = `https://book-service-layer.herokuapp.com/${e.image}`
    }


  return (
    <>

      <li className={!theme ? "card card-light" : "card"}  onClick={singleAuthor}>
        <div className="card__link" >
          <img
            className="card__img"
            src={cardImg}
            alt=""
            width={174}
            height={132}



          />
          <div className="text-center pb-4 pt-3">
            <h1 className="card__title">
              {e.first_name} {e.last_name}
            </h1>
            <p className="card__time">
              {" "}
              {e.date_of_birth} - {e.date_of_death}{" "}
            </p>
          </div>
        </div>
      </li>


    </>
  );
};

// `https://book-service-layer.herokuapp.com/${e?.image}`
