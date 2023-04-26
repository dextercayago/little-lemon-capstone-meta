import React from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";
import logo from "../assets/nav-logo.svg"


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex text-2xl text-primary-gray font-bold mt-5 justify-between items-center h-10 max-w-[1240px] mx-auto px-4">
            <a href="/"><img src={logo} alt="logo" /></a>
            <ul className="hidden md:flex">
                <li className="p-4 hover:text-secondary-dark">Home</li>
                <li className="p-4 hover:text-secondary-dark">About</li>
                <li className="p-4 hover:text-secondary-dark">Menu</li>
                <li className="p-4 hover:text-secondary-dark">Reservation</li>
                <li className="p-4 hover:text-secondary-dark">Order</li>
                <li className="p-4 hover:text-secondary-dark">Login</li>
            </ul>
            <div className='block md:hidden'>
            <div onClick={handleNav} >
            {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={nav  ? 'fixed text-primary-gray text-xl text-center font-bold right-0 mt-2 top-10 w-[30%] border-r bourder-r-gray-900 h-450 bg-[#edefee] ease-in-out duration-500 mt-150' : 'fixed right-[-100%]' }>
            <ul className="pt-4">
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">Home</li>
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">About</li>
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">Menu</li>
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">Reservation</li>
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">Order</li>
                <li className="p-4 border-b border-gray-600 hover:text-secondary-dark">Login</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar