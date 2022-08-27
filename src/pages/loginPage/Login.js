import { useRef } from "react";
import axios from "axios";
import "../registerPage/register.scss";
import loginImg from '../../images/login-img.png'
import { Link, useNavigate } from "react-router-dom";
import './login.scss'
import { useAuth } from "../../hook/useAuth";
import { languages, languagesRus, languagesUzb } from "../../languages";

export const Login = () => {
  const elLoginEmail = useRef();
  const elLoginPassword = useRef();
  const navigate = useNavigate()
  const {setToken, language, setLanguage} = useAuth()




  const loginSubmit = (evt) => {
    evt.preventDefault();
    const accept = {
        "email": elLoginEmail.current.value,
        "password": elLoginPassword.current.value,
      }
    axios
      .post("https://book-service-layer.herokuapp.com/user/login", accept)
      .then((data) => setToken(data.data.token), navigate('/'))
      .catch((er) => console.log(er));

  };

  let boom = {}

  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }

  const {signIn, email, password, textLogin, btnLogin, signUp} = boom

  const handleLanguage = (evt) =>{
    setLanguage(evt.target.value)
    window.localStorage.setItem('language', JSON.stringify(evt.target.value))
  }

  return (
    <>
      <div className="register">
        <div className="d-flex container">
            <div className="register__left w-100">
            <div>
                <img src={loginImg} alt="login-img" width={500} height={500} />
            </div>
        </div>

        <div className="register__right w-100 ">
          <div className="login__form-div">
          <div className="w-100 text-end">
              <select defaultValue={language} onChange={handleLanguage} className="">
                <option value="eng">Eng</option>
                <option value="rus">Rus</option>
                <option value="uzb">Uzb</option>

              </select>
            </div>
            <h1 className="register__heading">{signIn}</h1>

            <p>{textLogin}<Link  className="text-decoration-none" to="/">{signUp}</Link></p>
            <form
              className="register__form align-items-center w-100"
              onSubmit={loginSubmit}
            >
              <input
                className="form-control w-75"
                ref={elLoginEmail}
                type="email"
                placeholder={`${email}...`}
                required
              />
              <input
                className="form-control w-75"
                ref={elLoginPassword}
                type="password"
                placeholder={`${password}...`}
                required
              />
              <button  className="register__btn w-75" type="submit">
                {btnLogin}
              </button>
            </form>
          </div>
        </div>
            </div>
      </div>
    </>
  );
};
