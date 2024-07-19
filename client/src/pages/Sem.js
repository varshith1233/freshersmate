import React from 'react'
import Semester from '../components/Semester'
import Navbar from '../components/Navbar';
function Sem() {
  return (
    <div>
      <Navbar/>
        <div style={{marginTop:"25px",marginBottom:"25px",marginLeft:"25px",marginRight:"25PX",}}>
        <Semester title1="1st semester" title2="2nd semester"/>
        </div>
        <div style={{marginTop:"25px",marginBottom:"25px",marginLeft:"25px",marginRight:"25PX"}}>
        <Semester title1="3rd semester" title2="4rth semester"/>
        </div>
        <div style={{marginTop:"25px",marginBottom:"25px",marginLeft:"25px",marginRight:"25PX"}}>
        <Semester title1="5th semester" title2="6th semester"/>
        </div>
        <div style={{marginTop:"25px",marginBottom:"25px",marginLeft:"25px",marginRight:"25PX"}}>
        <Semester title1="7th semester" title2="8th semester"/>
        </div>
    </div>
  )
}

export default Sem