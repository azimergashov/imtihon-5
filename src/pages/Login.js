import { useRef } from "react"
import axios from 'axios'

export const Login = () =>{

    const elLoginEmail = useRef()
    const elLoginPassword = useRef()

    const  loginSubmit = (evt) =>{
        evt.preventDefault()
        axios
        .post('https://book-service-layer.herokuapp.com/user/login', {
           body:{
             "email": elLoginEmail.current.value,
             "password": elLoginPassword.current.value
           }
        }).then(data => console.log(data)).catch(er => console.log(er))


    }


    return(
        <>
            <h1>login</h1>

            <form onSubmit={loginSubmit} >
                <input ref={elLoginEmail} type="email"  placeholder="email"/>
                <input ref={elLoginPassword} type="password"  placeholder="password"/>
                <button type="submit">send</button>
            </form>
        </>
    )
}