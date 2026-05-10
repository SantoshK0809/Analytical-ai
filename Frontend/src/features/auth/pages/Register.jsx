import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { loading, handleRegister } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await handleRegister({ username, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <p>Registering...</p>
      </div>
    );
  }
  return (
    <main>
      <div className="form-container">
        <h1>Register</h1>
        {error && <p className="error-message" style={{ color: "red", marginBottom: "10px" }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              placeholder="Enter username"
              id="username"
              name="username"
            />
          </div>
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
          <button className="button primary-button">Register</button>
        </form>

        <p>
          Already have an account ? <Link to={"/login"}> Login </Link>
        </p>
      </div>
    </main>
  );
};

export default Register;
