import React from 'react';
import Image from 'next/image';
import { bookData, bookDataType } from '../../../../typeScript/book-data';

const page = () => {
     return (
          <>
               <div className='w-full rounded-md bg-slate-300 h-full md:gap-3 gap-1 overflow-y-scroll flex items-center justify-center flex-wrap'>
                    {
                         bookData.map((value: bookDataType) => <div key={value.id} className='bg-white md:p-3 p-1 rounded-md w-[10rem] md:w-[15rem] md:hover:-translate-y-3 duration-500 '>
                              <div className='w-full md:h-[15rem] h-[10rem]'>
                                   <Image src={value.image} alt='Java book' className='w-full h-full object-cover' width="1000" height="1000" />
                              </div>
                              <div className='mt-2 flex flex-col gap-2 text-[#0a298c] md:text-lg text-sm'>
                                   <p>Name: {value.name}</p>
                                   <p>Author: {value.author}</p>
                                   <p>Category: {value.category}</p>
                                   <p>Date: {value.date}</p>
                              </div>
                         </div>)
                    }
               </div>
          </>
     );
};

export default page;