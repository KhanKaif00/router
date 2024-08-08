import React from 'react'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'

const Template = ({title,desc1,desc2,formtype,setIsLoggedin}) => {
  return (
    <div className='flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 ' >
        
        <div className='w-11/12 max-w-[450px]'>
            <h1 className='text-gray-100 font-semibold text-[1.75rem] leading-[2.35rem]'>{title}</h1>
           <p className='text=[1.135rem] leading-[1.625rem] mt-4'>
            <span className='text-gray-300 '>{desc1}</span>
            <br/>
            <span className='text-blue-400 italic'>{desc2}</span>
           </p>

           {formtype === "signup"?(<SignupForm setIsLoggedin={setIsLoggedin}></SignupForm>):
           (<LoginForm setIsLoggedin={setIsLoggedin}></LoginForm>)}

        <div className='flex w-full items-center my-4 gap-x-2 -mt-1'>
          <div className=' w-full h-[1px] bg-gray-700' ></div>
          <p className='text-gray-500 font-medium leading-[3.75rem] '>OR</p>
          <div className=' w-full h-[1px] bg-gray-700' ></div>
      
      
        </div>
      

            <button className='flex w-full justify-center items-center bg-black rounded-[8px] font-medium text-gray-300 border border-gray-800 px-[8px] 
            py-[6px] gap-x-2 -mt-3 '>
              <FcGoogle></FcGoogle>
              <p className='pb-1'>Sign up with google</p>
            </button>
      
        </div>


        

    </div>
  )
}

export default Template