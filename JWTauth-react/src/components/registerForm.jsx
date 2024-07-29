import { useState } from 'react'
import './register.css'
import {useNavigate} from 'react-router-dom'

export const Register = ()=>{
 const [name,setName] = useState("")
 const [email,setEmail] = useState("")
 const [password,setPassword] = useState("")
 const [redirect,setRedirect] = useState(false)
 const navigate = useNavigate()
 
 const handleChangeName = (e)=>{
    setName(e.target.value)
 }
 const handleChangeEmail = (e)=>{
    setEmail(e.target.value)
 }
 const handleChangePassword = (e)=>{
    setPassword(e.target.value)
 }

 const submit = async (e)=>{
    e.preventDefault()
    await fetch("http://localhost:8000/api/register",{
        method: "POST",
        headers: {"Content-Type" : "Application/json"},
        body: JSON.stringify(
           { name,
            email,
            password
           })
    })
    setRedirect(true)
 }

 if(redirect){
    navigate('/login')
 }

    return (
        <div className="Register">
            <form onSubmit={submit}>
            <div className="container">
            <h2>Welcome to Register Page</h2>
             <label>Name</label>
             <input type="text" placeholder="name" name="name" onChange={handleChangeName}></input>
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