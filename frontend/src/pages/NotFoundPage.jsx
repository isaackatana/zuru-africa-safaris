import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
    <Helmet>
      <title>Page Not Found</title>
    </Helmet>
    <div className='not-found-page'>
      <div>
        <h1>404</h1>
        <h2>Page Not Found</h2>
      </div>
      <span>Return to <Link to='/'>Home</Link></span>
    </div>
    </>
  )
}

export default NotFoundPage