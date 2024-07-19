import React,{useState,useEffect} from 'react'
import Navbar from './Navbar';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../CSS/Qpapers.css'

function Singlepdfdata() {
    const [data,setdata]=useState([])
  const {id}=useParams();
  const url=`http://localhost:8000/${data.pdffile}`
  useEffect(()=>{
    const fetchdata=async ()=>{
      axios.get(`http://localhost:8000/p/${id}`).then((res)=>{
        console.log(res.data)
        setdata(res.data.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
    fetchdata();
  },[]) 
  return (
    <div>
        <Navbar/>
        {/* <div>
          <div className='heading-edit'>
          Semester:
          </div>
            {data.semester}
        </div>
        <div>
          <div className='heading-edit'>
          branch:
          </div>
            {data.branch}
        </div>
        <div>
          <div className='heading-edit'> 
          Subject:
          </div>
            {data.subject}
        </div> */}

        <div className="gallery-container">
        <div class="thumbnails"></div>
            <div class="thumb"></div>
        <div className='slides'>
           <img className='image-container'  src={url} alt=''/>
        </div>

        </div>
        

    </div>
  )
}

export default Singlepdfdata