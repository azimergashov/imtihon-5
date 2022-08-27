
import "./profile.scss";
import { ProfileHeader } from "../../../components";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../../hook/useAuth";
import { useRef } from "react";


export const Profile = () => {
  const profile = useRef("")

  const {bgColor, bodyColor} = useAuth()




  return (
    <>
      <div style={{backgroundColor: `${bodyColor}`}}  className="profile">
        <div className="container ">
          <div style={{backgroundColor: `${bgColor}`}} className="profile__wrapper">
            <ProfileHeader />

            <div >
            <Outlet/>
            </div>
          </div>


        </div>
      </div>
    </>
  );
};
