import "../CSS/Signin.css"
import React,{useState} from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Signup() {
    const navigate=useNavigate()
    const [username,setusername]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')

   
    

    const register=()=>{
        console.log(username,password,email);
        axios.post('http://localhost:8000/register',{
            username:username,
            password,
            email
        }).then((res)=>{
            console.log(res.data);
            navigate()
        }).catch((err)=>{
            console.log(err)
        })
    }

  return (
    <div>
        
        <section className="Form my-4 mx-5">
        <div> 
                <div className="row no-gutters">
                    <div className="col-lg-5 px-5 pt-5">
                        <img src="https://images.pexels.com/photos/4240497/pexels-photo-4240497.jpeg?auto=compress&cs=tinysrgb&w=600" className="image-fluid" alt="" />
                    </div>
                    <div className=" fill-the-form col-lg-7 px-5 pt-3">
                        <div className="heading-text-1">
                        <h1 className="font-weight-bold py-2" style={{justifiycontent:"centre"}}> Freshermate</h1>
                        </div>
                        <div className="container-1">

                        <h3 className="font-weight-bold py-3">Sign up to your Account</h3>
                       <form action="">
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="text" name="username" value={username} onChange={(e)=>{setusername(e.target.value)}} placeholder="Username" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row input-box-1">
                                <div className="col-lg-7">
                                    <input type="email" name="email" value={email} onChange={(e)=>{setemail(e.target.value)}}  placeholder="Email-Address" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row" style={{width:'400px'}}>
                                <div className="col-lg-7">
                                    <input type="Password" name="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Password" className="form-control my-3 p-2" required/>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="col-lg-7">
                                    <Link to='/'>
                                    <button type="button" onClick={register} className="btn1 mt-3 mb-4">Register</button>
                                    </Link>
                                </div>
                            </div>
                            <Link to='/'>
                            <p>Don't have an account <a href="">Log in</a></p>
                            </Link>
                       </form>
                        </div>
                    </div>
                </div>
          </div>
      </section>


    </div>
  )
}

export default Signup