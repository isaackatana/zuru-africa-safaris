import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import SafariList from './SafariList';
import { FaFilter, FaList, FaPlus, FaSearch } from 'react-icons/fa';
import Blog from './Blog';

function Safaris() {
  
  return (
    <>
    <Helmet>
      <title>Zuru Africa | Safaris</title>
    </Helmet>
    <div className="safaris">
      <div className='filter-wrapper'>
          <div className="filter-list">
            <FaList/>
          </div>
          <button><FaPlus/></button>
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