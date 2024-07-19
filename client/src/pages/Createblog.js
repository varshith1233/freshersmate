import React,{useState} from 'react';
import '../CSS/Createblog.css'
import axios from 'axios'
import Navbar from '../components/Navbar';


function Createblog() {
     const [title,settitle]=useState('')
     const [desc,setdesc]=useState('')
     const [image,setimage]=useState('')
     console.log(image,12)

    const handleChange=(e)=>{
      settitle(e.target.value)
    }

    const handleChangedesc=(e)=>{
      setdesc(e.target.value)
    }

    const handleClick=()=>{
      console.log(title,desc,image,19)

      const formData=new FormData()
      formData.append('title',title)
      formData.append('desc',desc)
      formData.append('image',image)
      axios.post('http://localhost:8000/blogs',
      formData
      ).then((res)=>{
        console.log(res.data)
      }).catch((err)=>{
        console.log(err)
      })
    }
  return (
    <div>
      <Navbar/>
      
    <div className='admin-card'>
        <input  value={title} onChange={handleChange} className='input-admin' type="text" placeholder='title'/><br/>
        <textarea  value={desc} onChange={handleChangedesc} className='input-admin-desc' type="text" placeholder='description'/><br/> 
        <input type='file' className='input-image' onChange={(e)=>{setimage(e.target.files[0])}} /><br/>
        <button onClick={handleClick} className='btn-btn-outline-dark'>add</button>
        

    </div>
    </div>
  )
}

export default Createblog