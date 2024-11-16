"use client"
import React, { useEffect, useState } from 'react';
import useHookForUserInfo from '../../../../../hooks/useHookForUserInfo';
import { useRouter } from 'next/navigation';
import { userData } from '../../../../../typeScript/book-data';

const UpdateProfile = () => {
     const [userData, setUserData] = useState<userData | null>(null)
     const {setRefresh, refresh} = useHookForUserInfo()
     const [loading, setLoading] = useState<boolean>(false)
     const router = useRouter()
     const submit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          setLoading(true)
          const formData = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/update-user-data`, {
               method: "POST",
               body: JSON.stringify(formData),
               headers: {
                    "Content-Type": "application/json"
               }
          })
          const {data} = await response.json()
          sessionStorage.setItem("userData", JSON.stringify(data))
          setRefresh(!refresh)
          setLoading(false)
          router.back()
     }
     useEffect(() => {
          const cachedData = sessionStorage.getItem("userData")
          if(cachedData) setUserData(JSON.parse(cachedData))
     }, [])
     return (
          <div className='w-full rounded-md bg-slate-300 h-full gap-3 overflow-y-scroll flex items-center justify-center flex-wrap px-2'>
               <div className='glass-div w-[40rem] p-4 rounded-md border-2 border-[#0a298c]'>
                    <h2 className='text-center text-xl mb-3 text-black'>Welcome</h2>
                    <form onSubmit={submit} method="post" >
                         <input type="hidden" name="id" defaultValue={userData?._id} />
                         <div className='flex items-center justify-between gap-3 md:flex-nowrap flex-wrap'>
                              <input className='w-full p-1 md:text-lg text-sm rounded-md' type="text" name="fullName" defaultValue={userData?.fullName} placeholder='Full name' />
                              <input className='w-full p-1 md:text-lg text-sm rounded-md' type="email" name="email" defaultValue={userData?.email} placeholder='Enter email' />
                         </div>
                         <div className='flex items-center justify-between gap-3'>
                              <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="text" name="postCode" defaultValue={userData?.postCode} placeholder='Enter post code' />
                              <input className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' type="tel" name="phone" defaultValue={userData?.phone} placeholder='Enter phone number' />
                         </div>
                         <textarea className='w-full p-1 md:text-lg text-sm rounded-md md:mt-8 mt-2' name="address" defaultValue={userData?.address} placeholder='Enter address'></textarea>
                         <button className='my-2 md:text-lg text-sm bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit" disabled={loading}>{
                              loading ? "Loading..." : "Update"
                         }</button>
                    </form>
               </div>
          </div>
     );
};

export default UpdateProfile;