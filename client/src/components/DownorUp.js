import React from 'react'
import { Link } from 'react-router-dom'
function DownorUp() {
  return (
    <div>
    <div class="row row-cols-1 row-cols-md-3 g-4" style={{height:"700px",textAlign:"center",justifyContent:"center",marginTop:"50px"}}>
        <div class="col" style={{marginTop:"30px",marginBottom:"50px",marginright:"100px",boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.5)"}}>
            <div class="card h-100">
            <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Upload</h5>
                <p class="card-text">Upload any new content that is not available in the website related to this branch and semester</p>
            </div>
            <Link to='/upload'>
            <button type="button" class="btn btn-outline-dark">upload</button>
            </Link>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
           
    </div>
        <div class="col" style={{marginTop:"30px",marginBottom:"50px",marginLeft:"100px",boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.5)"}}>
            <div class="card h-100">
            <img src="https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=600" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Download</h5>
                <p class="card-text">Download any material of any subject from here related to this branch and semester.</p>
            </div>
            <button type="button" class="btn btn-outline-dark">Download</button>
            <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
            </div>
            </div>
            
        </div>
    </div>
</div>
  )
}

export default DownorUp