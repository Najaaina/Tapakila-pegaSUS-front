// components/Navbar.tsx
'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, UserCircleIcon } from '@heroicons/react/24/outline'

// Navbar component
export default function Navbar() {
  // State management
  const [isOpen, setIsOpen] = useState(false) // For dropdown menu
  const [darkMode, setDarkMode] = useState(false) // For dark mode toggle
  const [loggedIn] = useState(false) // User login state

  // Main navigation links
  const mainLinks = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'My Bookings', href: '/bookings' }
  ]

  // User-specific links based on login state
  const userLinks = loggedIn ? [
    { name: 'Profile', href: '/profile' },
    { name: 'Logout', href: '/logout' }
  ] : [
    { name: 'Login', href: '/login' },
    { name: "Sign Up", href: '/register' }
  ]

  // Effect to toggle dark mode class on the document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link href="/" className="relative h-10 w-32 block">
              <Image
                src={darkMode ? "/Images/iconTapakilaDark.png" : "/Images/iconTapakilaLight.png"}
                alt="Logo"
                fill
                className="object-contain object-left"
                priority
                sizes="(max-width: 768px) 100px, 160px"
              />
            </Link>
          </div>

          {/* Search Bar Section */}
          <div className="flex-1 max-w-2xl mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm dark:text-white"
              />
              <button className="absolute right-3 top-2 text-gray-500 dark:text-gray-300">
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Section with Controls */}
          <div className="flex items-center gap-4">
            
            {/* Main Links for Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {mainLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Dark Mode and User Controls */}
            <div className="flex items-center gap-2">
              {/* Dark Mode Toggle Button */}
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="text-gray-600 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center gap-2 text-gray-600 dark:text-gray-300 p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                >
                  <UserCircleIcon className="h-6 w-6" />
                </button>

                {/* Dropdown Menu for User Links */}
                {isOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl py-2 border dark:border-gray-700">
                    {userLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="block px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-700"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}