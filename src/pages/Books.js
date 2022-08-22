import { Header, Hero } from "../components";
import { NavLink, Outlet } from "react-router-dom";
import './homePage.scss'
import Kategoriyalar from "../../src/images/kategoriyalar.png";

export const Books = () => {
  return (
    <>
      <div className="books">
      <Header />
      <Hero />
        <div className="homepage__wrapper container">
          <div className="homepage__div text-center">
            <img src={Kategoriyalar} alt="kategory" width={322} height={34} />
          </div>
          <nav className="homepage__nav">
            <ul className="homepage__nav-list ">
              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link " : "homepage__nav-link"
                  }
                  to="/books/"
                >
                  Temuriylar davri
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/books/jadid-book"
                >
                  Jadid adabiyoti
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/books/soved-book"
                >
                  Sovet davri
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/books/must-book"
                >
                  Mustaqillik davri
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
