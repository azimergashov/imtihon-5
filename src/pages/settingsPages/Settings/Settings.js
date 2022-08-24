


import { Outlet } from 'react-router-dom'
import { SettingsHeader } from '../../../components'
import '../Profile/profile.scss'
import './settings.scss'

export const Settings = () =>{
    return(
        <>
        <h1>Settings</h1>

        <div className='profile'>
            <div className='container '>
            <h1>Profile</h1>
                <SettingsHeader/>
                <div className='profile__wrapper'>
                    <Outlet/>
                </div>
            </div>
        </div>
        </>
    )
}