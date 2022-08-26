
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../hook/useAuth'
import '../settingsHeader.scss'
import headerIcon from '../../../images/header-icon.png'
import SelectImg from "../../../images/select-img.png";
import axios from 'axios'
import { languages, languagesRus, languagesUzb } from '../../../languages'



export  const ProfileHeader = () =>{

    const {language, menu, setMenu, token} = useAuth()
    const [data, setData] = useState()


    useEffect(() => {
        const closeMenu = (evt) =>{
          console.log(evt);
            if(evt.code === "Escape"){
              setMenu(false)
            }
        }

        if(menu){
          window.addEventListener("keyup", closeMenu)
        }

        return () => window.removeEventListener("keyup", closeMenu)
      }, [menu])


      useEffect(() =>{
        axios.get('https://book-service-layer.herokuapp.com/user/me', {
          headers: {
            Authorization: token,
          }
        })
        .then(data => setData(data.data)).catch(er => console.log(er))
      },[token])


  const menuOpen = () =>{
    setMenu(!menu)
  }

  const navigate = useNavigate()

  const profileOpen = () =>{
    navigate("/profile/")
  }

  const securityOpen = () =>{
    navigate("/profile/security")
  }

  const settingsOpen = () =>{
    navigate("/profile/settings")
  }
  let boom = {}
  if(language === 'eng'){
    boom = {...languages}
  }if(language === 'rus'){
    boom = {...languagesRus}
  }if(language === 'uzb'){
    boom = {...languagesUzb}
  }

  const {menus, profile, security, settings, } = boom



  return (
        <>

                <header className='profile__header'>
                    <nav>
                        <ul className='d-flex align-items-center list-unstyled m-0 p-0'>
                            <li className='profile__item'>
                                <NavLink to='/profile/' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>1</span> {profile}
                                </NavLink>
                            </li>

                            <li className='profile__item'>
                                <NavLink to='/profile/security' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>2</span> {security}
                                </NavLink>
                            </li>

                            <li className='profile__item'>
                                <NavLink to='/profile/settings' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>3</span> {settings}
                                </NavLink>
                            </li>
                        </ul>

                    </nav>


                    <div className="d-flex align-items-center">
              <img
                className="header__select-img"
                src={ data?.image !== null ? `https://book-service-layer.herokuapp.com/${data?.image}` : SelectImg }
                alt=""
                width={48}
                height={48}
              />

              <button className="header__select" onClick={menuOpen}><img src={headerIcon} alt="header-icon" width={12} height={7}/></button>
              <div onClick={menuOpen} className={menu ? "header__select-bg " : "header__select-bg d-none"} ></div>

              <div className={menu ? "header__select-div" : "header__select-div d-none"}>
                <div className="header__select-menu"><p className="ps-2 pt-3 fs-5 ">{menus}</p>
                <button onClick={menuOpen} className="header__select-close bg-danger">&times;</button>
                </div>
                <ul className="list-unstyled m-0 p-0">
                  <li onClick={profileOpen} className="header__select-item">{profile}</li>
                  <li onClick={securityOpen} className="header__select-item">{security}</li>
                  <li onClick={settingsOpen} className="header__select-item">{settings}</li>
                </ul>
              </div>
            </div>

                </header>

        </>
    )
}