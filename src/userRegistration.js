import React, { useState } from 'react';
import './UserRegistration.css'; // Import a CSS file for styling
import { useNavigate } from 'react-router-dom';

function UserRegistration() {
  // Create state variables to store user input
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [difficultyLevel, setDifficultyLevel] = useState('Easy');

  // State variables to track form validation
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');

  // Access the navigate function to programmatically navigate
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    let isFormValid = true;

    if (name.length < 5) {
      setNameError('Name should contain at least 5 characters');
      isFormValid = false;
    } else {
      setNameError('');
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      isFormValid = false;
    } else {
      setEmailError('');
    }

    if (!validateMobileNumber(mobileNumber)) {
      setMobileNumberError('Mobile number should contain 10 digits');
      isFormValid = false;
    } else {
      setMobileNumberError('');
    }

    if (isFormValid) {
      // Redirect based on the selected difficulty level
      switch (difficultyLevel) {
        case 'Easy':
          navigate('/easy');
          break;
        case 'Medium':
          navigate('/medium');
          break;
        case 'Hard':
          navigate('/hard');
          break;
        default:
          break;
      }
    }
  };

  // Function to validate email
  const validateEmail = (email) => {
    // Regular expression for a simple email validation
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Function to validate mobile number (10 digits)
  const validateMobileNumber = (mobile) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(mobile);
  };

  return (
    <div className="Main">
      <div className="user-registration-container">
        <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error-message">{nameError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-message">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input
              type="tel"
              id="mobileNumber"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            {mobileNumberError && (
              <p className="error-message">{mobileNumberError}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="difficultyLevel">Difficulty Level</label>
            <select
              id="difficultyLevel"
              value={difficultyLevel}
              onChange={(e) => setDifficultyLevel(e.target.value)}
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserRegistration;
