import { NavLink, Link, useNavigate,} from "react-router-dom";
import "./header.scss";
import HeaderLogo from "../../images/header-logo.png";
import SelectImg from "../../images/select-img.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import axios from "axios";
import headerIcon from '../../images/header-icon.png'

export const Header = () => {
  const [menu, setMenu] = useState(false)
  const {token} = useAuth()
  const [data, setData] = useState([])

  useEffect(() =>{
    axios.get('https://book-service-layer.herokuapp.com/user/me', {
      headers: {
        Authorization: token,
      }
    })
    .then(data => setData(data.data)).catch(er => console.log(er))
  },[token])


  const menuOpen = () =>{
    setMenu(!menu)
  }

  const navigate = useNavigate()

  const profileOpen = () =>{
    navigate("/profile/")
  }

  const securityOpen = () =>{
    navigate("/profile/security")
  }

  const settingsOpen = () =>{
    navigate("/profile/settings")
  }

  useEffect(() => {
    const closeMenu = (evt) =>{
      console.log(evt);
        if(evt.code === "Escape"){
          setMenu(false)
        }
    }

    if(menu){
      window.addEventListener("keyup", closeMenu)
    }

    return () => window.removeEventListener("keyup", closeMenu)
  }, [menu])



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
                    Home
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/books"
                    className={({ isActive }) =>
                      isActive ? "active--link header__nav-link" : "header__nav-link"
                    }
                  >
                    Books
                  </NavLink>
                </li>

                <li className="header-nav-item">
                  <NavLink
                    to="/article"
                    className={({ isActive }) =>
                      isActive ? "active--link header__nav-link" : "header__nav-link"
                    }
                  >
                    Article
                  </NavLink>
                </li>
              </ul>
            </nav>

            <div className="d-flex align-items-center">
              <img
                className="header__select-img"
                src={ data.image !== null ? `https://book-service-layer.herokuapp.com/${data.image}` : SelectImg }
                alt=""
                width={48}
                height={48}
              />

              <button className="header__select" onClick={menuOpen}><img src={headerIcon} alt="header-icon" width={12} height={7}/></button>
              <div onClick={menuOpen} className={menu ? "header__select-bg " : "header__select-bg d-none"} ></div>

              <div className={menu ? "header__select-div" : "header__select-div d-none"}>
                <div className="header__select-menu"><p className="ps-2 pt-3 fs-5 ">Menu</p>
                <button onClick={menuOpen} className="header__select-close bg-danger">&times;</button>
                </div>
                <ul className="list-unstyled m-0 p-0">
                  <li onClick={profileOpen} className="header__select-item">My profile</li>
                  <li onClick={securityOpen} className="header__select-item">Security</li>
                  <li onClick={settingsOpen} className="header__select-item">Settings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
