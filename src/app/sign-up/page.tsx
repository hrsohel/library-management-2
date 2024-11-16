"use client"
import React, { useEffect } from 'react';
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '../../../redux/store';
import SignUpForm from '@/components/SignUpForm';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const SignUp = () => {
     const router = useRouter()
     useEffect(() => {
          if(Cookies.get("user-cookie")) router.push("/home")
     }, [])
     return (
          <Provider store={store}>
               <div className='home-main h-[93.5vh] flex items-center justify-center px-2 md:px-0'>
                    <div className='glass-div w-[40rem] md:p-4 p-2 rounded-md'>
                         <h2 className='text-center text-xl mb-3 text-white'>Welcome</h2>
                         <SignUpForm />
                         <span className='text-white my-2 md:text-lg text-sm'>
                              Have an account?
                         </span>
                         <Link className='text-[#fff] md:text-lg text-sm my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/login">Login</Link>
                    </div>
               </div>
          </Provider>
     );
};

export default SignUp;