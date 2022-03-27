import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>
      <div className="home-container">
        <p className='pt-5'>WELCOME</p>
        <h1>To My TODO Application</h1>
      </div>
    </div>
  )
}

export default Home