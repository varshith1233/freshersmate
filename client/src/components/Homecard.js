import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import '../CSS/Home.css'
import Carousel2 from './Carousel2'

function Homecard() {

    const [data,setdata]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/blogs').then((res)=>{
            console.log(res.data)
            setdata(res.data.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    

  return (
    <div>
        <Carousel2/>
    <div className='flex'>
        {
                    data.length>0?
                    data.map((serviceItem,serviceIndex)=>{
                        return(
                            <div className='card'>
                            <img src={`http://localhost:8000/${serviceItem?.imageurl}`}/>
                            <div className='title'>{serviceItem?.title}</div>
                            <div className='desc'>{serviceItem?.desc}</div>
                            <button type="button" class="btn btn-light" style={{textDecoration:'none',color:'inherit'}}><Link to={`/singlepost/${serviceItem._id}`}>Go</Link></button>

                            </div>
                        )
                        })
                    :'no data found'}
        </div> 
    </div>
        )
}

export default Homecard