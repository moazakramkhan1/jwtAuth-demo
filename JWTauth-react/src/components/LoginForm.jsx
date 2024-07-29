import { useState } from "react"
import {useNavigate} from 'react-router-dom'


export const Login = ({setName})=>{
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [redirect,setRedirect] = useState(false)
 const navigate = useNavigate()

    const handleChangeEmail = (e)=>{
        setEmail(e.target.value)
     }
     const handleChangePassword = (e)=>{
        setPassword(e.target.value)
     }

     const submit = async (e)=>{
        e.preventDefault()
          await fetch("http://localhost:8000/api/login",{
            method: "POST",
            credentials: "include",
            headers: {"Content-Type" : "Application/json"},
            body: JSON.stringify(
               { 
                email,
                password
               })
        })
        setRedirect(true)
     }

     if(redirect){
        navigate("/home")
     }
    
    return(
        <div className="Register">
        <form onSubmit={submit}>
        <div className="container">
        <h2>Welcome to Login Page</h2>
        <label>Email</label>
        <input type="text" placeholder="email" name="email" onChange={handleChangeEmail}></input>
        <label>Password</label>
        <input type="text" placeholder="password" name="password" onChange={handleChangePassword}></input>
        <input type="submit" className='submit'/>
        </div>
        </form>
    </div>
    )
}