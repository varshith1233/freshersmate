import React from 'react'
import '../CSS/Navbar.css'
import {Link } from 'react-router-dom';


function Navbar() {
  return (
    <div>
        <nav class="navbar bg-body-tertiary">
        <div class="container justify-content-space-between plr-10 ptb-20 bg-navbar">
            <div class="heading">Freshermate</div>
            <div className='container'>
                <div className=' pl-7 nav-links'><Link  className='nav' to='/home'>Home</Link ></div>
                <div className=' pl-7 nav-links'><Link  className='nav' to='/homepapers'>Question papers</Link ></div>
                <div className=' pl-7 nav-links'><Link  className='nav' to='/uploadpapers'>Upload Questionpaper</Link ></div>
                {/* <div className=' pl-7 nav-links'><Link  className='nav' to='/material'>Material</Link ></div> */}
                <div className=' pl-7 nav-links'><Link  className='nav' to='/blog'>Createblog</Link ></div>
                <div className=' pl-7 nav-links'><Link  className='nav' to='/'>Log out</Link ></div>
                
                {/* {
                  <div>localStorage.getItem('type') </div>
                  
                } */}
            </div>
        </div>
        </nav>


    </div>
  )
}

export default Navbar