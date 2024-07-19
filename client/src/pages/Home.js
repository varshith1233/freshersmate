import React from 'react'
import Homecard from '../components/Homecard'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar';
function Home() {

  const location=useLocation();
  return (
  <div>
    <Navbar/>
    <Homecard/>

  </div>
    
    
  )
}

export default Home