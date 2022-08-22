import Search from "../../images/search.png";
import Qidirish from '../../images/qidirish.png'

import "./hero.scss";
export const Hero = () => {
  return (
    <div className="hero">
      <div className="ps-5 ">
        <div className=" hero__wrapper container ">
          <form  className="hero__search text-center">
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
