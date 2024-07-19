import "../CSS/Signin.css"
import React,{useState} from 'react'
import {Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Signin() {
    const navigate=useNavigate()
   const [username,setusername]=useState('')
   const [password,setpassword]=useState('')

    

    const login=()=>{
        axios.post('http://localhost:8000/login',{
            username:username,
            password:password
        }).then((res)=>{
            console.log(res.data)
            // localStorage.setItem('type',res.data.username)
            // localStorage.setItem('token',res.data.token)
        
            navigate('/home');
            
        }).catch((err)=>{
            console.log(err)
            navigate('/signin')
        })
    }



  return (
      <section className="Form my-4 mx-5">
        <div className="container"> 
                <div className="row no-gutters">
                     <div className="col-lg-5 px-5 pt-5 image-pic">
                        <img src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600" className="image-fluid" alt="" />
                    </div> 
                    <div className=" fill-the-form col-lg-7 px-5 pt-3">
                        <h1 className="font-weight-bold py-2 heading-text-1" style={{justifiycontent:"centre"}}> Freshermate</h1>
                        <div className="container-1">

                        <h3 className="font-weight-bold py-3">Sign in to your Account</h3>
                       <form action="">
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="username" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="Password" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    {/* <Link to='/home'> */}
                                    <button type="button" onClick={login} className="btn1 mt-3 mb-4">Signin</button>
                                    {/* </Link> */}
                                </div>
                            </div>
                            <Link to='/register'>
                            <p>Don't have an account <a href="">  Register here</a></p>
                            </Link>
                       </form>
                    </div>
                        </div>
                </div>
          </div>
      </section>
    
  )
}
