"use client"
import React, { useState } from 'react';
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa";
import Link from 'next/link';

const PersnalInfo = () => {
     const [show, setShow] = useState(false)
     return (
          <div className='my-1'>
               {
                    show ? 
                    <FaAngleUp onClick={() => setShow(false)} className='ml-auto cursor-pointer' /> : 
                    <FaAngleDown onClick={() => setShow(true)} className='ml-auto cursor-pointer' />
               }
               {
                    show ? 
                    <div>
                         <Link href="/profile/update-profile" className='bg-white px-2 py-1 text-[#0a298c] text-[.75rem] rounded-sm font-semibold'>Update info</Link>
                         <div className='flex items-center justify-between text-[.75rem]'>
                              <h2>Name</h2>
                              <p className='text-[#fff]'>HR Sohel</p>
                         </div>
                         <div className='flex items-center justify-between text-[.75rem]'>
                              <h2>Email</h2>
                              <p className='text-[#fff]'>hrsohel@gmail.com</p>
                         </div>
                         <div className='flex items-center justify-between text-[.75rem]'>
                              <h2>Phone</h2>
                              <p className='text-[#fff]'>5654345564</p>
                         </div>
                         <div className='flex items-center justify-between text-[.75rem]'>
                              <h2>Address</h2>
                              <p className='text-[#fff]'>Aman Bazar</p>
                         </div>
                         <div className='flex items-center justify-between text-[.75rem]'>
                              <h2>Post code</h2>
                              <p className='text-[#fff]'>4000</p>
                         </div>
                    </div> : <></>
               }
          </div>
     );
};

export default PersnalInfo;