"use client"
import Image from 'next/image';
import React, { useRef } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useSelector } from 'react-redux';
import { selectAddBookData } from '../../../redux/slices/addBookSlice';
import useHookForAddBook from '../../../hooks/useHookForAddBook';
import { redirect } from 'next/navigation';

const Page = () => {
     const ref = useRef<HTMLFormElement>(null)
     const {loading, message} = useSelector(selectAddBookData)
     const {submit, error, previewImage, onchangeImage} = useHookForAddBook()
     if(message.message && message.status) redirect("/admin")
     return (
          <>
               <div className='w-full rounded-md bg-slate-300 h-full gap-3 overflow-y-scroll flex items-center justify-center flex-wrap px-2'>
                    <div className='glass-div w-[40rem] relative md:p-4 p-1 rounded-md border-2 border-[#0a298c]'>  
                         <h2 className='text-center text-xl mb-3 text-black'>Welcome</h2>
                         {
                              message.message && !message.status ? <h3 className='bg-red-300 text-red-500 p-1 rounded-sm'>Failed to add book. Please try again.</h3> : <></>
                         }
                         <form ref={ref} onSubmit={submit} method="post" encType="multipart/form-data" >
                              <div className='mx-auto mb-4 relative w-[8rem] h-[12rem]'>
                                   <Image src={`${previewImage ? previewImage : "/images/bg img.png"}`} className='w-full h-full object-cover' alt='Book image' width="1000" height="1000" />
                                   <label htmlFor="image" className='p-1 rounded-full image-container w-[2rem] h-[2rem] absolute bottom-[10%] left-[85%] cursor-pointer'>
                                        <IoCloudUploadOutline className='mx-auto md:text-2xl text-lg'  />
                                   </label>
                                   <input onChange={onchangeImage} type="file" name="image" id="image" className='hidden' />
                                   {error && <p className='inline fixed left-4 top-4 bg-red-300 text-red-500 p-1 rounded-sm'>{error}</p>}
                              </div>
                              <div className='flex items-center justify-between gap-3 md:flex-nowrap flex-wrap'>
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md `} type="text" name="name" id="" placeholder='Enter book name' required={true} />
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md `} type="text" name="author" id="" placeholder='Enter book author' required={true} />
                              </div>
                              <div className='flex items-center justify-between gap-3'>
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2 `} type="text" name="category" id="" placeholder='Enter book category' required={true} />
                                   
                              </div>
                              <textarea className={`w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2`} name="description" id="" placeholder='Enter book description'></textarea>
                              {
                                   loading ? <>
                                       <span className='my-2 md:text-lg text-sm bg-[#0a298c] text-white px-3 py-1 rounded-sm'>Submiting ...</span> 
                                   </> : <button className='my-2 md:text-lg text-sm bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit" disabled={loading}>Update</button>
                              }
                         </form>
                    </div>
               </div> 
          </>
     );
};

export default Page;