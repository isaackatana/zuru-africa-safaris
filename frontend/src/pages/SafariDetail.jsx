import { useState } from 'react';
import Blog from './Blog';
import { FaArrowLeft, FaList, FaLocationArrow, FaPlus } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function SafariDetail() {
  
  return (
    <>
    <div className="safari-detail">
      <div className='filter-wrapper'>
        <Link to='/safaris'>
          <FaArrowLeft/>
        </Link>
        <nav>
          <div className="filter-list">
            <FaList/>
          </div>
          <button><FaPlus/></button>
        </nav>
      </div>
        <div className="wrapper">
            <div className="location-arrow">
              <FaLocationDot/>Diani Beach, Ukunda
            </div>
            <img src='https://kenyaincentivessafaris.com/wp-content/uploads/2023/09/Mombasa-Beach-safari-1024x513.jpg' alt="" />
            <div className="info">
                <h2>name</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugiat pariatur ratione doloKre nisi ut. Porro, </p>
                <h2>Ksh. {}</h2>
                <form action="submit">
                  <div className="user-info">
                    <div className="names">
                      <input type="text" placeholder='First name' required/>
                      <input type="text" placeholder='Last name' required/>
                    </div>
                    <input type="text" placeholder='Phone number' required/>
                    <div className='booking-date'>
                      <input type="date" name="" id="" required/>
                      <input type="number" placeholder='Guest' required/>
                    </div>
                  </div>
                  <div className="book-now">
                    <div><p>Ksh. {} + 1 Person</p><h3>ksh. {}</h3></div>
                    <div><p>Service charge</p><h3>ksh. {}</h3></div>
                    <div><p>Amount</p><h3>ksh. {}</h3></div>
                    <div className="book-btn">
                      <button>Book Now</button>
                    </div>
                  </div>
                </form>
            </div>
        </div>
    </div>
    <Blog/>
    </>
  )
}

export default SafariDetail