import { languages, languagesRus, languagesUzb } from "../../languages";
import "./header.scss";
import { useNavigate } from "react-router-dom";
import SelectImg from "../../images/select-img.png";
import { useEffect, useState } from "react";
import { useAuth } from "../../hook/useAuth";
import axios from "axios";
import headerIcon from "../../images/header-icon.png";


export const HeaderMenu = () => {
  const { token, language, menu, setMenu, theme } = useAuth();
  const [data, setData] = useState([]);
  let boom = {};

  if (language === "eng") {
    boom = { ...languages };
  }
  if (language === "rus") {
    boom = { ...languagesRus };
  }
  if (language === "uzb") {
    boom = { ...languagesUzb };
  }

  const { menus, settings, addAuthor, addBook, home } = boom;

  useEffect(() => {
    axios
      .get("https://book-service-layer.herokuapp.com/user/me", {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setData(data.data))
      .catch((er) => console.log(er));
  }, [token]);

  const menuOpen = () => {
    setMenu(!menu);
  };

  const navigate = useNavigate();
  const homeOpen = () => {
    navigate("/");
    setMenu(!menu);
  };
  const profileOpen = () => {
    navigate("/profile/");
    setMenu(!menu);
  };

  const addAuthorOpen = () => {
    navigate("/add-author");
    setMenu(!menu);
  };

  const addBookOpen = () => {
    navigate("/add-book");
    setMenu(!menu);
  };

  useEffect(() => {
    const closeMenu = (evt) => {
      console.log(evt);
      if (evt.code === "Escape") {
        setMenu(false);
      }
    };

    if (menu) {
      window.addEventListener("keyup", closeMenu);
    }

    return () => window.removeEventListener("keyup", closeMenu);
  }, [menu, setMenu]);

  const logout = () =>{
    window.localStorage.removeItem('token')
    navigate('/')
    window.location.reload(true)
  }

  return (
    <div>
      <div className="d-flex align-items-center">
        <img
          className="header__select-img"
          src={
            data.image !== null
              ? `https://book-service-layer.herokuapp.com/${data.image}`
              : SelectImg
          }
          alt=""
          width={48}
          height={48}
        />

        <button className="header__select " onClick={menuOpen}>
          <img src={headerIcon} alt="header-icon" width={12} height={7} />
        </button>
        <div
          onClick={menuOpen}
          className={menu ? "header__select-bg " : "header__select-bg d-none"}
        ></div>

        <div
          className={menu ? "header__select-div " : "header__select-div d-none"}
        >
          <div>
            <div className="header__select-menu">
              <p className="ps-2 pt-3 fs-5 ">{menus}</p>
              <button
                onClick={menuOpen}
                className="header__select-close bg-danger"
              >
                &times;
              </button>
            </div>
            <ul className="list-unstyled m-0 p-0">
              <li onClick={homeOpen} className={!theme ? "header__select-item-light" : "header__select-item"}>
                {home}
              </li>
              <li onClick={addAuthorOpen} className={!theme ? "header__select-item-light" : "header__select-item"}>
                {addAuthor}
              </li>
              <li onClick={addBookOpen} className={!theme ? "header__select-item-light" : "header__select-item"}>
                {addBook}
              </li>
              <li onClick={profileOpen} className={!theme ? "header__select-item-light" : "header__select-item"}>
                {settings}
              </li>
              <li ><button style={{borderRadius: "0"}} onClick={logout} className="btn btn-primary me-3 w-100  ">Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
