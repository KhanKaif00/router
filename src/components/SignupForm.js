import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

function SignupForm({setIsLoggedin}) {
    const [data, setData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpassword: ""
    });
    const navigate = useNavigate()
    const [showPass, setShowPass] = useState(false);
    const [seen , setSeen] = useState(false);
    const[accountType, setaccountType] = useState("student")

    function changeHandler(e) {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    }
    function submithandler(e){
        e.preventDefault()
        if(data.password !==data.confirmpassword){
            toast.error("password does not match")
            return
        }
        setIsLoggedin(true)
        toast.success("Account Created")
        navigate("/dashboard")
       }

    return (
        <div>
            <div className='flex bg-gray-800 p-1 gap-x-1 my-6 rounded-full  max-w-max '>
                <button
                className={`${accountType==="student"?
                    " bg-gray-950 text-gray-100":
                    "bg-transparent text-gray-400"
                } py-2 px-5 rounded-full transition-all duration-200`}
                 onClick={()=> setaccountType("student")}>Student</button>
                <button 
                   className={`${accountType==="instructor"?
                    " bg-gray-950 text-gray-100":
                    "bg-transparent text-gray-400"
                } py-2 px-5 rounded-full transition-all duration-200`}
                onClick={()=> setaccountType("instructor")}>Instructor</button>
            </div>

            <form  onSubmit={submithandler}>
                {/* firstname and lastname */}
                <div className=' flex gap-x-4 mt-[20px]'>
                    <label className='w-full '>
                        <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>First Name <sup  className='text-pink-600'>*</sup></p>
                        <input
                         className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                            required
                            type='text'
                            name='firstname'
                            placeholder='firstname'
                            onChange={changeHandler}
                            value={data.firstname}
                        />
                    </label>
                    <label className='w-full '>
                        <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>Last Name <sup  className='text-pink-600'>*</sup></p>
                        <input
                         className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                            required
                            type='text'
                            name='lastname'
                            placeholder='lastname'
                            onChange={changeHandler}
                            value={data.lastname}
                        />
                    </label>
                </div>

                {/* email */}
                    
                <div className='w-full mt-[20px]'>
                <label>
                    <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>Email Address <sup  className='text-pink-600'>*</sup></p>
                    <input
                     className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                        required
                        type='email'
                        placeholder='enter your email'
                        name='email'
                        onChange={changeHandler}
                        value={data.email}
                    />
                </label>
                </div>

                {/* password and confirmpassword */}

                <div className='flex gap-x-4 mt-[20px]'>
                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>Create Password <sup  className='text-pink-600'>*</sup></p>
                        <input
                         className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                            required
                            type={showPass ? 'text' : 'password'}
                            name='password'
                            placeholder='password'
                            onChange={changeHandler}
                            value={data.password}
                        />
                        <span 
                                        className='absolute top-[38px] right-3 cursor-pointer '
                                        onClick={() => setShowPass((prev) => !prev)}>
                            {showPass ? <AiOutlineEyeInvisible  fontSize={20} fill='#AFB2BF'/> : <AiOutlineEye  fontSize={20} fill='#AFB2BF' />}
                        </span>
                    </label>

                    <label className='relative w-full'>
                        <p className='text-[0.875rem] text-gray-100 mb-1 leading-[1.375rem] '>Confirm Password <sup  className='text-pink-600'>*</sup></p>
                        <input
                         className='w-full  bg-gray-800 rounded-[0.85rem] text-gray-100
                   p-[10px]'
                            required
                            type={seen ? 'text' : 'password'}
                            name='confirmpassword'
                            placeholder='confirm password'
                            onChange={changeHandler}
                            value={data.confirmpassword}
                        />
                        <span 
                                        className='absolute top-[38px] right-3 cursor-pointer '
                                        onClick={() => setSeen((prev) => !prev)}>
                            {seen ? <AiOutlineEyeInvisible  fontSize={20} fill='#AFB2BF' /> : <AiOutlineEye  fontSize={20} fill='#AFB2BF' />}
                        </span>
                    </label>
                </div>

                <button type="submit" className='w-full bg-yellow-400 rounded-[10px] text-center text-black py-[8px] px-5 font-medium mt-6'>Create Account</button>
            </form>
        </div>
    );
}

export default SignupForm;
