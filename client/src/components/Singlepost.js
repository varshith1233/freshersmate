import React,{useState} from 'react'
import {Link, useAsyncError} from 'react-router-dom'
import '../CSS/Singlepost.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';

function Singlepost() {
  
  const [data,setdata]=useState([])
  const {id}=useParams();
  const url=`http://localhost:8000/${data.imageurl}`
  useEffect(()=>{
    const fetchdata=async ()=>{
      axios.get(`http://localhost:8000/b/${id}`).then((res)=>{
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
       <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src={url}
          alt=""
        />
         

        <h1 className="singlePostTitle">{data.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span>
            Author:
            <b className="singlePostAuthor">
                Varshith
            </b>
          </span>
          <span>1 day ago</span>
        </div >
        <div className='post-desc'>
        {data.desc}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Singlepost