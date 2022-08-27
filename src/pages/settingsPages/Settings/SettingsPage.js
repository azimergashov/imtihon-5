
import "./settings.scss";
import '../Profile/profile.scss'
import { useAuth } from "../../../hook/useAuth";
import { useRef, useState } from "react";
import { languages, languagesRus, languagesUzb } from "../../../languages";


export const SettingsPage = () => {

    const {theme, setTheme, setLanguage, language, bodyColor, setBodyColor, bgColor, setBgColor, textColor, setTextColor} = useAuth()
    const elSelect = useRef("")

    const [change, setChange] = useState(false)

    const hendleSettings = () =>{
        setTheme(change)
        window.localStorage.setItem("theme", JSON.stringify(theme))
        setLanguage(elSelect.current.value);
        window.localStorage.setItem("language", JSON.stringify(elSelect.current.value))
    }

    let boom = {}

    if(language === 'eng'){
      boom = {...languages}
    }if(language === 'rus'){
      boom = {...languagesRus}
    }if(language === 'uzb'){
      boom = {...languagesUzb}
    }

    const {settin,  dark,  light,  english,  uzbek,  russian,  languageText, btn} = boom


    const colorChange = (evt) =>{
        console.log(evt.target.value);
        setBodyColor(evt.target.value)
        window.localStorage.setItem("body-color", evt.target.value)
    }

    const textColorChange = (evt) =>{
      console.log(evt.target.value);
      setTextColor(evt.target.value)
      window.localStorage.setItem("text-color", evt.target.value)
    }

    const bgColorChange = (evt) =>{
      console.log(evt.target.value);
      setBgColor(evt.target.value)
      window.localStorage.setItem("bg-color", evt.target.value)

    }

    const hendleReset = () =>{
        window.localStorage.removeItem('body-color')
        window.localStorage.removeItem('bg-color')
        window.localStorage.removeItem('text-color')
        window.location.reload(true)

    }


    return(
    <>
      <div  className="settings__wrapper">
        <h1 className="profile__heading">{settin}</h1>

        <div className="mb-4">
            <p className="profile__text-name">{languageText}</p>
            <select ref={elSelect}  defaultValue={language} className="form-select " >
                <option value="eng">{english}</option>
                <option value="uzb">{uzbek}</option>
                <option value="rus">{russian}</option>
            </select>
        </div>


        <div className="d-none">
        <input onChange={colorChange}  type="color" className="form-control form-control-color" id="exampleColorInput"  title="Choose your color"/>


        <input onChange={textColorChange}  type="color" className="form-control form-control-color" id="textColor"  title="Choose your text-color"/>


        <input onChange={bgColorChange}  type="color" className="form-control form-control-color" id="textColor"  title="Choose your text-color"/>

        <button onClick={hendleReset}>reset</button>

        </div>



        <div>
            <p className="profile__text-name m-0 p-0 mb-2" >{theme ? dark : light  }</p>
            <input defaultChecked={theme} onChange={() =>  setChange(!theme)}  className="form-check-input " type="checkbox" />
        </div>

        <div className="profile__form-bottom mt-5">
                <button onClick={hendleSettings} className="settigs-button">{btn}</button>
            </div>



      </div>
    </>
  )
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