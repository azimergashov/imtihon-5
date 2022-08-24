import profileImgIcon from "../../../images/profile-img-icon.png";
import PhotoProfile from "../../../images/profile-photo.png";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../../hook/useAuth";
import "./profile.scss";


export const ProfilePage = () =>{

    const { token } = useAuth();
    const [data, setData] = useState([]);

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


    return(
        <>

          <div className="profile__wrapper">
            <div className="profile__left">
              <div className="position-relative ">
                <img
                  className="profile__img"
                  src={PhotoProfile}
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
                <p className="profile__text-name">First Name</p>
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
                </div>
              </div>
            </div>
          </div>

        </>
    )
}