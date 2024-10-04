"use client"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { IoCloudUploadOutline } from "react-icons/io5";
import useStateAndMethods from '../../hooks/useStateAndMethods';
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const ProfileSideBar = () => {
     const {show, setShow} = useStateAndMethods(true)
     return (
          <>
               {
                    show ? <></> : <FaBars className='fixed md:hidden block top-[7%] left-4' onClick={() => setShow(true)} size={30} />
               }
               {
                    show ? <div className={`md:w-[20rem] relative w-full py-4 px-2 bg-[#0a298c] text-white text-[1rem] h-[80%] md:h-full rounded-md`}>
                         {
                              show ? <FaTimes className='absolute md:hidden block top-4 left-4' onClick={() => setShow(false)} size={30} /> : <></>
                         }
                         <div className='w-[10rem] h-[10rem] rounded-full my-2 mx-auto relative'>
                              <Image src="/images/user.png" className='w-full h-full object-cover' alt="HR Sohel's picture" width={1000} height={1000}/>
                              <IoCloudUploadOutline className="absolute bottom-[10%] left-[80%] cursor-pointer" size={35} />
                         </div>
                         <div>
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