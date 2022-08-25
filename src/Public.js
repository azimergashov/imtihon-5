
import { Register } from "./pages/registerPage/Register";
import {Login} from './pages/loginPage/Login'
import { Route, Routes } from "react-router-dom";

export const Public = () => {
    return (
        <>

        <Routes>
            <Route path="/" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>

        </Routes>
        </>
    )
}