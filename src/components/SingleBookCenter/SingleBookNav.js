import { NavLink, Outlet } from "react-router-dom";
import './singleBookNav.scss'

export const SingleBookNav = () =>{
    return(
        <>
         <ul className="d-flex align-align-items-center list-unstyled mb-5">
              <li className="single-book-center__item">
                <NavLink to=' ' className={({isActive}) => isActive ? 'single-book-center__item-link-active ' : 'single-book-center__item-link single-book--link-active'}>
                    About author
                </NavLink>
              </li>

              <li className="single-book-center__item ms-5">
                <NavLink to='single-book-two' className={({isActive}) => isActive ? 'single-book-center__item-link-active' : 'single-book-center__item-link'}>
                  Quotes from books
                </NavLink >
              </li>

              <li className="single-book-center__item ms-5">
                <NavLink to='single-book-three' className={({isActive}) => isActive ? 'single-book-center__item-link-active' : 'single-book-center__item-link'}>
                    Readers's review
                </NavLink>
              </li>
            </ul>

            <Outlet/>


        </>
    )
}