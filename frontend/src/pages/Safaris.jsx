import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import SafariList from './SafariList';
import { FaArrowLeft, FaFilter, FaList, FaPlus, FaSearch } from 'react-icons/fa';
import Blog from './Blog';
import { Link } from 'react-router-dom';


function Safaris() {
  
  return (
    <>
    <Helmet>
      <title>Zuru Africa - Safaris</title>
    </Helmet>
    <div className="safaris">
      <div className='filter-wrapper'>
        <Link to='/'>
         <FaArrowLeft/>
        </Link>
        <nav>
          <div className="filter-list">
            <FaList/>
          </div>
          <button><FaPlus/></button>
        </nav>
      </div>
      <div className="container">  
        <SafariList/>
      </div>
    </div>
    <Blog/>
    </>
  )
}

export default Safaris