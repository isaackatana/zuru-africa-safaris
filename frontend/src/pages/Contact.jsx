import React from 'react'
import { Helmet } from 'react-helmet'

function Contact() {
  return (
    <>
    <Helmet>
        <title>Juels | Contact</title>
    </Helmet>
    <div className="contact">
        <div className="container">
            <form action="submit">
                <div><input type="text" placeholder='First name'/><input type="text" placeholder='Last name'/></div>
                <input type="email" name="" id="" placeholder='Email'/>
                <textarea name="" id="" placeholder='Message ...'></textarea>
                <div className='action'>
                    <input type="file" name="" id="" />
                    <button>Send</button>
                </div>
            </form>
        </div>
    </div>
    </>
  )
}

export default Contact