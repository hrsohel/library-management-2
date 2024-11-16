"use client"
import React, { useLayoutEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import { IoCloudUploadOutline } from "react-icons/io5";
import useStateAndMethods from '../../hooks/useStateAndMethods';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const ProfileSideBar = () => {
     const {show, setShow} = useStateAndMethods(true) 
     useLayoutEffect(() => {
          if(window.innerWidth < 768)
               setShow(false)
          else
               setShow(true)
     }, [])
     return (
          <>
               {
                    show ? <></> : <FaBars 
                         style={{background: "rgba(255, 255, 255, 0.5)"}} 
                         className='absolute z-10 md:hidden block top-[7%] left-4 p-1.5 rounded-full' 
                         onClick={() => setShow(true)} 
                         size={40} color='#0a298c' 
                    />
               }
               {
                    show ? <div className={`md:w-[20rem] relative w-full py-4 px-2 bg-[#0a298c] text-white text-[1rem] md:h-full rounded-md`}>
                         {
                              show ? <FaTimes 
                                   className='absolute md:hidden block top-4 left-4' 
                                   onClick={() => setShow(false)} size={30} 
                              /> : <></>
                         }
                         <div className='w-[10rem] h-[10rem] rounded-full my-2 mx-auto relative'>
                              <Image src="/images/user.png" className='w-full h-full object-cover' alt="HR Sohel's picture" width={1000} height={1000}/>
                              <label htmlFor="image">
                                   <IoCloudUploadOutline className="absolute bottom-[10%] left-[80%] cursor-pointer" size={35} />
                              </label>
                              <input type="file" name="image" id="image" className='hidden' />
                         </div>
                         <div className='relative'>
                              <ul className='flex flex-col gap-2 text-center md:text-lg text-sm'>
                                   <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                        <Link href="/admin">All books</Link>
                                   </li>
                                   <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                        <Link href="/admin-requested-books">Requested books</Link>
                                   </li>
                                   <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                        <Link href="/admin-issued-books">Issued books</Link>
                                   </li>
                                   <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                        <Link href="/admin-returned-books">Returned books</Link>
                                   </li>
                              </ul>
                         </div>
                    </div> : <></>
               }
          </>
     );
};

export default ProfileSideBar;