
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../../hook/useAuth'
import '../settingsHeader.scss'


export  const ProfileHeader = () =>{

    const {language} = useAuth()


let  profile= ''
let security= ''
let settings= ''
if(language ==='eng'){
 profile= 'My Profile'
 security= 'Security'
 settings= 'Settings'
}if(language === 'rus'){
 profile= 'Мой Профил'
 security= 'Безопасность'
 settings= 'Настройки'
}if(language === 'uzb'){

  profile= 'Mening Profilim'
  security= 'Xafsizlik'
  settings= 'Sozlamalar'
}
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

                </header>

        </>
    )
}