import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: 'India',
    state: '',
    city: '',
    password: '',
    confirmPassword: '',
    referrerEmail: ''
  });


  const [isReferred, setIsReferred] = useState(false);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    
    
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    
    console.log("Form Submitted Data:", formData);
    alert("Check the console for the form data!");
    
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-header">
          <div className="logo-placeholder">Tejas</div>
          <h1>Sign Up</h1>
        </div>

       
        <form className="signup-form" onSubmit={handleSubmit}>
       
          <input 
            type="text" 
            name="name" 
            placeholder="Name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />

          <div className="phone-input-group">
            <select name="country-code" defaultValue="+91">
              <option value="+91">🇮🇳 +91</option>
            </select>
            <input 
              type="tel" 
              name="phone" 
              placeholder="Phone Number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
          </div>

          <input 
            type="email" 
            name="email" 
            placeholder="Email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <div className="referral-section">
            <div className="referral-checkbox">
              <input
                type="checkbox"
                id="referral"
                checked={isReferred}
                onChange={() => setIsReferred(!isReferred)}
              />
              <label htmlFor="referral">
                Have you been referred by someone? (Please enter their email)
              </label>
            </div>
            {isReferred && (
              <input
                type="email"
                name="referrerEmail"
                className="referral-email-input"
                placeholder="Referrer's Email"
                value={formData.referrerEmail}
                onChange={handleChange}
              />
            )}
          </div>

          <select name="country" value={formData.country} onChange={handleChange} disabled>
            <option value="India">India</option>
          </select>

          <select name="state" value={formData.state} onChange={handleChange} required>
            <option value="" disabled>Choose State</option>
           
            <option value="Maharashtra">Maharashtra</option>
            <option value="Gujarat">Gujarat</option>
          </select>

          <select name="city" value={formData.city} onChange={handleChange} required>
            <option value="" disabled>Choose City</option>
           <option value="Akola">Akola</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
          </select>

          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="password" 
            name="confirmPassword" 
            placeholder="Confirm Password" 
            value={formData.confirmPassword} 
            onChange={handleChange} 
            required 
          />

          <button type="submit" className="register-button">Register</button>
        </form>

        <p className="login-prompt">
          Already have an account?
          <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;