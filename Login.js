import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy login validation
    if (email && password) {
      navigate("/dashboard");
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="auth-container">
      <h2 style={{ marginBottom: '20px', fontSize: '24px' }}>Login</h2>
      <form onSubmit={handleLogin} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
      </form>

      <p>
        Don't have an account? <span onClick={() => navigate("/signup")}>Sign up</span>
      </p>
    </div>
  );
}

export default Login;