import React from 'react';
import inboxLogo from '../../Assets/inboxLogo.png';
import google from '../../Assets/google.png';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleGoogleSignUp = () => {
    window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=http://localhost:3000/google-login';
  };

  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img src={inboxLogo} alt="Inbox Logo" />
      </div>
      
      <div className='login-card'>
        <div>
          <h3>Create a new account</h3>
          <button className='googlesignup' onClick={handleGoogleSignUp}>
            <img src={google} alt="Google Logo" /> Sign Up with Google
          </button>
        </div>
        <button className='login'>Create an Account</button>
        <div>Already have an account? <Link to="/sign-in">Sign In</Link></div>
      </div>
    </div>
  );
}

export default Login;
