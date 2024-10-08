import Image from 'next/image';
import React from 'react';

const page = () => {
     return (
          <>
               <div className='w-full rounded-md bg-slate-300 h-full gap-3 overflow-y-scroll flex items-center justify-center flex-wrap'>
                    <div className='bg-white p-1 rounded-md w-[15rem] hover:-translate-y-3 duration-500 '>
                         <div className='w-full h-[15rem]'>
                              <Image src="/images/java.jpeg" alt='Java book' className='w-full h-full object-cover' width="1000" height="1000" />
                         </div>
                         <div className='mt-2 flex flex-col gap-2 text-[#0a298c]'>
                              <p>Name: Java Book</p>
                              <p>Author: Someone</p>
                              <p>Category: Programming</p>
                              <p>Date: 25-09-2024</p>
                         </div>
                    </div>
                    <div className='bg-white p-1 rounded-md w-[15rem] hover:-translate-y-3 duration-500 '>
                         <div className='w-full h-[15rem]'>
                              <Image src="/images/sql.jpeg" alt='SQL book' className='w-full h-full object-cover' width="1000" height="1000" />
                         </div>
                         <div className='mt-2 flex flex-col gap-2 text-[#0a298c]'>
                              <p>Name: SQL Book</p>
                              <p>Author: Someone</p>
                              <p>Category: SQL</p>
                              <p>Date: 02-10-2024</p>
                         </div>
                    </div>
                    <div className='bg-white p-1 rounded-md w-[15rem] hover:-translate-y-3 duration-500'>
                         <div className='w-full h-[15rem]'>
                              <Image src="/images/cryptography.jpeg" alt='Cryptography book' className='w-full h-full object-cover' width="1000" height="1000" />
                         </div>
                         <div className='mt-2 flex flex-col gap-2 text-[#0a298c]'>
                              <p>Name: Cryptography Book</p>
                              <p>Author: Someone</p>
                              <p>Category: Programming</p>
                              <p>Date: 02-10-2024</p>
                         </div>
                    </div>
                    <div className='bg-white p-1 rounded-md w-[15rem] hover:-translate-y-3 duration-500'>
                         <div className='w-full h-[15rem]'>
                              <Image src="/images/c++ programming.jpg" alt='C++ programming book' className='w-full h-full object-cover' width="1000" height="1000" />
                         </div>
                         <div className='mt-2 flex flex-col gap-2 text-[#0a298c]'>
                              <p>Name: C++ Programming Book</p>
                              <p>Author: Someone</p>
                              <p>Category: Programming</p>
                              <p>Date: 02-10-2024</p>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default page;