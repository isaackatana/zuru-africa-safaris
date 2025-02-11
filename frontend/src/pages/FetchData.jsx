import React from 'react'

import { useState, useEffect } from 'react'

function FetchData() {

    const [backendData, setBackendData] = useState([{}]);

    useEffect(()=>{
        fetch('/api/users').then(
            response => response.json()
        ).then (
            data => {
                setBackendData(data)
            }
        )
    },[])

  return (
    <>
    {(typeof backendData.users === 'undefined') ? (
        <p>Loading ...</p>
    ) : (
        backendData.users.map((user, i) =>(
            <p key={i}>{user}</p>
        ))
    )}
    </>
  )
}

export default FetchData