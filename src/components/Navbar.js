import React from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react";


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex mt-5 justify-between items-center h-10 max-w-[1240px] mx-auto px-4">
            <h1 className="w-full text-3xl font-bold text-[#00df9a] mt-25"> Logo
            </h1>
            <ul className="flex hidden">
                <li className="p-4">About</li>
                <li className="p-4">Home</li>
                <li className="p-4">Menu</li>
                <li className="p-4">Reservation</li>
                <li className="p-4">Order</li>
                <li className="p-4">Login</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </div>
            <div className={!nav ? 'fixed left-0 mt-5 top-12 w-[60%] border-r bourder-r-gray-900 h-full bg-[#edefee] ease-in-out duration-500 mt-150' : 'fixed left-[-100%]' }>
            <ul className="pt-4">
                <li className="p-4 border-b border-gray-600">About</li>
                <li className="p-4 border-b border-gray-600">Home</li>
                <li className="p-4 border-b border-gray-600">Menu</li>
                <li className="p-4 border-b border-gray-600">Reservation</li>
                <li className="p-4 border-b border-gray-600">Order</li>
                <li className="p-4">Login</li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar