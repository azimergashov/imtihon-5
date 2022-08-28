import Search from "../../images/search.png";
import Qidirish from '../../images/qidirish.png'

import "./hero.scss";
import { useAuth } from "../../hook/useAuth";
export const Hero = () => {
  const {theme} = useAuth()
  return (
    <div className={!theme ? "hero-light" :"hero"}>
      <div className="ps-5 ">
        <div className=" hero__wrapper container ">
          <form  className={!theme ? "hero__search text-center hero__search-light" : "hero__search text-center"}>
            <img className="mb-3" src={Qidirish} alt="qidirish" width={109} height={34}/>
            <div className="hero__form-div">
              <input
                className="form-control ms-5 w-75"
                type="search"
                placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
              />
              <button
                className="btn btn-warning d-flex align-items-center ms-3"
                type="submit"
              >
                <img src={Search} alt="" /> Izlash
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
