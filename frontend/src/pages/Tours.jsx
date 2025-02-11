import React from 'react'
import { Helmet } from 'react-helmet'
import { FaSearch } from 'react-icons/fa'

function Tours() {
  return (
    <>
    <Helmet>
        <title>Juels | Tours</title>
    </Helmet>
    <div className="tours">
      <div className="search-bar">
          <input type="text" placeholder='Search Tours'/>
          <div><FaSearch/></div>
        </div>      
    </div>
    </>
  )
}

export default Tours