import React, { useState, useEffect } from "react";
import "./Signup_Login.css";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"; 
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,  //action from authslice
  resetStatus,
} from "../service/Features/auth/authSlice";


const EyeOpenIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const EyeSlashIcon = () => (
  <svg className="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
    />
  </svg>
);

const formVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const heroVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Signup_Login() {
  const [formState, setFormState] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    otp: "",
    newPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status, error, successMessage, token } = useSelector((state) => state.user);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const { userName, email, password, otp, newPassword } = formData;

    if (formState === "login") {
      dispatch(loginUser({ email, password }));
    } else if (formState === "signup") {
      // dispatch(registerUser({ userName, email, password }));
  
dispatch(registerUser({ username: userName, email, password }));
    } else if (formState === "forgotPassword") {
      dispatch(forgotPassword({ email }));
    } else if (formState === "resetPassword") {
      dispatch(resetPassword({ email, otp, newPassword }));
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleToggle = () => {
    dispatch(resetStatus());
    if (formState === "forgotPassword" || formState === "resetPassword") {
      setFormState("login");
    } else {
      setFormState(formState === "login" ? "signup" : "login");
    }
    setFormData({ userName: "", email: "", password: "", otp: "", newPassword: "" });
    setShowPassword(false);
  };

  useEffect(() => {
   

    //after login automatic redirected to home page
    if (status === 'succeeded' && formState === 'login' && token) {
        setTimeout(() => {
            navigate('/'); //after login 1 sec automatic goes in home page
        }, 3000);
    }

    // after send otp then open reset password field
    if (status === 'succeeded' && formState === 'forgotPassword' && successMessage) {
        setFormState('resetPassword');
        dispatch(resetStatus());
        setFormData(prev => ({ ...prev, password: '', otp: '', newPassword: ''}));
    }
    
    // succesful password reset then goes login page in after 3 second
    if (status === 'succeeded' && formState === 'resetPassword' && successMessage) {
        setTimeout(() => {
            setFormState('login');
            dispatch(resetStatus());
            setFormData({ userName: "", email: "", password: "", otp: "", newPassword: "" });
        }, 3000); 
    }

  }, [status, formState, successMessage, dispatch, navigate, token]);

  return (
    <div className="login-container">
      <div className="hero-section">
        <motion.div
          className="hero-content"
          variants={heroVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Lorem ipsum dolor sit amet.!
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ducimus
            aspernatur, maiores adipisci architecto voluptatibus nihil.
          </motion.p>
        </motion.div>
      </div>

      <div className="form-section">
        <div className="form-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={formState}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="form-header">
                <h2 className="form-title">
                  {formState === "login" && "Welcome Back"}
                  {formState === "signup" && "Create Your Account"}
                  {formState === "forgotPassword" && "Forgot Password"}
                  {formState === "resetPassword" && "Set a New Password"}
                </h2>
                <p className="form-subtitle">
                  {formState === "login" &&
                    "Access your personalized dashboard."}
                  {formState === "signup" &&
                    "Join us to discover exclusive properties."}
                  {formState === "forgotPassword" &&
                    "We'll send an OTP to your email."}
                  {formState === "resetPassword" &&
                    "Enter the OTP and your new password."}
                </p>
              </div>

              {status === 'failed' && error && <div className="error-message">{error}</div>}
              {status === 'succeeded' && successMessage && <div className="success-message">{successMessage}</div>}

              <form onSubmit={handleSubmit} className="form-body">
                {formState === "signup" && (
                  <div className="input-group">
                    <label htmlFor="userName" className="input-label">
                      User Name
                    </label>
                    <input
                      type="text"
                      id="userName"
                      name="userName"
                      value={formData.userName}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Username"
                      required
                    />
                  </div>
                )}

                <div className="input-group">
                  <label htmlFor="email" className="input-label">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="input-field"
                    placeholder="you@example.com"
                    required
                    disabled={formState === 'resetPassword'}
                  />
                </div>
                
                {formState === "resetPassword" && (
                    <div className="input-group">
                        <label htmlFor="otp" className="input-label">OTP</label>
                        <input type="text" id="otp" name="otp" value={formData.otp} onChange={handleInputChange} className="input-field" placeholder="Enter OTP from email" required />
                    </div>
                )}
                
                {(formState === 'login' || formState === 'signup') && (
                    <div className="input-group">
                        <label htmlFor="password" className="input-label">Password</label>
                        <div className="password-wrapper">
                            <input type={showPassword ? "text" : "password"} id="password" name="password" value={formData.password} onChange={handleInputChange} className="input-field password-field" placeholder="Enter your password" required />
                            <button type="button" onClick={togglePasswordVisibility} className="password-toggle-btn">
                                {showPassword ? <EyeSlashIcon /> : <EyeOpenIcon />}
                            </button>
                        </div>
                    </div>
                )}
                
                {formState === "resetPassword" && (
                    <div className="input-group">
                        <label htmlFor="newPassword" className="input-label">New Password</label>
                        <div className="password-wrapper">
                            <input type={showPassword ? "text" : "password"} id="newPassword" name="newPassword" value={formData.newPassword} onChange={handleInputChange} className="input-field password-field" placeholder="Enter new password" required />
                            <button type="button" onClick={togglePasswordVisibility} className="password-toggle-btn">
                                {showPassword ? <EyeSlashIcon /> : <EyeOpenIcon />}
                            </button>
                        </div>
                    </div>
                )}

                {formState === "login" && (
                  <div className="form-options">
                    <label className="remember-me">
                      <input type="checkbox" className="checkbox" />
                      <span>Remember me</span>
                    </label>
                    <button
                      type="button"
                      className="link"
                      onClick={() => setFormState("forgotPassword")}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="submit-btn"
                  disabled={status === 'loading'}
                >
                  {status === 'loading' ? 'Processing...' :
                    formState === "login" ? "Sign In" :
                    formState === "signup" ? "Create Account" :
                    formState === "forgotPassword" ? "Send OTP" :
                    "Update Password"
                  }
                </motion.button>

                <div className="toggle-mode">
                  <span>
                    {formState === "login" && "Don't have an account?"}
                    {formState === "signup" && "Already have an account?"}
                    {(formState === "forgotPassword" || formState === "resetPassword") && "Remember your password?"}
                  </span>{" "}
                  <button type="button" onClick={handleToggle} className="link">
                    {formState === "login" && "Sign Up"}
                    {formState === "signup" && "Sign In"}
                    {(formState === "forgotPassword" || formState === "resetPassword") && "Sign In"}
                  </button>
                </div>
              </form>

              {formState !== "forgotPassword" && formState !== "resetPassword" && (
                <>
                  <div className="divider-container">
                    <div className="divider-line" />
                    <span className="divider-text">Or continue with</span>
                    <div className="divider-line" />
                  </div>
                  <div className="social-login-grid">
                    <motion.button whileHover={{ scale: 1.05 }} className="social-btn">
                      <svg className="social-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                      </svg>
                      <span>Google</span>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.05 }} className="social-btn">
                      <svg className="social-icon apple-icon" fill="#000000" viewBox="0 0 30 30">
                        <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M12,20.441 c-2.009,0-3.208-0.852-4.417-2.164c-0.654-0.69-1.123-1.605-1.123-2.604c0-2.344,1.612-4.322,4.484-4.322 c2.072,0,3.332,0.926,4.418,2.236c0.67,0.732,1.141,1.646,1.141,2.665C20.503,18.547,18.66,20.441,12,20.441z M12,8.083 c-2.078,0-3.76,1.682-3.76,3.76s1.682,3.76,3.76,3.76s3.76-1.682,3.76-3.76S14.078,8.083,12,8.083z"></path>
                      </svg>
                      <span>Apple</span>
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}