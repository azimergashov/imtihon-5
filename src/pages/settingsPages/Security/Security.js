
import { Outlet } from 'react-router-dom'
import { SecurityHeader } from '../../../components'
import '../Profile/profile.scss'
import './security.scss'


export const Security = () => {
    return(
        <>
        <h1>Security</h1>
        <div className='profile'>
            <div className='container '>
            <h1>Profile</h1>
                <SecurityHeader/>
                <div className='profile__wrapper'>

                    <Outlet/>

                </div>
            </div>
        </div>

        </>
    )
}