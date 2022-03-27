import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  let name, value; // for input fields
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = (e) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
    } else {
      axios
        .post("http://localhost:4000/user/signup", user)
        .then((res) => {
          if (res.data.success) {
            alert("Successfully registered");
            navigate("/login");
          } else {
            alert("Error occured while registering");
          }
        })
        .catch((err) => {
          if (err.response.status === 409) {
            alert("User already exists");
          } else if (err.response.status === 406) {
            alert("Passwords do not match");
          } else {
            alert("Error occured while registering");
          }
        });
    }
  };

  return (
    <div className="signup">
      <div className="signup-container">
        <h2>Signup</h2>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            id="name"
            autoComplete="off"
            value={user.name}
            onChange={handleInputs}
          />
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            id="email"
            autoComplete="off"
            value={user.email}
            onChange={handleInputs}
          />
          <input
            type="phone"
            placeholder="Your Phone"
            name="phone"
            id="phone"
            autoComplete="off"
            value={user.phone}
            onChange={handleInputs}
          />
          <input
            type="password"
            placeholder="Your Password"
            name="password"
            id="password"
            autoComplete="off"
            value={user.password}
            onChange={handleInputs}
          />
          <input
            type="password"
            placeholder="Confirm Your Password"
            name="confirmPassword"
            id="confirmPassword"
            autoComplete="off"
            value={user.confirmPassword}
            onChange={handleInputs}
          />
          <button onClick={postData}>Signup</button>
        </form>
        <Link className="signup-registered" to="/login">
          I am already registered
        </Link>
      </div>
    </div>
  );
};

export default Signup;
