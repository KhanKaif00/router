import React from 'react';
import logo from '../asserts/logo.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function Navbar(props) {
    let isLoggedin =props.isLoggedin
    let setisLoggedin =props.setIsLoggedin
  return (
    <div  className='flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto'>
      <Link to="/">
        <img src={logo} alt="Logo" Width={60} height={32} loading='lazy' />
      
      </Link>
      <nav > 
        <ul className=' text-gray-400 flex gap-x-6'>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/">About</Link>
            </li>
            <li>
                <Link to="/">Contact</Link>
            </li>
        </ul>
      </nav>
 
      <div className='flex items-center gap-x-4'>
        {   !isLoggedin &&
            <Link to="/login">
                <button className=' text-gray-400 bg-gray-800 py-[6px] pt-[3px] px-[12px] rounded-[8px] border border-gray-700'>Log In</button>
            
            </Link>
        }
        {  !isLoggedin &&
            <Link to="/signup">
                <button className=' text-gray-400 bg-gray-800 py-[6px] pt-[3px] px-[12px] rounded-[8px] border border-gray-700'>Sign Up</button>
            
            </Link>
        }
        {  isLoggedin &&
            <Link to="/">
                <button className=' text-gray-400 bg-gray-800 py-[6px] pt-[3px] px-[12px] rounded-[8px] border border-gray-700'
                onClick={()=>{
                    setisLoggedin(false)
                    toast.success("Logged out")

                }}>Log Out</button>
            
            </Link>
        }
        {  isLoggedin &&
            <Link to="/dashboard">
                <button className=' text-gray-400 bg-gray-800 py-[6px] pt-[3px] px-[12px] rounded-[8px] border border-gray-700'>Dashboard</button>
            
            </Link>
        }

      </div>
    </div>
  );
}

export default Navbar;
