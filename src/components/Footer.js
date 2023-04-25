import React from 'react';
import Whitelogo from "../assets/WhiteLogo.jpg"



const Footer = () => {
    return (
        <div className='flex flex-wrap flex-1 justify-between px-40 bg-primary-gray flex-row mt-10'>
        <div className='mt-10 w-20 '>
            <img className=" w-30 h-30" src={Whitelogo} alt="white logo"/>
        </div>
        <div className=''>
        <ul className="hidden md:flex flex-col text-primary-yellow mt-10 mb-10">
                <li className="hover:text-secondary-dark">Home</li>
                <li className="hover:text-secondary-dark">About</li> 
                <li className="hover:text-secondary-dark">Menu</li>
                <li className="hover:text-secondary-dark">Reservation</li>
                <li className="hover:text-secondary-dark">Order</li>
                <li className="hover:text-secondary-dark">Login</li>
            </ul>
        </div>

        <div className=''>
            <h2 className='mt-10 text-white text-2xl'> Contact Us</h2>
        <ul className="hidden md:flex flex-col text-primary-yellow">
                <li className="hover:text-secondary-dark">Address</li>
                <li className="hover:text-secondary-dark">Phone Number</li> 
                <li className="hover:text-secondary-dark">Email</li>

            </ul>
        </div>

        <div className=''>
            <h2 className='mt-10 text-white text-2xl'> Social Media</h2>
        <ul className="hidden md:flex flex-col text-primary-yellow">
                <li className="hover:text-secondary-dark">Instagram</li>
                <li className="hover:text-secondary-dark">Facebook</li> 
                <li className="hover:text-secondary-dark">Twitter</li>
        </ul>
        </div>

        
        </div>

    );
  };
  
export default Footer;