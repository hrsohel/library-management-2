"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectUserLoginInfo, setLoadingToFalseForLogin } from '../../../redux/slices/loginReducer';
import { useRouter } from 'next/navigation';
import Cookie from 'js-cookie';
import { AppDispatch } from '../../../redux/store';

const Page = () => {
     var timer: any
     const router = useRouter()
     const [cookie, setCookie] = useState <string | undefined> ("")
     const dispatch: AppDispatch = useDispatch()
     const {loading, message, data} = useSelector(selectUserLoginInfo)
     const submit = async (e: React.FormEvent) => {
          e.preventDefault()
          const formData: {[key: string]: any} = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          dispatch(loginUser(formData))
     }
     if(message.status) {
          timer = setTimeout(() => {
               Cookie.set("user-cookie", data?.token as string)
               dispatch(setLoadingToFalseForLogin())
               router.push("/home")
               window.location.reload()
          }, 3000)
     }
     useEffect(() => {
          setCookie(Cookie.get("user-cookie"))
          if(cookie) router.push("/home")
          return () => {
               clearTimeout(timer)
          }   
     })
     return (
          <>
               <div className='home-main h-[93.5vh] flex items-center justify-center md:px-0 px-2'>
                    <div className={`
                              ${message.status ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} 
                              transition-all duration-300 rounded-md inline px-2 py-1 fixed 
                              ${message.message ? "left-4" : "-left-[200%]"} top-[10%]
                         `}>{message.message}
                    </div>
                    <div className='glass-div w-[30rem] md:p-4 p-2 rounded-md'>
                         <h2 className='text-center text-xl mb-3 text-white'>Welcome</h2>
                         <form onSubmit={submit} method="post">
                              <input className='w-full p-1 md:text-lg text-sm rounded-md' type="email" name="email" id="" placeholder='Enter email' />
                              <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="password" name="password" id="" placeholder='Enter password' />
                              {
                                   loading ? 
                                   <>
                                        <div className="lds-facebook my-2 rounded-sm"><div></div><div></div><div></div></div>
                                   </> : 
                                   <button className='my-2 bg-[#0a298c] md:text-lg text-sm text-white px-3 py-1 rounded-sm' type="submit">Login</button>
                              }
                         </form>
                         <span className='text-white my-2 md:text-lg text-sm'>
                              Don&apos;t have an account?
                         </span>
                         <Link className='text-[#fff] md:text-lg text-sm my-2 ml-2 hover:border-b-2 hover:border-[#0a298c]' href="/sign-up">Sign up</Link>
                    </div>
               </div>
          </>
     );
};

export default Page;