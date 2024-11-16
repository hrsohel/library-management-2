"use client"
import React, {useLayoutEffect} from 'react';
import Image from "next/image";
import Link from "next/link";
import PersnalInfo from "@/components/PersnalInfo";
import { IoCloudUploadOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import useStateAndMethods from '../../hooks/useStateAndMethods';
import useHookForAddBook from '../../hooks/useHookForAddBook';
import useHookForUserInfo from '../../hooks/useHookForUserInfo';
import { usePathname } from 'next/navigation';

const ProfileSideBar = () => {
     const path = usePathname()
     const {previewImage, onchangeImage} = useHookForAddBook()
     const {show, setShow} = useStateAndMethods(true)
     const {userData} = useHookForUserInfo()
     useLayoutEffect(() => {
          if(window.innerWidth < 768)
               setShow(false)
          else
               setShow(true)
     }, [])
     const updateImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
          const file: File | null = e.target.files && e.target.files[0]
          const isImage = file?.type.split("/")[0]
          if(isImage !== "image") return
          onchangeImage(e)
          const formData = new FormData()
          formData.append("image", file ? file : "")
          formData.append("_id", userData._id)
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/update-image`, {
               method: "POST",
               body: formData,
          })
          const {data} = await response.json()
          const sessionUser: string | null = sessionStorage.getItem("userData")
          const parsedUser = sessionUser && JSON.parse(sessionUser)
          const setSession = {...parsedUser, image: data}
          sessionStorage.setItem("userData", JSON.stringify(setSession))
          // await fetchUserData(userData._id)
     }
     return (
          <>
               {
                    show ? <></> : <FaBars style={{background: "rgba(0, 0, 0, 0.3)"}} className='fixed px-1 rounded-full md:hidden block top-[7%] left-4 p-1 z-10' onClick={() => setShow(true)} size={40} />
               }
               {
                    show ? <div className={`md:w-[20rem] relative w-full py-4 px-2 bg-[#0a298c] text-white text-[1rem]  md:h-full rounded-md`}>
                         {
                              show ? <FaTimes className='absolute md:hidden block top-4 left-4' onClick={() => setShow(false)} size={30} /> : <></>
                         }
                         <div className='w-[10rem] h-[10rem] rounded-full my-2 mx-auto relative'>
                              <Image src={previewImage || userData.image || "/images/user.png" } className='w-full h-full object-cover rounded-full' alt="HR Sohel's picture" width={1000} height={1000}/>
                              <label htmlFor="image">
                                   <IoCloudUploadOutline className="absolute bottom-[10%] left-[80%] cursor-pointer" size={35} />
                              </label>
                              <input onChange={(e) => updateImage(e)} type="file" name="image" id="image" className='hidden' />
                         
                         </div>
                         <PersnalInfo userData={userData} />
                         <div>
                              <ul className='flex flex-col gap-2 text-center md:text-lg text-sm'>
                                   <li className={`${path === "/profile/all-books" ? "bg-red-700" : "bg-[#041241]"} bg-[#041241] rounded-md hover:bg-red-800`}>
                                        <Link className='block p-3 w-full' href="/profile/all-books">All books</Link>
                                   </li>
                                   <li className={`${path === "/profile/requested-books" ? "bg-red-700" : "bg-[#041241]"} bg-[#041241] rounded-md hover:bg-red-800`}>
                                        <Link className='block w-full p-3' href="/profile/requested-books">Requested books</Link>
                                   </li>
                                   <li className={`${path === "/profile/issued-books" ? "bg-red-700" : "bg-[#041241]"} bg-[#041241] rounded-md hover:bg-red-800`}>
                                        <Link className='block w-full p-3' href="/profile/issued-books">Issued books</Link>
                                   </li>
                                   <li className={`${path === "/profile/returned-books" ? "bg-red-700" : "bg-[#041241]"} bg-[#041241] rounded-md hover:bg-red-800`}>
                                        <Link className='block w-full p-3' href="/profile/returned-books">Returned books</Link>
                                   </li>
                              </ul>
                         </div>
                    </div> : <></>
               }
          </>
     );
};

export default ProfileSideBar;