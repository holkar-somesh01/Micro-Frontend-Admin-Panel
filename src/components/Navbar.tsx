import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <nav className="bg-gradient-to-r from-teal-400 to-teal-600 p-4 shadow-lg rounded-b-xl flex justify-between items-center">
                <Link className="text-white text-3xl font-extrabold tracking-wide hover:text-teal-200 transition duration-300" to="/">Navbar</Link>
                <ul className="hidden md:flex space-x-8">
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/order'>Order</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/user'>User</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/return-request'>Return Order's Request</Link>
                    </li>
                </ul>
                <button onClick={toggleMenu} className="md:hidden text-white p-2 rounded-md hover:bg-teal-500 focus:outline-none transition duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
            <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden bg-teal-700 p-4 rounded-b-xl`}>
                <ul className="flex flex-col space-y-4">
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/'>Home</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/product'>Product</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/order'>Order</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/user'>User</Link>
                    </li>
                    <li>
                        <Link className="text-white text-lg font-medium hover:text-teal-200 transition duration-300" to='/return-request'>Return Order's Request</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
