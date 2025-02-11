import React from 'react'
import { FaEnvelope, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'
import { FaLocationPin, FaLocationPinLock, FaXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer>
      <div className='footer1'>
        <div>
          <div className="logo">Logo</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut alias veniam reprehenderit.</p>
        </div>
        <div className='discover'>
          <h4>Discover</h4>
          <Link to='/'>Home</Link>
          <Link to='/tours'>Tours</Link>
          <Link to='/safaris'>Safaris</Link>
          <Link to='/contact'>Contact</Link>
          <Link to='/about'>About</Link>
        </div>
        <div className='quick-links'>
          <h4>Quick Links</h4>
          <Link>Gallery</Link>
          <Link>Login</Link>
          <Link>Register</Link>
        </div>
        <div className='contact'>
          <h4>Contact</h4>
          <div><FaLocationPin/><span>Address:</span> Ukunda, Diani</div>
          <div><FaEnvelope/><span>Email:</span> info@zuruafricasafaris.com</div>
          <div><FaPhone/><span>Phone:</span>+254 100 434 316</div>
        </div>
      </div>
      <div className='footer2'>
        <p>Copyright © 2025 Zuru Africa Safaris. All Rights Reserved. </p>
        <div className="social-links">
          <a href="http://facebook.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaFacebook/></a>
          <a href="http://instagram.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
          <a href="http://x.com/juelssafaris" target="_blank" rel="noopener noreferrer"><FaXTwitter/></a>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer