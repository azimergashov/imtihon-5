import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import './register.scss'
import registerImg from "../../images/register-img.png"
import { languages, languagesRus, languagesUzb } from "../../languages";

export const Register = () => {
  const { setToken, language, setLanguage } = useAuth();


  const elName = useRef("");
  const elLast = useRef("");
  const elPhone = useRef("");
  const elEmail = useRef("");
  const elPassword = useRef("");

  const registerSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();

    formData.append("first_name", elName.current.value);
    formData.append("last_name", elLast.current.value);
    formData.append("phone", elPhone.current.value);
    formData.append("email", elEmail.current.value);
    formData.append("password", elPassword.current.value);

    axios
      .post("https://book-service-layer.herokuapp.com/user/register", formData)
      .then((data) => setToken(data.data))
      .catch((er) => console.log(er));
  };

  const handleLanguage = (evt) =>{
    setLanguage(evt.target.value)
    window.localStorage.setItem('language', JSON.stringify(evt.target.value))
  }


  let boom = {}

  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }

  const {signUp, textRegister, firstName, lastName, phone, password,email, btnLogin, signIn} = boom


  return (
    <>
      <div className="register">
        <div className="container d-flex ">
          <div className="w-100  register__left">
            <img className="register__img" src={registerImg} alt="register-img" width={500} height={500}/>
          </div>
          <div className="w-100 ps-3 register__right">
            <div className="w-100 text-end">
              <select defaultValue={language} onChange={handleLanguage} className="">
                <option value="eng">Eng</option>
                <option value="rus">Rus</option>
                <option value="uzb">Uzb</option>

              </select>
            </div>
            <h1 className="register__heading">{signUp}</h1>

            <p>{textRegister} <Link className="text-decoration-none" to="/login">{signIn}</Link></p>

            <form className="register__form align-items-center" onSubmit={registerSubmit}>
              <input  className="form-control w-75"
                ref={elName}
                type="text"
                placeholder={`${firstName}...`}
                required
              />
              <input  className="form-control w-75"
                ref={elLast}
                type="text"
                placeholder={`${lastName}...`}
                required
              />
              <input  className="form-control w-75"
                ref={elPhone}
                type="number"
                placeholder={`${phone}...`}
                required
              />
              <input  className="form-control w-75"
                ref={elEmail}
                type="email"
                placeholder={`${email}...`}
                required
              />
              <input className="form-control w-75"
                ref={elPassword}
                type="password"
                placeholder={`${password}...`}
                required
              />
              <button className="register__btn w-75" type="submit">{btnLogin}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
