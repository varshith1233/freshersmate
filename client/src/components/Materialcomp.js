import React from 'react'
import {Link} from 'react-router-dom'
function Materialcomp(props) {
  return (
    <div>
        <div classNameName='container '>
            <div className="card-group " style={{marginLeft:"25px",marginTop:"25px"}}>
                <div className="card " style={{marginRight:"25px",borderRadius:"4px",boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.5)",height:"500px",textDecoration:'none'}}>
                    <img src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"398px",height:"260px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.name1}</h5>
                        <p className="card-text">{props.desc1}</p>
                        <div><Link to='/semester'>Select</Link></div>
                        <p className="card-text"><small className="text-muted">Last updat mins ago</small></p>

                    </div>
                </div>
            <div className="card " style={{marginRight:"25px",borderRadius:"4px",boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.5)",height:"500px",textDecoration:'none'}}>
                <img src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"398px",height:"260px"}}/>
                <div className="card-body  ">
                    <h5 className="card-title">{props.name2}</h5>
                    <p className="card-text">{props.desc2}</p>
                    <div><Link to='/semester'>Select</Link></div>
                    <p className="card-text"><small className="text-muted">Last updat mins ago</small></p>

                </div>
            </div>
            <div className="card  " style={{marginRight:"25px",borderRadius:"4px",boxShadow:"1px 4px 8px rgba(0, 0, 0, 0.5)",height:"500px",textDecoration:'none'}}>
                <img src="https://images.pexels.com/photos/956981/milky-way-starry-sky-night-sky-star-956981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="..." style={{width:"399px",height:"260px"}}/>
                <div className="card-body">
                <h5 className="card-title">{props.name3}</h5>
                <p className="card-text">{props.desc3}</p>
                <div><Link to='/semester'>Select</Link></div>
                <p className="card-text"><small className="text-muted">Last updat mins ago</small></p>

                </div>
            </div>
        </div>  
    </div>
    </div>
  )
}

export default Materialcomp