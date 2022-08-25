import { useRef } from "react";
import axios from "axios";
import "../registerPage/register.scss";
import loginImg from '../../images/login-img.png'
import { Link, useNavigate } from "react-router-dom";
import './login.scss'
import { useAuth } from "../../hook/useAuth";

export const Login = () => {
  const elLoginEmail = useRef();
  const elLoginPassword = useRef();
  const navigate = useNavigate()
  const {setToken} = useAuth()




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
            <h1 className="register__heading">Sign in</h1>

            <p>Do not you have an account? <Link  className="text-decoration-none" to="/">Sign in</Link></p>
            <form
              className="register__form align-items-center w-100"
              onSubmit={loginSubmit}
            >
              <input
                className="form-control w-75"
                ref={elLoginEmail}
                type="email"
                placeholder="email"
                required
              />
              <input
                className="form-control w-75"
                ref={elLoginPassword}
                type="password"
                placeholder="password"
                required
              />
              <button  className="register__btn w-75" type="submit">
                Next step
              </button>
            </form>
          </div>
        </div>
            </div>
      </div>
    </>
  );
};
