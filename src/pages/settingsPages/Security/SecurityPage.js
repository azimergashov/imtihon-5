import axios from "axios";
import { useRef, useState } from "react";
import { useAuth } from "../../../hook/useAuth";
import { languages, languagesRus, languagesUzb } from "../../../languages";
import "../Profile/profile.scss";
import "./security.scss";

export const SecurityPage = () => {
  const elEmail = useRef();
  const elPassword = useRef();
  const elNewPassword = useRef();
  const elConfimPassword = useRef();
  const { token, language } = useAuth();

  const [data, setData] = useState([]);

  const securityForm = (evt) => {
    evt.preventDefault();
    // const formData = new FormData();

    // formData.append("email", elEmail.current.value)
    // formData.append("currentPassword", elPassword.current.value)
    // formData.append( "newPassword", elNewPassword.current.value)

    // console.log(formData);
    // console.log(elEmail.current.value);
    // console.log(elPassword.current.value);
    // console.log(elNewPassword.current.value);
    const headers = {
      Authorization: token,
    };
    const accept = {
      email: elEmail.current.value,
      currentPassword: elPassword.current.value,
      newPassword: elNewPassword.current.value,
    };
    axios
      .put("https://book-service-layer.herokuapp.com/user/security", accept, {
        headers,
      })
      .then((data) => console.log(data.data))
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
  const {heading  ,email ,currentPasvord , newPassword , confimPassword, btn } = boom



  return (
    <>
      <div>
        <form className=" security-form pt-5" onSubmit={securityForm}>
          <h1 className="profile__heading">{heading}</h1>
          <div>
            <p className="profile__text-name">{email}</p>
            <input
              ref={elEmail}
              className="profile__text form-control"
              name="email"
              type="email"
              required
            />
          </div>
          <div>
            <p className="profile__text-name">{currentPasvord}</p>
            <input
              ref={elPassword}
              className="profile__text form-control"
              name="currentPassword"
              type="password"
              required
            />
          </div>
          <div className="d-flex ">
            <div className="w-100 ">
              <p className="profile__text-name">{newPassword}</p>
              <input
                ref={elNewPassword}
                className="profile__text form-control"
                name="newPassword"
                type="password"
                required
              />
            </div>

            <div className="w-100 ms-5">
              <p className="profile__text-name">{confimPassword}</p>
              <input
                ref={elConfimPassword}
                className="profile__text form-control"
                name="confim_password"
                type="password"
                required
              />
            </div>
          </div>
          <div className="profile__form-bottom ">
            <button className="settigs-button" type="submit">
              {btn}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
