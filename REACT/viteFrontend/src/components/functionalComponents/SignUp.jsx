import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    
    try {
      const response = await axios.post('https://classroom-project-pavithra-m2007.onrender.com', { username, email, password });
      setSuccess(response.data.Message);
      setTimeout(() => navigate('/login'), 2000);
    } catch (error) {
      setError(error.response?.data?.Message || "Signup failed");
    }
  };

  return (
    <div style={{padding: '2rem'}}>
      <h2>Sign Up</h2>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {success && <p style={{color: 'green'}}>{success}</p>}
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          style={{width: '300px', padding: '0.5rem', marginBottom: '1rem', display: 'block'}}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{width: '300px', padding: '0.5rem', marginBottom: '1rem', display: 'block'}}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{width: '300px', padding: '0.5rem', marginBottom: '1rem', display: 'block'}}
        />
        <button type="submit" style={{padding: '0.75rem 1.5rem', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '4px'}}>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );

};

export default Signup;