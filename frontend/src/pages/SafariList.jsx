import React from 'react'
import { FaArrowAltCircleRight, FaBook, FaCaretRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function SafariList() {
  return (
    <>
    <div>
      <div className="wrapper">
        <Link to='/safaris/:id'>
        <img src="https://kenyaincentivessafaris.com/wp-content/uploads/2023/09/Mombasa-Beach-safari-1024x513.jpg" alt="" />
        </Link>
        <div className="info">
          <div>
            <h3>Name</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam deleniti eligendi modi iste?</p>
          </div>
          <span>from $ 300 <FaCaretRight/></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default SafariList