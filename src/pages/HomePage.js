import { Header, Hero } from "../components";
import { NavLink , Outlet} from "react-router-dom";
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import "./homePage.scss";
import { useAuth } from "../hook/useAuth";
import { languages, languagesRus, languagesUzb } from "../languages";

export const HomePage = () => {

  const {language, theme}= useAuth()


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
        <Hero />
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
      </div>
    </>
  );
};
