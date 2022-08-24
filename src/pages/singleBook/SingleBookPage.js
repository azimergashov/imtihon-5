import {  Route, Routes } from "react-router-dom";
import { Header, SingleBookNav, SingleBookCenterOne, SingleBookCenterThree, SingleBookCenterTwo } from "../../components";
import { SingleBook } from "./SingleBook";
import "./singleBook.scss";

export const SingleBookPage = () => {
  return (
    <>

      <div className="single-book">
      <Header />
        <div className="container">

            <SingleBook/>
          <div className="single-book-center "><SingleBookNav /></div>

         <Routes>
          <Route path="/single-book-one" element={<SingleBookCenterOne/>}/>
          <Route path="/single-book-two" element={<SingleBookCenterTwo/>}/>
          <Route path="/single-book-three" element={<SingleBookCenterThree/>}/>
         </Routes>

        </div>
      </div>
    </>
  );
};
