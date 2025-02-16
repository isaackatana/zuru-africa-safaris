import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleRight, FaBook, FaCaretRight, FaLocationArrow } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const photos = [
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294329.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294330.jpg',
  'https://idsb.tmgrup.com.tr/ly/uploads/images/2023/09/29/294328.jpg',
];


function SafariList() {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);

  return (
    <>
    <div>
      <div className="wrapper">
        <Link to='/safaris/:id' className='carousel'>
          {photos.map((photo, index) => (
            <div key={index} className={`carousel-slide ${index === currentIndex ? 'active' : ''}`} >
              <img src={photo} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </Link>
        <div className='location-arrow'>
          <FaLocationDot/> Diani Beach, Ukunda
        </div>
        <div className="info">
          <span><h2>4 Left - 300$</h2> </span>
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