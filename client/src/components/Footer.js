import React from 'react'
import '../CSS/Footer.css'

function Footer() {
  return (
    <div className='main-body'>
        <div className='thanking-class'>
            Thanks for using our website
        </div>
        <div className='follow-class'>
            Follow us on social media
        </div>
        <div className='icons-fa'>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
        <div className='line-1'>
          <hr/>
        </div>
        <div className='text-1'>
          @copyright claimed
        </div>


    </div>
  )
}

export default Footer