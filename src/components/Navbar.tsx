"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Cookies from "js-cookie";
import { useEffect, useLayoutEffect, useState } from "react";

const Navbar = () => {
     const [cookie, setCookie] = useState<string | undefined>("")
     const [loading, setLoading] = useState<boolean>(true)
     const path = usePathname()
     useLayoutEffect(() => {
          setCookie(Cookies.get("user-cookie"))
     }, [])
     useEffect(() => {
          setLoading(false)
     }, [])
     return (
          <nav className="user-nav relative">
               <ul className="flex items-center relative md:justify-center justify-around gap-4 bg-[#0a298c] md:text-lg text-[0.9rem] w-full">
                    <li onClick={() => setLoading(true)} className={path === "/home" ? `dash`: ""}><Link href="/home">Home</Link></li>
                    <li onClick={() => setLoading(true)} className={path === "/about" ? `dash`: ""}><Link href="/about">About</Link></li>
                    {
                         cookie ? <>
                         <li onClick={() => setLoading(true)} className={path === "/profile/requested-books" ? `dash`: ""}><Link href="/profile/requested-books">Profile</Link></li>
                         <li onClick={() => {
                              setLoading(true)
                              Cookies.remove("user-cookie")
                              setCookie("")
                              sessionStorage.removeItem("userData")
                              window.location.reload()
                         }} className="cursor-pointer">Logout</li>
                         </> : <>
                         <li onClick={() => setLoading(true)} className={path === "/sign-up" ? `dash`: ""}><Link href="/sign-up">Sign up</Link></li>
                         <li onClick={() => setLoading(true)} className={path === "/login" ? `dash`: ""}><Link href="/login">Log in</Link></li>
                         </>
                    }
                    {
                         loading ? <div className="h-[0.3rem] w-[150vw] bg-red-500 absolute -left-[100px] -top-[0%] loader md:hidden block"></div> : <></>
                    }
                    
               </ul>
               {
                    loading ? <div className="h-[0.3rem] w-[150vw] bg-red-500 absolute -left-[500%] top-[143%] md:block hidden loader"></div> : <></>
               }
          </nav>
     );
};

export default Navbar;