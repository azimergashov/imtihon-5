import { Header } from "../components";
import { NavLink , Outlet} from "react-router-dom";
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import "./homePage.scss";
import { useAuth } from "../hook/useAuth";
import { languages, languagesRus, languagesUzb } from "../languages";
import Search from "../images/search.png";
import Qidirish from '../images/qidirish.png'
import { useRef, useState } from "react";
import axios from "axios";
import { Card } from "../components/Card";

export const HomePage = () => {

  const {language, theme, token}= useAuth()
  const search = useRef("")
  const [data, setData] = useState()

  const searchHome = (evt) =>{
    evt.preventDefault()
    console.log(search.current.value);
    axios.get(`https://book-service-layer.herokuapp.com/author/search?author=${search.current.value}`, {
      headers:{
      Authorization: token,
  },}).then(data => setData(data.data)).catch(er => console.log(er))
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
      <div className={!theme ? "homepage-light" : "homepage"}>
        <Header />
        <div className={!theme ? "hero-light" :"hero"}>
      <div className="ps-5 ">
        <div className=" hero__wrapper container ">
          <form  onSubmit={searchHome} className={!theme ? "hero__search text-center hero__search-light" : "hero__search text-center"}>
            <img className="mb-3" src={Qidirish} alt="qidirish" width={109} height={34}/>
            <div className="hero__form-div">
              <input
                ref={search}
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
      data ? <ul className="homepage__wrapper container d-flex flex-wrap justify-content-between">
          {
             data.map((e) => (
                <Card key={e.id} e={e}/>
              ))
          }
      </ul>:  <> <div className="homepage__wrapper container">
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
                  to="/"
                >
                  Temuriylar {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/jadid"
                >
                  Jadid adabiyoti
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/soved"
                >
                  Sovet {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? linkLightActive : linkLight
                  }
                  to="/must"
                >
                  Mustaqillik {period}
                </NavLink>

              </li>
            </ul>
          </nav>
        </div>

        <Outlet />
        </>

    }



      </div>
    </>
  );
};
