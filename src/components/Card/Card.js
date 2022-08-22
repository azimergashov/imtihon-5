import "./card.scss";
import { Link, Outlet } from "react-router-dom";
import Hamid from "../../images/hamid.jpg";
import {useNavigate} from 'react-router-dom'
import { useAuth } from "../../hook/useAuth";


export const Card = ({ e }) => {
    const {setAuthorId} = useAuth()
    const navigate = useNavigate()
    const singleAuthor =() =>{
        navigate("/single-author")
        setAuthorId(e.id)

    }

    <Outlet/>

  return (
    <>

      <li className="card" onClick={singleAuthor}>
        <div className="card__link" >
          <img
            className="card__img"
            src={Hamid}
            alt={e.first_name}
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
