import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const Login = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        
        <div className="info-panel">
          <h1>Lorem ipsum dolor sit.</h1>
          <p>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat ex commodi explicabo?
          </p>
        </div>

        
        <div className="form-panel">
          <div className="form-header">
            <h2>Sign In</h2>
          </div>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="rememberMe" name="rememberMe" />
                <label htmlFor="rememberMe">Remember Me</label>
              </div>
              <a href="#" className="forgot-password">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          <div className="signup-link">
  <p>
    Don't have an account? <Link to="/signUp">Sign Up</Link>
  </p>
</div>
        </div>
      </div>
    </div>
  );
};

export default Login;