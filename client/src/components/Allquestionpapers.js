import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import '../CSS/Homepapers.css'

function Allquestionpapers() {

    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/uploaddata').then((res)=>{
            console.log(res.data)
            setdata(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
  return (
    <div className='flex'>
        {
            
                    data.length>0?
                    data.map((serviceItem,serviceIndex)=>{
                        return(
                            <div className='card-papers'>
                            <div className='semester'>Semester: {serviceItem?.semester}</div>
                            <div className='branch'>Branch: {serviceItem?.branch}</div>
                            <div className='subject'>Subject: {serviceItem?.subject}</div>
                            <button type="button" class="btn btn-light" style={{textDecoration:'none',color:'inherit'}}><Link to={`/singlepdfdata/${serviceItem._id}`}>Go</Link></button>

                            </div>
                        )
                        })
                    :'no data found'}
        </div> 
    
  )
}

export default Allquestionpapers