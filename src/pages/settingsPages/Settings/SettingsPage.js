
import "./settings.scss";
import '../Profile/profile.scss'
import { useState } from "react";
export const SettingsPage = () => {




  return (
    <>
      <div className="settings__wrapper">
        <h1>Settings </h1>

        <div>
            <p>language</p>
            <select className="form-select " >
                <option value="eng">English</option>
                <option value="uzb">Uzbek</option>
                <option value="rus">Russian</option>
            </select>
        </div>

        <div>
            <p>theme</p>
            <input className="form-check-input " type="checkbox" />
        </div>

        <div className="profile__form-bottom mt-5">
                <button className="settigs-button">Save Changes</button>
            </div>



      </div>
    </>
  );
};

// import * as React from 'react';
// import Switch from '@mui/material/Switch';



//     const [checked, setChecked] = React.useState(true);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked(event.target.checked);
//   };



// <Switch
//           checked={checked}
//           onChange={handleChange}
//           inputProps={{ "aria-label": "controlled" }}
//         />