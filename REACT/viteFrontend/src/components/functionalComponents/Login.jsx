import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async(e) => {
    e.preventDefault();
    setError("");
    
    // Demo login for testing
    if (email === "test@test.com" && password === "test") {
      login({ email: "test@test.com", username: "Test User" });
      navigate('/learn-react');
      return;
    }
    
    try {
      const response = await axios.post('https://classroom-project-pavithra-m2007.onrender.com', { email, password });
      if (response.data.isLoggedIn) {
        login(response.data.user);
        navigate('/learn-react');
      } else {
        setError(response.data.Message || "Login failed");
      }
    } catch (error) {
      console.log('Backend error:', error);
      setError("Backend not connected. Use test@test.com / test for demo or start backend server.");
    }
  };

  return (
    <div style={{padding: '2rem'}}>
      <h2>Login</h2>
      <p style={{color: '#666', fontSize: '0.9rem'}}>Demo: test@test.com / test (or use your registered account)</p>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <form onSubmit={handleLogin}>
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
        <button type="submit" style={{padding: '0.75rem 1.5rem', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '4px'}}>Login</button>
        <p style={{marginTop: '1rem'}}>Don't have an account? <Link to="/signup">Sign Up</Link></p>
      </form>
    </div>
  );

};

export default Login;