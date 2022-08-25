import profileImgIcon from "../../../images/profile-img-icon.png";
import PhotoProfile from "../../../images/profile-photo.png";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useAuth } from "../../../hook/useAuth";
import "./profile.scss";

export const ProfilePage = () => {

  const { token} = useAuth();
  const [data, setData] = useState([]);
  const elFistName = useRef("")
  const elLastName = useRef("")
  const elNumber = useRef("")
  const elImg = useRef("")


  const proflieFormSubmit = (evt) =>{
    evt.preventDefault()

     const formData = new FormData();

     formData.append("first_name", elFistName.current.value)
     formData.append("last_name", elLastName.current.value)
     formData.append("phone", elNumber.current.value)
     formData.append("image", elImg.current.files[0])

    axios.put("https://book-service-layer.herokuapp.com/user/account", formData, {
      headers:{
          Authorization: token,
      }
  }).then(data => console.log(data)).catch(er => console.log(er))


  }



  useEffect(() => {
    axios
      .get(`https://book-service-layer.herokuapp.com/user/me`, {
        headers: {
          Authorization: token,
        },
      })
      .then((data) => setData(data.data))
      .catch((er) => console.log(er));



  }, [token]);



  return (
    <>
    <form onSubmit={proflieFormSubmit}>
        <div className="profile__wrapper-div">
        <div className="profile__left">
        <div className="position-relative ">
          <img
            className="profile__img"
            src={ data.image !== null ? `https://book-service-layer.herokuapp.com/${data.image}` : PhotoProfile }
            alt="profile-img"
            width={175}
            height={175}
          />
          <img
            className="profile__img-icon"
            src={profileImgIcon}
            alt="profile-img-icon"
            width={50}
            height={50}
          />
        </div>
      </div>
      <div className="w-100">
        <h1 className="profile__heading">My profile</h1>
        <div>

            <div>
              <p className="profile__text-name">First Name</p>
              <input ref={elFistName} className="profile__text form-control" type="text" defaultValue={data.first_name} required/>
            </div>

            <div>
              <p className="profile__text-name">Last Name</p>
              <input ref={elLastName} className="profile__text form-control" type="text" defaultValue={data.last_name} required/>
            </div>

            <div className="d-flex">
              <div className="w-100 me-4">
                <p className="profile__text-name">Phone</p>
                <input ref={elNumber} className="profile__text form-control" type="number" defaultValue={data.phone} required/>
              </div>

              <div className="w-100">
                <p className="profile__text-name">Image</p>
                <input ref={elImg} className="profile__text form-control " type="file" required/>
              </div>
            </div>

        </div>
      </div>
        </div>

        <div className="profile__form-bottom-wrapper">
            <div className="profile__form-bottom ">
              <button className="settigs-button" type="submit">Save Changes</button>
            </div>
        </div>
      </form>
    </>
  );
};


{/* <p className="profile__text-name">First Name</p>
<p className="profile__text">{data.first_name}</p>

<p className="profile__text-name">Last Name</p>
<p className="profile__text">{data.last_name}</p>
<div className="d-flex">
  <div className="w-100 me-4">
    <p className="profile__text-name">Phone</p>
    <p className="profile__text">{data.phone}</p>
  </div>
  <div className="w-100">
    <p className="profile__text-name">Email</p>
    <p className="profile__text">{data.email}</p>
  </div>
</div> */}
