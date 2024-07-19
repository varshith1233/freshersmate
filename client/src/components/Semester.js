import React from 'react'
import {Link} from 'react-router-dom'

function Semester(props) {
  return (
    <div>
        <div class="row">
            <div class="col-sm-6 mb-3 mb-sm-0" >
                <div class="card" style={{width:"600px", height:"75px"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.title1}</h5>
                    <button><Link to='/downorup'>go</Link></button>
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card" style={{width:"600px", height:"75px"}}>
                <div class="card-body">
                    <h5 class="card-title">{props.title2}</h5>
                    <button><Link to='/downorup'>go</Link></button>
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Semester