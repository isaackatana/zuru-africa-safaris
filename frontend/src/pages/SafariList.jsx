import React from 'react'
import { FaArrowAltCircleRight, FaBook, FaCaretRight, FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function SafariList() {
  return (
    <>
    <div>
      <div className="wrapper">
        <Link to='/safaris/:id'>
        <img src="https://kenyaincentivessafaris.com/wp-content/uploads/2023/09/Mombasa-Beach-safari-1024x513.jpg" alt="" />
        </Link>
        <div className='location-arrow'>
          <FaLocationDot/> Diani Beach, Ukunda
        </div>
        <div className="info">
          <span><h2>From 300$</h2> </span>
          <div className='bio'>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam deleniti eligendi modi iste?</p>
          </div>
          
        </div>
      </div>
    </div>
    </>
  )
}

export default SafariList