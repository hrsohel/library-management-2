"use client"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import PersnalInfo from "@/components/PersnalInfo";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";


const ProfileSideBar = ({show, setShow}: {show: boolean, setShow: (show: boolean) => void}) => {
     return (
          <>
               <div className={`md:w-[20rem] relative w-full ${show ? "block" : "hidden"} py-4 px-2 bg-[#0a298c] text-white text-[1rem] h-[80%] md:h-full rounded-md`}>
                    {
                         show ? <FaTimes onClick={() => setShow(false)} className='md:hidden block' /> : <FaBars onClick={() => setShow(true)} className='md:hidden block' />
                    }
                    <div className='w-[10rem] h-[10rem] rounded-full my-2 mx-auto relative'>
                         <Image src="/images/user.png" className='w-full h-full object-cover' alt="HR Sohel's picture" width={1000} height={1000}/>
                         <IoCloudUploadOutline className="absolute bottom-[10%] left-[80%] cursor-pointer" size={35} />
                    </div>
                    <PersnalInfo />
                    <div>
                         <ul className='flex flex-col gap-2 text-center md:text-lg text-sm'>
                              <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                   <Link href="/profile/requested-books">Requested books</Link>
                              </li>
                              <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                   <Link href="/profile/issued-books">Issued books</Link>
                              </li>
                              <li className='bg-[#041241] p-3 rounded-md hover:bg-red-800'>
                                   <Link href="/profile/returned-books">Returned books</Link>
                              </li>
                         </ul>
                    </div>
               </div>
          </>
     );
};

export default ProfileSideBar;