import { Header, Hero } from "../components";
import { NavLink, Outlet } from "react-router-dom";
import './homePage.scss'
import Kategoriyalar from "../../src/images/kategoriyalar.png";
import { useAuth } from "../hook/useAuth";

export const Books = () => {

  const {language} = useAuth()

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
      <div className="books">
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
                  to="/books/"
                >
                  Temuriylar {period}
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
                  Sovet {period}
                </NavLink>
              </li>

              <li className="homepage__nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active-link  " : "homepage__nav-link"
                  }
                  to="/books/must-book"
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
