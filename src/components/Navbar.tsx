"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
     const path = usePathname()
     return (
          <nav className="user-nav">
               <ul className="flex items-center justify-center gap-4 bg-[#0a298c] md:text-lg text-sm w-full">
                    <li className={path === "/" ? `dash`: ""}><Link href="/">Home</Link></li>
                    <li className={path === "/about" ? `dash`: ""}><Link href="/about">About</Link></li>
                    <li className={path === "/sign-up" ? `dash`: ""}><Link href="/sign-up">Sign up</Link></li>
                    <li className={path === "/login" ? `dash`: ""}><Link href="/login">Log in</Link></li>
                    <li className={path === "/profile/requested-books" ? `dash`: ""}><Link href="/profile/requested-books">Profile</Link></li>
               </ul>
          </nav>
     );
};

export default Navbar;