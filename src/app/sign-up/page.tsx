import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const page = () => {
     return (
          <>
               <header className="flex items-center justify-between px-4 bg-[#0a298c] py-2 text-white font-normal text-lg">
                    <div className="flex gap-1 text-3xl font-semibold">
                    <span>I</span>
                    <span style={{transform: "rotateZ(-45deg)"}} className="text-red-500">C</span>
                    <span>E</span>
                    </div>
                    <h2 className="text-center">Library Management</h2>
                    <Navbar />
               </header>
               <div className='home-main h-[93.5vh] flex items-center justify-center'>
                    <div className='glass-div w-[30rem] p-4 rounded-md'>
                         <h2 className='text-center text-xl mb-3 text-white'>Welcome</h2>
                         <form action="" method="post">
                              <input className='w-full p-1 text-lg rounded-md' type="text" name="" id="" placeholder='Full name' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="text" name="" id="" placeholder='Enter address' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="text" name="" id="" placeholder='Enter post code' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="tel" name="" id="" placeholder='Enter phone number' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="email" name="" id="" placeholder='Enter email' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="password" name="" id="" placeholder='Enter password' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="password" name="" id="" placeholder='Re-enter password' />
                              <button className='my-2 bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit">Signup</button>
                         </form>
                         <span className='text-white my-2'>
                              Have an account?
                         </span>
                         <Link className='text-[#fff] my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/login">Login</Link>
                    </div>
               </div>
          </>
     );
};

export default page;