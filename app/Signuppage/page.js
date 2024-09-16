"use client"; // Ensure this is at the top for client-side rendering

import { useState } from 'react';
import Image from 'next/image'; // Import Image from Next.js
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'; // Import Heroicons
import axios from 'axios';
import { useRouter } from 'next/navigation'; // Use the correct router hook

const SignUpPage = () => {
  const router = useRouter(); // Access the router
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const handleSignUp = async () => {
    setError(''); // Clear any previous errors

    // Basic validation checks
    if (!firstname || !lastname || !username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (password.length < 6) {
      setError("Password should be at least 6 characters long");
      return;
    }

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        username,
        password,
        first_name: firstname,
        last_name: lastname,
        email
      });

      if (response.status === 200) {
        router.push('/Homepage'); // Navigate to the home page
      } else {
        setError("Sign-up failed. Please try again.");
      }
    } catch (error) {
      console.error("Sign-up error:", error);
      setError("An error occurred during sign-up. Please try again later.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-white to-green-200">
      <div className="w-full max-w-md p-4">
        {/* Add the Logo */}
        <div className="flex justify-center mb-5">
          <Image src="/images/logo3.png" width={210} height={210} alt="Logo" />
        </div>

        <h2 className="text-center text-green-700 text-2xl font-semibold mb-4">Create an Account</h2>

        {error && <div className="mb-4 text-red-500 text-center">{error}</div>} {/* Display error */}

        <input
          type="text"
          placeholder="First name"
          value={firstname}
          onChange={(e) => setFirstName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-100"
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastname}
          onChange={(e) => setLastName(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-100"
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-100"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 border rounded-lg bg-gray-100"
        />

        <div className="relative mb-4">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3"
          >
            {isPasswordVisible ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>

        <div className="relative mb-4">
          <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 border rounded-lg bg-gray-100"
          />
          <button
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-3"
          >
            {isPasswordVisible ? (
              <EyeSlashIcon className="h-6 w-6 text-gray-500" />
            ) : (
              <EyeIcon className="h-6 w-6 text-gray-500" />
            )}
          </button>
        </div>

        <button
          onClick={handleSignUp}
          className="w-full bg-green-700 text-white p-3 rounded-lg font-semibold"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpPage;
