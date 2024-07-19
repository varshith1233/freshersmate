import React,{useState} from 'react'
import Navbar from '../components/Navbar'
import '../CSS/Createpapers.css'
import axios from 'axios';


function Uploadpapers() {
  const [semester,setsemester]=useState('');
  const [branch,setbranch]=useState('');
  const [subject,setsubject]=useState('');
  const [pdffile,setpdffile]=useState('');

  const handleChange=(e)=>{
    setsemester(e.target.value);
    
  }

  const handleChangeb=(e)=>{
    setbranch(e.target.value);
    
  }

  const handleChanges=(e)=>{
    setsubject(e.target.value);
    
  }


  const handleClick=()=>{
    console.log(semester,branch,subject,pdffile,19);
    const formData=new FormData()
    formData.append('semester',semester)
    formData.append('branch',branch)
    formData.append('subject',subject)
    formData.append('pdffile',pdffile)
    axios.post('http://localhost:8000/uploaddata',formData).then((res)=>{
      console.log(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
        <Navbar/>
        <div className='big-data'>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Options</label>
          <select class="form-select"  value={semester} onChange={handleChange} id="inputGroupSelect01">
            <option selected >Choose...</option>
            <option value="semester-one">Semester One</option>
            <option value="semester-two">Semester Two</option>
            <option value="semester-three">Semester Three</option>
            <option value="semester-four">Semester four</option>
            <option value="semester-five">Semester five</option>
            <option value="semester-six">Semester six</option>
            <option value="semester-seven">Semester seven</option>
            <option value="semester-eight">Semester eight</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <label class="input-group-text" for="inputGroupSelect01">Options</label>
          <select class="form-select" value={branch} onChange={handleChangeb} id="inputGroupSelect01">
            <option selected>Choose...</option>
            <option value="IT">IT</option>
            <option value="CSE">CSE</option>
            <option value="AIDS">AIDS</option>
            <option value="AIML">AIML</option>
            <option value="CIVIL">CIVIL</option>
            <option value="MECH">MECH</option>
            <option value="BIO_TECH">BIO-TECH</option>
            <option value="EEE">EEE</option>
            <option value="ECE">ECE</option>
            <option value="CHEMICAL">CHEMICAL</option>
          </select>
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">Subject</span>
          <input type="text" class="form-control" value={subject} onChange={handleChanges} aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        <div>
          <input type='file' onChange={(e)=>{setpdffile(e.target.files[0])}}/><br/>
        </div>
        <button onClick={handleClick}>add</button>
        </div>

    </div>
  )
}

export default Uploadpapers