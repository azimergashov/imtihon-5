
import "./profile.scss";
import { ProfileHeader } from "../../../components";
import { Outlet } from "react-router-dom";


export const Profile = () => {

  return (
    <>
      <div className="profile">
        <div className="container ">
          <div className="profile__wrapper">
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
