import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';

function LoginForm({setIsLoggedin}) {
    const [data, setData] = useState({ emailadd: "", pass: "" });
    const [showpass, setShowpass] = useState(false);
    const navigate =useNavigate()

    function changeHandler(e) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
     
       function submithandler(e){
        e.preventDefault()
        setIsLoggedin(true)
        toast.success("Logged in")
        navigate("/dashboard")

       }
    return (
        <form onSubmit={submithandler}
        className='flex flex-col w-full gap-y-4 mt-6'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>
                    Email Address <sup className='text-pink-600'>*</sup>
                </p>
                <input className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                    required
                    type='email'
                    placeholder='enter email address'
                    name='emailadd'
                    onChange={changeHandler}
                    value={data.emailadd}
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>
                    Enter Password <sup className='text-pink-600'>*</sup>
                </p>
                <input
                className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                    required
                    type={showpass ? 'text' : 'password'}
                    placeholder='enter password'
                    name='pass'
                    onChange={changeHandler}
                    value={data.pass}
                />
                <span 
                className='absolute top-[38px] right-3 cursor-pointer '
                 onClick={() => setShowpass((prev) => !prev)}>
                    {showpass ? <AiOutlineEyeInvisible fontSize={20} fill='#AFB2BF'/> : <AiOutlineEye fontSize={20} fill='#AFB2BF' />}
                </span>
                <Link to="#">
                    <p className='text-xm mt-1 text-blue-300 max-w-max ml-auto'>Forget password</p>
                </Link>
            </label>

            <button className='w-full bg-yellow-500 rounded-[8px] text-center text-black py-1 px-5 font-medium mt-6'>Sign In</button>
        </form>
    );
}

export default LoginForm;
