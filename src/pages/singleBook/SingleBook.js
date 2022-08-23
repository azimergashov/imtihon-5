import { Outlet } from "react-router-dom";
import { Header } from "../../components";
import "./singleBook.scss";
import iconStar from "../../images/icon-star.png"
import SingleImg from '../../images/single-book.png'
import electronKitob from '../../images/elektron-kitob.png'
import qogozKitob from '../../images/qogoz-kitob.png'
import audioKitob from '../../images/audio-kitob.png'
import { useAuth } from "../../hook/useAuth";
import { useEffect, useState } from "react";
import axios from "axios";



export const SingleBook = () => {
    const {bookId, token} = useAuth()
    const [book, setBook ] = useState([])

    useEffect(() =>{
        axios.get(`https://book-service-layer.herokuapp.com/book/bookId/${bookId}`, {
            headers:{
                Authorization: token,
            },
        }).then(data => setBook(data.data)).catch(er => console.log(er))
    }, [token, bookId])
    let genre = 'Tarixiy'
   if(book.genre_id === 1){
    genre = "Temuriylar davri"
   }else if(book.genre_id === 2){
    genre = "Jadidlar adabiyoti"
   }else if(book.genre_id === 3){
    genre = "Soved davri"
   }else if(book.genre_id === 4){
    genre = "Mustaqillik davri"
   }
  return (
    <>
      <div className="single-book">
        <Header />
        <Outlet />
        <div className="container">
          <div className="single-book__top">
            <img className="single-book__top-img" src={`https://book-service-layer.herokuapp.com/${book.image}`} alt="single-book" width={520} height={810}/>

            <div className="single-book__top-right">
              <div>
                <h1 className="single-book__top-right-heading">{book.title}</h1>
                <p className="single-book__top-right-heading-bottom single--bottom">Javlon Jovliyev <span className="text-light align-items-center ps-2">| <img className="mb-1 ms-2 me-1" src={iconStar} alt="star-book" width={12} height={12} />    4.1</span></p>

                <ul className="list-unstyled">
                  <li className="single-book__top-item">
                    Sahifalar soni:
                    <span className="single-book__top-item-span">{book.page}</span>
                  </li>
                  <li className="single-book__top-item">
                    Chop etilgan:
                    <span className="single-book__top-item-span">{book.year}</span>
                  </li>
                  <li className="single-book__top-item">
                    Janri:
                    <span className="single-book__top-item-span">{genre}</span>
                  </li>
                  <li className="single-book__top-item">
                    Nashriyot
                    <span className="single-book__top-item-span">
                      Nihol nashr
                    </span>
                  </li>
                </ul>

                <div className="d-flex">
                    <p className="single-book__top-right-heading-bottom  d-flex single--bot">To’liq ma’lumot <span className="text-light ms-3">↓</span></p>
                    <div className="single-book__top-item-bottom"></div>
                </div>

              </div>
              <p className="single-book__top-right-text">
                    {book.description}
                </p>

                <h4 className="single-book__top-right-heading-bottom mt-5">Mavjud formatlar</h4>

                <div className="d-flex align-items-center justify-content-between">
                    <ul className="d-flex align-items-center list-unstyled">
                        <li >
                            <div className="w-100 text-center mb-2">
                            <img src={qogozKitob} alt="img" width={24} height={24} />
                            </div>
                            <p className="single-book__top-right-text-bottom text-light">Qog’oz kitob</p>
                            <p className="single-book__top-right-text-bottom m-0 p-0 text-center">{book.price} $</p>
                        </li>

                        <li className="ms-3 ">
                            <div className="w-100 text-center mb-2">
                             <img src={audioKitob} alt="img" width={24} height={24} />
                            </div>
                            <p className="single-book__top-right-text-bottom text-light">Audiokitob</p>
                            <p className="single-book__top-right-text-bottom m-0 p-0">6:23 soat</p>
                        </li>

                        <li className="ms-3">
                            <div className="w-100 text-center mb-2">
                              <img src={electronKitob} alt="img" width={24} height={24} />
                            </div>
                            <p className="single-book__top-right-text-bottom text-light">Elektron</p>
                            <p className="single-book__top-right-text-bottom m-0 p-0">pdf, epub</p>
                        </li>
                    </ul>


                    <button className=" single-book__top-right-button">Javonga qo’shish </button>
                </div>

            </div>

          </div>
          single book
        </div>
      </div>
    </>
  );
};
