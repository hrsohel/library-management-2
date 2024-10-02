import React from 'react';

const page = () => {
     return (
          <div className='w-[80%] rounded-md bg-slate-300 h-full gap-3 overflow-y-scroll flex items-center justify-center'>
               <div className='glass-div w-[40rem] p-4 rounded-md border-2 border-[#0a298c]'>
                    <h2 className='text-center text-xl mb-3 text-black'>Welcome</h2>
                    <form action="" method="post">
                         <div className='flex items-center justify-between gap-3 md:flex-nowrap'>
                              <input className='w-full p-1 text-lg rounded-md' type="text" name="" id="" placeholder='Full name' />
                              <input className='w-full p-1 text-lg rounded-md' type="email" name="" id="" placeholder='Enter email' />
                         </div>
                         <div className='flex items-center justify-between gap-3 md:flex-nowrap'>
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="text" name="" id="" placeholder='Enter post code' />
                              <input className='w-full p-1 text-lg rounded-md mt-8' type="tel" name="" id="" placeholder='Enter phone number' />
                         </div>
                         <textarea className='w-full p-1 text-lg rounded-md mt-8' name="" id="" placeholder='Enter address'></textarea>
                         <button className='my-2 bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit">Update</button>
                    </form>
               </div>
          </div>
     );
};

export default page;