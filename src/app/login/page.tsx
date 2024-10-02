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
                              <input className='w-full p-1 text-lg rounded-md' type="email" name="" id="" placeholder='Enter email' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="password" name="" id="" placeholder='Enter password' />
                              <button className='my-2 bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit">Login</button>
                         </form>
                         <span className='text-white my-2'>
                              Don&apos;t have an account?
                         </span>
                         <Link className='text-[#fff] my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/sign-up">Sign up</Link>
                    </div>
               </div>
          </>
     );
};

export default page;