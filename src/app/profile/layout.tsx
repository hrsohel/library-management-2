import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PersnalInfo from "@/components/PersnalInfo";

export const metadata: Metadata = {
     title: "HR Sohel's profile"
}

export default function RootLayour({children}: {children: React.ReactNode}) {
     return (
          <section className='flex items-center justify-between md:flex-nowrap w-screen my-2 h-[90vh] gap-2 px-2'>
               <div className='w-[20%] py-4 px-2 bg-[#0a298c] text-white text-[1rem] h-full rounded-md'>
                    <div className='w-[10rem] h-[10rem] rounded-full my-2 mx-auto'>
                         <Image src="/images/user.png" className='w-full h-full object-cover' alt="HR Sohel's picture" width={1000} height={1000}/>
                    </div>
                    <PersnalInfo />
                    <div>
                         <ul className='flex flex-col gap-2 text-center'>
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
               {children}
          </section>
     )
}