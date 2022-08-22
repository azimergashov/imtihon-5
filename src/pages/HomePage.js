import { Header, Hero } from "../components";
import { NavLink , Outlet} from "react-router-dom";
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import "./homePage.scss";

export const HomePage = () => {
  return (
    <>
      <div className="homepage">
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
                  to="/"
                >
                  Temuriylar davri
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/jadid"
                >
                  Jadid adabiyoti
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/soved"
                >
                  Sovet davri
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/must"
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
