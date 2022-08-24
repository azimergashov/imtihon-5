import { NavLink } from 'react-router-dom'
import '../settingsHeader.scss'

export  const SettingsHeader = () =>{
    return (
        <>

            <header className='profile__header'>
                    <nav>
                        <ul className='d-flex align-items-center list-unstyled m-0 p-0'>
                            <li className='profile__item'>
                                <NavLink to='/settings/' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>1</span> My account
                                </NavLink>
                            </li>

                            <li className='settings__item'>
                                <NavLink to='/settings/security' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>2</span> Security
                                </NavLink>
                            </li>

                            <li className='settings__item'>
                                <NavLink to='/settings/settings' className={({isActive}) => isActive ? "profile__item-link-active" : "profile__item-link"}>
                                    <span className='profile__item-span'>3</span> Settings
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

        </>
    )
}