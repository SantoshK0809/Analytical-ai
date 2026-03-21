import React from "react";
import "../auth.form.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";

const Login = () => {
  const { loading, handleLogin } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await handleLogin({email, password})
    // navigate('/');

     await handleLogin({ email, password });

    //if (success) {
      navigate("/");
    //}
  };

  if (loading) {
  return (
    // <div className="form-container skeleton">
    //   <div className="skeleton-title"></div>
    //   <div className="skeleton-input"></div>
    //   <div className="skeleton-input"></div>
    //   <div className="skeleton-button"></div>
    // </div>
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Logging you in...</p>
    </div>
  );
}
  return (
    <main>
      <div className="form-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              placeholder="Enter email address"
              id="email"
              name="email"
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              placeholder="Enter password"
              id="password"
              name="password"
            />
          </div>
          <button className="button primary-button">Login</button>
        </form>
        <p>
          Don't have an account ? <Link to={"/register"}> Register </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
