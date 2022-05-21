import React from "react";
import { useState, useEffect } from "react";
import { FaSignInAlt } from "react-icons/fa";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) => {
    setFormData((prevState)=>({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault()
  };

  return (
    <>
      <section className="heading">
        <h2>
          <FaSignInAlt /> Log In
        </h2>
        <p>Please Log In</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input type="email" className="form-control" id="email" name="email" value={email} placeholder="Enter your email address" onChange={onChange} />
          </div>
          <div className="form-group">
            <input
              type="password" className="form-control" id="password" name="password" value={password} placeholder="Enter a password here" onChange={onChange} />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block">Log In</button>
          </div>
        </form>
      </section>
    </>
  )
};

export default Login;
