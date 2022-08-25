import axios from "axios";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import './register.scss'
import registerImg from "../../images/register-img.png"

export const Register = () => {
  const { setToken, language } = useAuth();

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


  let heading = ''
  let firstName = ""
  let lastName = ''
  let phone = ''
  let email = ''
  let password = ''
  let btn = ''
  let text = ''
  if(language ==='eng'){
    heading = 'My Profile'
    firstName = "First name..."
    lastName = 'Last Name...'
    phone = "Phone number..."
    email = "Email..."
    password = "Password..."
    btn = 'Next step'
    text = 'Already have an account?'
  }if(language === 'rus'){
    heading = 'Мой Профил'
    firstName = 'Имя...'
    lastName = 'Фамилия...'
    phone = 'Номер Телефона...'
    email = "Эл. адрес..."
    password = "Пароль..."
    btn = 'Следующий шаг'
    text = 'У вас уже есть аккаунт?'
  }if(language === 'uzb'){
    heading = 'Mening Profilim'
    firstName = 'Ism...'
    lastName = 'Familiya...'
    phone = 'Telefon nomer...'
    email = 'Email...'
    password = 'Parol...'
    btn = "Keyingi qadam"
    text = 'Hisobingiz bormi?'
  }
  return (
    <>
      <div className="register">
        <div className="container d-flex ">
          <div className="w-100  register__left">
            <img className="register__img" src={registerImg} alt="register-img" width={500} height={500}/>
          </div>
          <div className="w-100 ps-3 register__right">
            <h1 className="register__heading">Sign up</h1>

            <p>{text} <Link className="text-decoration-none" to="/login">Sign in</Link></p>

            <form className="register__form align-items-center" onSubmit={registerSubmit}>
              <input  className="form-control w-75"
                ref={elName}
                type="text"
                placeholder={firstName}
                required
              />
              <input  className="form-control w-75"
                ref={elLast}
                type="text"
                placeholder={lastName}
                required
              />
              <input  className="form-control w-75"
                ref={elPhone}
                type="number"
                placeholder={phone}
                required
              />
              <input  className="form-control w-75"
                ref={elEmail}
                type="email"
                placeholder={email}
                required
              />
              <input className="form-control w-75"
                ref={elPassword}
                type="password"
                placeholder={password}
                required
              />
              <button className="register__btn w-75" type="submit">{btn}</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
