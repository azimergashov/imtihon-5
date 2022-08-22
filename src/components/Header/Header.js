import { NavLink, Link, Outlet} from "react-router-dom";
import "./header.scss";
import HeaderLogo from "../../images/header-logo.png";
import SelectImg from "../../images/select-img.png";

export const Header = () => {
  return (
    <>
      <header className="header">
        <div className=" container d-flex align-items-center justify-content-between">
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
                src={SelectImg}
                alt=""
                width={48}
                height={48}
              />
              <select className="header__select">
                <option defaultValue></option>
                <option value="">My account</option>
                <option value="">Security</option>
                <option value="">Settings</option>
              </select>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
