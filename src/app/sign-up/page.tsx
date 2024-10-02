import React from 'react';
import Link from 'next/link';

const page = () => {
     return (
          <>
               <div className='home-main h-[93.5vh] flex items-center justify-center px-2 md:px-0'>
                    <div className='glass-div w-[40rem] md:p-4 p-2 rounded-md'>
                         <h2 className='text-center text-xl mb-3 text-white'>Welcome</h2>
                         <form action="" method="post">
                              <div className='flex items-center justify-between md:gap-3 gap-1 md:flex-nowrap flex-wrap'>
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md' type="text" name="" id="" placeholder='Full name' />
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md' type="email" name="" id="" placeholder='Enter email' />
                              </div>
                              <div className='flex items-center justify-between md:gap-3 gap-1 md:flex-nowrap flex-wrap'>
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="text" name="" id="" placeholder='Enter post code' />
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="tel" name="" id="" placeholder='Enter phone number' />
                              </div>
                              <div className='flex items-center justify-between md:gap-3 gap-1 md:flex-nowrap flex-wrap'>
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="password" name="" id="" placeholder='Enter password' />
                                   <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="password" name="" id="" placeholder='Re-enter password' />
                              </div>
                              <textarea className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' name="" id="" placeholder='Enter address'></textarea>
                              <button className='my-2 bg-[#0a298c] text-white px-3 py-1 md:text-lg text-sm rounded-sm' type="submit">Signup</button>
                         </form>
                         <span className='text-white my-2 md:text-lg text-sm'>
                              Have an account?
                         </span>
                         <Link className='text-[#fff] md:text-lg text-sm my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/login">Login</Link>
                    </div>
               </div>
          </>
     );
};

export default page;