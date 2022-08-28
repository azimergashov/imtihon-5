import { NavLink, Outlet } from "react-router-dom";
import { useAuth } from "../../hook/useAuth";
import './singleBookNav.scss'

export const SingleBookNav = () =>{

  const {theme} = useAuth()

  let linkLight = ""

  if(!theme){
    linkLight = "single-book-center__item-link-light"
  }else{
    linkLight = "single-book-center__item-link "
  }

  let linkLightActive = ""

  if(!theme){
    linkLightActive = " single-book-center__item-link-active"
  }else{
    linkLightActive = "single-book-center__item-link-active "
  }

    return(
        <>
         <ul className="d-flex align-align-items-center list-unstyled mb-5">
              <li className="single-book-center__item">
                <NavLink to='/single-book/ ' className={({isActive}) => isActive ? linkLightActive : `${linkLight} single-book--link-active`}>
                    About author
                </NavLink>
              </li>

              <li className="single-book-center__item ms-5">
                <NavLink to='single-book-two' className={({isActive}) => isActive ? linkLightActive : linkLight}>
                  Quotes from books
                </NavLink >
              </li>

              <li className="single-book-center__item ms-5">
                <NavLink to='single-book-three' className={({isActive}) => isActive ? linkLightActive : linkLight}>
                    Readers's review
                </NavLink>
              </li>
            </ul>

            <Outlet/>


        </>
    )
}