import Link from "next/link";

const Navbar = () => {
     return (
          <nav>
               <ul className="flex items-center justify-center gap-4">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/sign-up">Sign up</Link></li>
                    <li><Link href="/login">Log in</Link></li>
               </ul>
          </nav>
     );
};

export default Navbar;