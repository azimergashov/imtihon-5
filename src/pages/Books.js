import { Header } from "../components";
import { NavLink, Outlet } from "react-router-dom";
import './homePage.scss'
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import { useAuth } from "../hook/useAuth";
import { languages, languagesRus, languagesUzb } from "../languages";
import Search from "../images/search.png";
import Qidirish from '../images/qidirish.png'
import axios from "axios";
import { useRef, useState } from "react";
import { CardBook } from "../components/Card";

export const Books = () => {

  const {language, theme, token} = useAuth()



  const elSearchBook = useRef("")
  const [data, setData] = useState([])

  const searchBook= (evt) =>{
    evt.preventDefault()
    console.log(elSearchBook.current.value);

    axios.get(`https://book-service-layer.herokuapp.com/book/search?book=${elSearchBook.current.value}`, {
      headers:{
        Authorization: token,
      }
    }).then(data => console.log(data.data)).catch(er => alert(er.response.data.message))


  }

  let boom = {}

  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }
  const {period} = boom

  let linkLight = ""

  if(!theme){
    linkLight = "homepage__nav-link-light"
  }else{
    linkLight = "homepage__nav-link"
  }

  let linkLightActive = ""

  if(!theme){
    linkLightActive = "active-link-light"
  }else{
    linkLightActive = "active-link  "
  }


  return (
    <>
      <div className={!theme ? "books-light" :"books"}>
      <Header />
      <div className={!theme ? "hero-light" :"hero"}>
      <div className="ps-5 ">
        <div className=" hero__wrapper container ">
          <form onSubmit={searchBook} className={!theme ? "hero__search text-center hero__search-light" : "hero__search text-center"}>
            <img className="mb-3" src={Qidirish} alt="qidirish" width={109} height={34}/>
            <div className="hero__form-div">
              <input

                className="form-control ms-5 w-75"
                type="search"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <button
                className="btn btn-warning d-flex align-items-center ms-3"
                type="submit"
              >
                <img src={Search} alt="" /> Izlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    {
      data.length ? <ul className="homepage__wrapper d-flex justify-content-between container list-unstyled">
          {
            data.map((e) => (<CardBook e={e} key={e.id}/>))
          }
      </ul> : <>

      <div className="homepage__wrapper container">
          <div className="homepage__div text-center">
            <img src={Kategoriyalar} alt="kategory" width={322} height={34} />
          </div>
          <nav className="homepage__nav mb-4">
            <ul className="homepage__nav-list ">
              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/books/"
                >
                  Temuriylar {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/books/jadid-book"
                >
                  Jadid adabiyoti
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/books/soved-book"
                >
                  Sovet {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/books/must-book"
                >
                  Mustaqillik {period}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Outlet />


        </> }


      </div>
    </>
  );
};
