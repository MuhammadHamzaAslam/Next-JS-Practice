'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
          <Link href="/">MyNavbar</Link>
        </div>

        {/* Toggle button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 text-white absolute lg:static top-16 left-0 w-full lg:w-auto bg-blue-600 lg:bg-transparent transition-all duration-300 ease-in-out ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="lg:flex lg:space-x-6 text-white text-center p-4 lg:p-0">
            <li className="my-2 lg:my-0">
              <Link href="/">Home</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link href="/about">About</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link href="/services">Services</Link>
            </li>
            <li className="my-2 lg:my-0">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
