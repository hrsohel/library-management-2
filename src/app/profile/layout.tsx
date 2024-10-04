"use client"
import React, {useState} from "react";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import ProfileSideBar from "@/components/ProfileSideBar";

export default function RootLayour({children}: {children: React.ReactNode}) {
     const [show, setShow] = useState(true)
     return (
          <section className='flex items-center justify-between md:flex-nowrap flex-wrap w-screen my-2 h-[90vh] gap-2 px-2'>
               {
                    show ? <FaTimes onClick={() => setShow(false)} className="absolute left-[10%] top-[10%]" />
                    
                    : <FaBars onClick={() => setShow(true)} className="absolute left-[1%] top-[7%]" />
               }
               <ProfileSideBar show={show} setShow={setShow} />
               {children}
          </section>
     )
}