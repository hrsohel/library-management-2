"use client"
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const HomeForm = () => {
     const [loading, setLoading] = useState(false)
     const router = useRouter()
     const action = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setLoading(true)
          const {search} = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          if(search)
               router.push(`/search-book?search=${search}`)
          else setLoading(false)
     }
     return (
          <>
               <form onSubmit={action} className="flex relative items-center justify-center md:w-[30rem] w-full sm:text-lg text-sm">
                    <input className="sm:w-[90%] w-[80%] border-none outline-none p-2 rounded-l-md" type="search" name="search" id="search" placeholder="Search by book name or category" />
                    <button type="submit" className="sm:w-[10%] w-[20%] bg-[#0a298c] sm:p-[16px] p-[11px] rounded-r-md cursor-pointer">
                         <FaSearch style={{ width: "100%", color: "#fff" }} className='md:text-xl text-lg' />
                    </button>
                    {
                         loading ? <div className='h-[0.2rem] loader bg-white absolute top-[101%] w-full rounded-full'></div> : <></>
                    }
               </form>
          </>
     );
};

export default HomeForm;