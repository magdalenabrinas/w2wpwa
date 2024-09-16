"use client";
import { Bars3Icon, HomeIcon, UserIcon, CameraIcon, HeartIcon, BellIcon } from '@heroicons/react/24/outline';
import { FaBoxArchive } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { BsRecycle } from "react-icons/bs";
import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="bg-gradient-to-b from-white/5 to-[#7FC780] min-h-screen flex flex-col items-center justify-between relative p-4">
      {/* Burger Menu */}
      <div className="absolute top-4 left-4">
        <button className="bg-transparent border-none">
          <Bars3Icon className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Notification Bell */}
      <div className="absolute top-4 right-4">
        <button className="bg-transparent border-none">
          <BellIcon className="w-6 h-6 text-black" />
        </button>
      </div>

      {/* Logo */}
      <div className="mb-2">
        <img src="/images/logo-small.png" alt="Logo" className="w-[80px] h-[40px]" />
      </div>

      {/* Profile Picture and Username */}
      <div className="flex items-center mb-2">
        <img src="/images/profile-pic.png" alt="Profile" className="w-10 h-10 rounded-full" />
        <p className="ml-2 text-sm">Welcome Earth25,</p>
      </div>

      {/* Icons Container */}
      <div className="flex flex-wrap justify-center mb-6">
        <div className="m-2 text-center">
          <Link href="/myproject">
            <a>
              <FaBoxArchive className="w-10 h-10 text-black" />
              <p className="mt-1 text-xs">My Project</p>
            </a>
          </Link>
        </div>
        <div className="m-2 text-center">
          <Link href="/saved">
            <a>
              <CiHeart className="w-10 h-10 text-black" />
              <p className="mt-1 text-xs">Saved Project</p>
            </a>
          </Link>
        </div>
        <div className="m-2 text-center">
          <Link href="/upcycling">
            <a>
              <BsRecycle className="w-10 h-10 text-black" />
              <p className="mt-1 text-xs">Upcycling Guide</p>
            </a>
          </Link>
        </div>
      </div>

      {/* Image Bins Section */}
      <div className="mb-6">
        <img src="/images/bins.png" alt="Bins" className="w-[80px] h-[80px]" />
      </div>

      {/* Bottom Navigation Bar */}
      <div className="flex justify-around bg-white p-2 w-full absolute bottom-0">
        <Link href="/Scanpage">
          <a className="text-center">
            <CameraIcon className="w-6 h-6 text-black" />
            <p className="text-xs">Scan</p>
          </a>
        </Link>
        <Link href="/">
          <a className="text-center">
            <HomeIcon className="w-6 h-6 text-black" />
            <p className="text-xs">Home</p>
          </a>
        </Link>
        <Link href="/saved">
          <a className="text-center">
            <HeartIcon className="w-6 h-6 text-black" />
            <p className="text-xs">Saved</p>
          </a>
        </Link>
        <Link href="/profile">
          <a className="text-center">
            <UserIcon className="w-6 h-6 text-black" />
            <p className="text-xs">Profile</p>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
