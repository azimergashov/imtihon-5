
import "./profile.scss";
import { ProfileHeader } from "../../../components";
import { ProfilePage } from "./ProfilePage";
import { Outlet } from "react-router-dom";


export const Profile = () => {

  return (
    <>
      <div className="profile">
        <div className="container ">
          <h1 className="m-0 p-0">Profile</h1>
          <ProfileHeader />
          <Outlet/>


        </div>
      </div>
    </>
  );
};
