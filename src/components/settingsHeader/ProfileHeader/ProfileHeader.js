import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../../hook/useAuth";
import "../settingsHeader.scss";
import headerIcon from "../../../images/header-icon.png";
import SelectImg from "../../../images/select-img.png";
import axios from "axios";
import { languages, languagesRus, languagesUzb } from "../../../languages";
import { HeaderMenu } from "../../Header";

export const ProfileHeader = () => {
  const { language, menu, setMenu, token } = useAuth();
  const [data, setData] = useState();

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
  }, [menu]);

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

  const profileOpen = () => {
    navigate("/profile/");
  };

  const securityOpen = () => {
    navigate("/profile/security");
  };

  const settingsOpen = () => {
    navigate("/profile/settings");
  };
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

  const { profile, security, settings } = boom;

  return (
    <>
      <header className="profile__header position-relative">
        <nav>
          <ul className="d-flex align-items-center list-unstyled m-0 p-0">
            <li className="profile__item">
              <NavLink
                to="/profile/"
                className={({ isActive }) =>
                  isActive ? "profile__item-link-active" : "profile__item-link"
                }
              >
                <span className="profile__item-span">1</span> {profile}
              </NavLink>
            </li>

            <li className="profile__item">
              <NavLink
                to="/profile/security"
                className={({ isActive }) =>
                  isActive ? "profile__item-link-active" : "profile__item-link"
                }
              >
                <span className="profile__item-span">2</span> {security}
              </NavLink>
            </li>

            <li className="profile__item">
              <NavLink
                to="/profile/settings"
                className={({ isActive }) =>
                  isActive ? "profile__item-link-active" : "profile__item-link"
                }
              >
                <span className="profile__item-span">3</span> {settings}
              </NavLink>
            </li>
          </ul>
        </nav>

      <div>
          <HeaderMenu/>
      </div>
      </header>
    </>
  );
};
