"use client";
// app/LoginPage/page.js
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'; // Import the icons

const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isRememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const toggleRememberMe = () => {
    setRememberMe(!isRememberMe);
  };

  const handleLogin = async () => {
    if (!username || !password) {
      setErrorMessage('Username and password are required');
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        // Navigate to the Homepage upon successful login
        router.push('/Homepage');
      }
    } catch (error) {
      console.error('Login error:', error.response ? error.response.data : error.message);
      setErrorMessage('Invalid username or password');
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality here
  };

  const handleCreateAccount = () => {
    router.push('/Signuppage'); // Navigate to the SignUpPage
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-200 p-4">
      <img
        src="/images/logo3.png" // Ensure this path is correct
        alt="Logo"
        className="w-52 h-52 mb-10 object-contain"
      />
      <div className="w-full max-w-md mx-auto">
        {errorMessage && (
          <div className="bg-red-200 text-red-800 p-3 mb-6 rounded-lg">
            {errorMessage}
          </div>
        )}
        <div className="mb-6">
          <div className="bg-white rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 border border-gray-300 rounded-t-lg focus:outline-none"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Username"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="bg-white rounded-lg overflow-hidden relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-t-lg focus:outline-none"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <button
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              aria-label={isPasswordVisible ? 'Hide password' : 'Show password'}
            >
              {isPasswordVisible ? (
                <EyeSlashIcon className="w-6 h-6 text-gray-600" />
              ) : (
                <EyeIcon className="w-6 h-6 text-gray-600" />
              )}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center mb-6">
          <button
            onClick={toggleRememberMe}
            className="flex items-center text-gray-800"
            aria-label={isRememberMe ? 'Uncheck remember me' : 'Check remember me'}
          >
            <img
              src={isRememberMe ? "/images/checkboxon.png" : "/images/checkboxoff.png"}
              alt="Remember me"
              className="w-6 h-6 mr-2"
            />
            <span className="text-sm">Remember me</span>
          </button>
          <button
            onClick={handleForgotPassword}
            className="text-blue-600 text-sm"
            aria-label="Forgot password"
          >
            Forgot password?
          </button>
        </div>
        <button
          onClick={handleLogin}
          className="w-full bg-white rounded-lg p-4 text-lg font-semibold text-gray-800 shadow-md mb-6"
          aria-label="Log In"
        >
          Log In
        </button>
        <div className="text-center">
          <p className="text-lg font-light text-gray-800 mb-4">
            Give your old items a second chance!
          </p>
          <button onClick={handleCreateAccount} className="text-green-600" aria-label="Create an account">
            <span className="font-normal">New User? </span>
            <span className="font-medium">Create an account.</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
