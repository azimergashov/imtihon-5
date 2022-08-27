import { NavLink, Link, useNavigate,} from "react-router-dom";
import "./header.scss";
import HeaderLogo from "../../images/header-logo.png";
import { useAuth } from "../../hook/useAuth";
import {languages, languagesRus, languagesUzb} from '../../languages'
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { language, theme} = useAuth()
  const navigate = useNavigate()
  let boom = {}

  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }

  const {home, books ,article} = boom

  const logout = () =>{
    window.localStorage.removeItem('token')
    navigate('/')
    window.location.reload(true)
  }

  let linkLight = ""

  if(!theme){
    linkLight = "header__nav-link-light"
  }else{
    linkLight = "header__nav-link"
  }

  let linkLightActive = ""

  if(!theme){
    linkLightActive = "active--link-light header__nav-link"
  }else{
    linkLightActive = "active--link header__nav-link"
  }



  return (
    <>
      <header className={!theme ? "header-light" :"header" }>
        <div className=" container d-flex align-items-center justify-content-between position-relative">
          <Link to="/" className="header__logo">
            <img src={HeaderLogo} alt="header-logo" width={96} height={26} />
          </Link>

          <div className="d-flex align-items-center">
            <nav className="header__nav">
              <ul className="header__nav-list d-flex m-0 p-0">
                <li className="header-nav-item">
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? linkLightActive : linkLight
                    }
                  >
                  {home}
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive ? linkLightActive : linkLight
                    }
                  >
                    {books}
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/article"
                    className={({ isActive }) =>
                      isActive ?  linkLightActive :  linkLight
                    }
                  >
                    {article}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="d-flex align-content-center justify-content-between">
                <button onClick={logout} className="btn btn-primary me-3">Logout</button>
                <HeaderMenu/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
