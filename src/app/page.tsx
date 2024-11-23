'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-1x2 font-bold">FRONTEND MASTER</Link>
            <div className="hidden md:flex space-x-4">
              <Link href="#home" className="hover:text-yellow-300 transition duration-300">Home</Link>
              <Link href="#features" className="hover:text-yellow-300 transition duration-300">Features</Link>
              <Link href="#about" className="hover:text-yellow-300 transition duration-300">About</Link>
              <Link href="#contact" className="hover:text-yellow-300 transition duration-300">Contact</Link>
            </div>
            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {isMenuOpen && (
            <div className="mt-4 md:hidden">
              <Link href="#home" className="block py-2 hover:text-yellow-300 transition duration-300">Home</Link>
              <Link href="#features" className="block py-2 hover:text-yellow-300 transition duration-300">Features</Link>
              <Link href="#about" className="block py-2 hover:text-yellow-300 transition duration-300">About</Link>
              <Link href="#contact" className="block py-2 hover:text-yellow-300 transition duration-300">Contact</Link>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="home" className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              MUHAMMAD{' '}
              <span className="text-yellow-300">HASNAIN  </span>
            </h1>
            <p className="text-xl sm:text-2xl mb-8">
              Bringing your ideas into vibrant
            </p>
            <a
              href="#contact"
              className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-300 hover:text-purple-700 transition duration-300"
            >
              Get Started
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-8 rounded-2xl shadow-lg text-white hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold mb-4">Creative Design</h3>
                <p className="mb-4">We craft stunning visuals that captivate your audience and elevate your brand.</p>
              </div>
              <div className="bg-gradient-to-br from-green-400 to-teal-600 p-8 rounded-2xl shadow-lg text-white hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold mb-4">Web Development</h3>
                <p className="mb-4">We build responsive, fast, and user-friendly websites that drive results.</p>
              </div>
              <div className="bg-gradient-to-br from-yellow-400 to-orange-600 p-8 rounded-2xl shadow-lg text-white hover:shadow-2xl transition duration-300">
                <h3 className="text-2xl font-bold mb-4">Digital Marketing</h3>
                <p className="mb-4">We boost your online presence and help you reach your target audience effectively.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">About</h2>
                <p className="text-gray-600 mb-4">
                  At Sharpness, we believe in the power of creativity and technology to transform businesses. Our team of experts is dedicated to delivering cutting-edge solutions that help our clients stand out in the digital landscape.
                </p>
                <p className="text-gray-600">
                  With years of experience and a passion for innovation, we're committed to bringing your ideas into vibrant focus and helping your business thrive in the online world.
                </p>
              </div>
              <div className="md:w-1/2 md:pl-8">
                <Image
                  src="/placeholder.svg"
                  alt="About Sharpness"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
            <div className="max-w-md mx-auto">
              <form className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" required></textarea>
                </div>
                <button type="submit" className="w-full bg-purple-600 text-white font-bold py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Muhammad Hasnain Khan, All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <span className="sr-only">Facebook</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="hover:text-yellow-300 transition duration-300">
                <span className="sr-only">Instagram</span>
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}