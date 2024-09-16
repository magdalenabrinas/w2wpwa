"use client";
// app/Welcomepage/page.js
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const WelcomePage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/Loginpage'); // Navigate to login page after 3 seconds
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-[#7FC780] to-[#7FC780]">
      <div className="flex items-center justify-center flex-col">
        <img
          src="/images/logo.png" // Ensure this path is correct
          alt="Logo"
          className="w-72 h-72 object-contain" // Adjust size as needed
        />
      </div>
    </div>
  );
};

export default WelcomePage;
