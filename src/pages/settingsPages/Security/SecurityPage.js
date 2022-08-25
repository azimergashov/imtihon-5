import axios from "axios";
import {  useRef, useState } from "react";
import { useAuth } from "../../../hook/useAuth";

export const SecurityPage = () => {
    const elEmail = useRef()
    const elPassword = useRef()
    const elNewPassword = useRef()
    const elConfimPassword = useRef()
    const {token} = useAuth()



    const [data, setData] = useState([])

    const securityForm = (evt) =>{
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
      }
        const accept = {
          "email": elEmail.current.value,
          "currentPassword": elPassword.current.value,
          "newPassword": elNewPassword.current.value
        }
      axios.put("https://book-service-layer.herokuapp.com/user/security", accept, {headers} )
        .then(data => console.log(data.data)).catch(er => console.log(er))
    }




  return (
    <>
      <h1>security page</h1>

      <div>
        <form onSubmit={securityForm}>
          <div>
            <p>Email</p>
            <input ref={elEmail} name="email" type="email" required/>
          </div>
          <div>
            <p>Current password</p>
            <input ref={elPassword} name="currentPassword" type="password" required/>
          </div>
          <div>
            <div>
              <p>New Password</p>
              <input ref={elNewPassword}  name="newPassword" type="password" required/>
            </div>

            {/* <div>
              <p>Confirm Password</p>
              <input ref={elConfimPassword} name="confim_password" type="password" required/>
            </div> */}
          </div>

          <button type="submit">send</button>
        </form>
      </div>
    </>
  );
};
