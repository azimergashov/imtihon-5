import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import './register.scss'
import registerImg from "../../images/register-img.png"

export const Register = () => {
  const { setToken } = useAuth();

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
  return (
    <>
      <div className="register">
        <div className="container d-flex ">
          <div className="w-100  register__left">
            <img className="register__img" src={registerImg} alt="register-img" width={500} height={500}/>
          </div>
          <div className="w-100 ps-3 register__right">
            <h1 className="register__heading">Sign up</h1>

            <p>Already have an account? <Link className="text-decoration-none" to="/login">Sign in</Link></p>

            <form className="register__form align-items-center" onSubmit={registerSubmit}>
              <input  className="form-control w-75"
                ref={elName}
                type="text"
                placeholder="First name..."
                required
              />
              <input  className="form-control w-75"
                ref={elLast}
                type="text"
                placeholder="Last name.."
                required
              />
              <input  className="form-control w-75"
                ref={elPhone}
                type="number"
                placeholder="Phone number..."
                required
              />
              <input  className="form-control w-75"
                ref={elEmail}
                type="email"
                placeholder="Email..."
                required
              />
              <input className="form-control w-75"
                ref={elPassword}
                type="password"
                placeholder="Password..."
                required
              />
              <button className="register__btn w-75" type="submit">Next step</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
