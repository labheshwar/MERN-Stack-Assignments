import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const loginUser = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/user/login', {
      email: email,
      password: password
    }).then(res => {
      if (res.data.success) {
        alert('Successfully logged in')
        navigate('/todo');
      } else {
        alert('Invalid email or password');
      }
    }).catch(err => {
      if (err.response.status === 404) {
        alert('Invalid email or password')
      } else {
        alert('Error while logging in')
      }
    })

  }
  
  return (
    <div className="login">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <input
              type="email"
              placeholder="Your Email"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
            autoComplete="off"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            onClick={loginUser}
          >Login</button>
        </form>
        <Link className="signup-registered" to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login