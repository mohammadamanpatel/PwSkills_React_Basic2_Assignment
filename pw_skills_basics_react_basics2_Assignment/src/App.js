import React, { useState } from 'react';
import SignUpForm from './SignUpForm';
import LogInForm from './LogInForm';
import './App.css'; // Include your CSS or styling framework file

const App = () => {
  const [isSignUp, setIsSignUp] = useState(false);

  const toggleForm = () => {
    setIsSignUp(!isSignUp);
  };

  return (
    <div className="app-container">
      <div className="logo-container">
        {/* Replace with your Instagram logo or icon */}
        <img src="instagram-logo.png" alt="Instagram Logo" />
      </div>
      <div className="form-container">
        <div className="toggle-button">
          <button onClick={toggleForm}>
            {isSignUp ? 'Switch to Login' : 'Switch to Sign Up'}
          </button>
        </div>
        {isSignUp ? <SignUpForm /> : <LogInForm />}
      </div>
    </div>
  );
};

export default App;
