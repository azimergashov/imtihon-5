import axios from "axios";
import { useEffect, useState } from "react";
import {  NavLink, Route, Routes } from "react-router-dom";
import { Header, SingleBookNav, SingleBookCenterOne, SingleBookCenterThree, SingleBookCenterTwo } from "../../components";
import { CardBook } from "../../components/Card";
import { useAuth } from "../../hook/useAuth";
import { SingleBook } from "./SingleBook";
import "./singleBook.scss";

export const SingleBookPage = () => {
    const {token} = useAuth()
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://book-service-layer.herokuapp.com/book/genreId/1', {
            headers: {
                Authorization: token,
            }
        }).then(data => setData(data.data)).catch(er => console.log(er))
    }, [token])


  return (
    <>

      <div className="single-book">
      <Header />
        <div className="container">

            <SingleBook/>
          <div className="single-book-center mt-5"><SingleBookNav />
          <Routes>
          <Route path="/" element={<SingleBookCenterOne/>}/>
          <Route path="/single-book-two" element={<SingleBookCenterTwo/>}/>
          <Route path="/single-book-three" element={<SingleBookCenterThree/>}/>
         </Routes>
          </div>

          <div className="single-book-bottom mt-5">
            <div className="d-flex justify-content-between align-items-center pe-5">
                 <h4 className="single-book-bottom__heading">Sizga yoqishi mumkin</h4>

                 <NavLink to="/books" className='text-decoration-none text-light me-5' >
                    Barchasi
                 </NavLink>
            </div>

            {
                data.length &&
                <ul className="d-flex justify-content-between flex-wrap">
                    {
                        data.map((e) =>(
                            <CardBook e={e} key={e.id}/>
                        ))
                    }
                </ul>
            }
          </div>



        </div>
      </div>
    </>
  );
};
