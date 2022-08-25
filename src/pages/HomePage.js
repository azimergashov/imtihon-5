import { Header, Hero } from "../components";
import { NavLink , Outlet} from "react-router-dom";
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import "./homePage.scss";
import { useAuth } from "../hook/useAuth";

export const HomePage = () => {

  const {language}= useAuth()

  let period = ''


  if(language ==='eng'){
    period = 'period'

  }if(language === 'rus'){
    period = 'период'

  }if(language === 'uzb'){
    period = 'davri'
  }
  return (
    <>
      <div className="homepage">
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
                    isActive ? "active-link " : "homepage__nav-link"
                  }
                  to="/"
                >
                  Temuriylar {period}
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
                  Sovet {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
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
