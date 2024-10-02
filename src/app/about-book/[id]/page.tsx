import Image from 'next/image';
import React from 'react';

const page = () => {
     return (
          <>
               <div className='flex items-center justify-around gap-4 min-h-[80vh] bg-slate-300'>
                    <div className='w-[25rem] h-[35rem] border-2'>
                         <Image className='w-full h-full object-contain' src="/images/java.jpeg" alt='Java book' width={1000} height={1000} />
                         <button className='px-4 py-1 mt-1 text-lg rounded-sm bg-[#0a298c] text-white'>Borrow this book</button>
                    </div>
                    <div className='flex flex-col gap-4 w-[40rem]'>
                         <div className='flex items-center justify-between'>
                              <div>
                                   <h3 className='font-semibold text-lg'>Name</h3>
                                   <p>Java Book</p>
                              </div>
                              <div>
                                   <h3 className='font-semibold text-lg'>Autor</h3>
                                   <p>Someone</p>
                              </div>
                         </div>
                         <div className='flex items-center justify-between'>
                              <div>
                                   <h3 className='font-semibold text-lg'>Catagory</h3>
                                   <p>Programming</p>
                              </div>
                              <div>
                                   <h3 className='font-semibold text-lg'>Quantity</h3>
                                   <p>10</p>
                              </div>
                         </div>
                         <div>
                              <textarea className='w-full p-1 rounded-sm' name="" id="" placeholder='Write something about this book'></textarea>
                              <button className='text-white bg-[#0a298c] px-4 py-2 my-2' type="submit">Submit</button>
                         </div>
                    </div>
               </div>
               <h2 className='bg-slate-300 text-center text-xl font-semibold py-2 underline'>Comments</h2>
               <div className='bg-slate-300 flex items-center justify-center flex-col gap-4 py-4'>
                    <div className='flex items-start justify-center gap-4'>
                         <Image src="/images/user.png" alt='HR Sohel' className='w-[3rem] h-[3rem] rounded-full' width={1000} height={1000} />
                         <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis maiores aut repellat ipsam? Voluptatem blanditiis eligendi numquam debitis tenetur.
                         </p>
                    </div>
                    <div className='flex items-start justify-center gap-4'>
                         <Image src="/images/user.png" alt='HR Sohel' className='w-[3rem] h-[3rem] rounded-full' width={1000} height={1000} />
                         <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis maiores aut repellat ipsam? Voluptatem blanditiis eligendi numquam debitis tenetur.
                         </p>
                    </div>
                    <div className='flex items-start justify-center gap-4'>
                         <Image src="/images/user.png" alt='HR Sohel' className='w-[3rem] h-[3rem] rounded-full' width={1000} height={1000} />
                         <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis maiores aut repellat ipsam? Voluptatem blanditiis eligendi numquam debitis tenetur.
                         </p>
                    </div>
                    <div className='flex items-start justify-center gap-4'>
                         <Image src="/images/user.png" alt='HR Sohel' className='w-[3rem] h-[3rem] rounded-full' width={1000} height={1000} />
                         <p>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis maiores aut repellat ipsam? Voluptatem blanditiis eligendi numquam debitis tenetur.
                         </p>
                    </div>
               </div>
          </>
     );
};

export default page;