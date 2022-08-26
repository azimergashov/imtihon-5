import { NavLink, Link, useNavigate,} from "react-router-dom";
import "./header.scss";
import HeaderLogo from "../../images/header-logo.png";
import { useAuth } from "../../hook/useAuth";
import {languages, languagesRus, languagesUzb} from '../../languages'
import { HeaderMenu } from "./HeaderMenu";

export const Header = () => {
  const { language} = useAuth()
  let boom = {}

  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }

  const {home, books ,article} = boom

  return (
    <>
      <header className="header">
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
                      isActive ? "active--link header__nav-link" : "header__nav-link"
                    }
                  >
                  {home}
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive ? "active--link header__nav-link" : "header__nav-link"
                    }
                  >
                    {books}
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/article"
                    className={({ isActive }) =>
                      isActive ? "active--link header__nav-link" : "header__nav-link"
                    }
                  >
                    {article}
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div>
                <HeaderMenu/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
