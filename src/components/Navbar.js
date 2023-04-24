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
            <a href="/"><img src={logo} /></a>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Menu</li>
                <li className="p-4">Reservation</li>
                <li className="p-4">Order</li>
                <li className="p-4">Login</li>
            </ul>
            <div className='block md:hidden'>
            <div onClick={handleNav} >
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed text-primary-gray text-xl  font-bold left-0 mt-5 top-12 w-[60%] border-r bourder-r-gray-900 h-full bg-[#edefee] ease-in-out duration-500 mt-150' : 'fixed left-[-100%]' }>
            <ul className="pt-4">
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Menu</li>
                <li className="p-4 border-b border-gray-600">Reservation</li>
                <li className="p-4 border-b border-gray-600">Order</li>
                <li className="p-4">Login</li>
            </ul>
            </div>
            </div>
        </div>
    )
}

export default Navbar