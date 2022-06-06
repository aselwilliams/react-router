import React from 'react';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <h1>
            HomePage
        </h1>
        <Link to='/'>Home Page</Link>
    </div>
  )
}

export default Home