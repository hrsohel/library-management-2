import React from 'react';
import Link from 'next/link';

const page = () => {
     return (
          <>
               <div className='home-main h-[93.5vh] flex items-center justify-center md:px-0 px-2'>
                    <div className='glass-div w-[30rem] md:p-4 p-2 rounded-md'>
                         <h2 className='text-center text-xl mb-3 text-white'>Welcome</h2>
                         <form action="" method="post">
                              <input className='w-full p-1 md:text-lg text-sm rounded-md' type="email" name="" id="" placeholder='Enter email' />
                              <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="password" name="" id="" placeholder='Enter password' />
                              <button className='my-2 bg-[#0a298c] md:text-lg text-sm text-white px-3 py-1 rounded-sm' type="submit">Login</button>
                         </form>
                         <span className='text-white my-2 md:text-lg text-sm'>
                              Don&apos;t have an account?
                         </span>
                         <Link className='text-[#fff] md:text-lg text-sm my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/sign-up">Sign up</Link>
                    </div>
               </div>
          </>
     );
};

export default page;