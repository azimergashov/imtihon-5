import axios from "axios";
import { useRef } from "react";
import { useAuth } from "../hook/useAuth";

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
      .post(
        "https://book-service-layer.herokuapp.com/user/register",
        formData
      )
      .then((data) => setToken(data.data))
      .catch((er) => console.log(er));
  };
  return (
    <>
      <form onSubmit={registerSubmit}>
        <input ref={elName} type="text" placeholder="First name..." required />
        <input ref={elLast} type="text" placeholder="Last name.." required />
        <input
          ref={elPhone}
          type="number"
          placeholder="Phone number..."
          required
        />
        <input ref={elEmail} type="email" placeholder="Email..." required />
        <input
          ref={elPassword}
          type="password"
          placeholder="Password..."
          required
        />
        <button type="submit">send</button>
      </form>
    </>
  );
};
