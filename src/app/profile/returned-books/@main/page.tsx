"use client"
import Image from 'next/image';
import { bookDataType } from '../../../../../typeScript/book-data';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { getDecodedToken } from '../../../../../serverActions/get-decodedToken';
import { useEffect, useState } from 'react';

const Page = () => {
     const [bookdata, setBookData] = useState<bookDataType[]>([])
     const router = useRouter()
     const [loading, setLoading] = useState(true)
     useEffect(() => {
          const getData = async() => {
               const cookie = Cookies.get("user-cookie")
               if(!cookie) router.push("/login")
               const userId = await getDecodedToken(cookie)
               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-returned-books?userId=${userId?._id}`, {
                    // next: {tags: ["allRequestedBooksForUser"]}
                    cache: "no-store"
               })
               if(response.ok) {
                    const {data} = await response.json()
                    setBookData(data)
               }
          }
          setLoading(false)
          getData()
     }, [])
     return (
          <>
               <div className='w-full py-4 rounded-md bg-slate-300 h-full md:gap-3 gap-1 overflow-y-scroll flex items-start justify-center flex-wrap'>
                    {
                         !loading && bookdata && bookdata.map((value: bookDataType) => <div key={value._id} className='bg-white md:p-3 p-1 rounded-md w-[10rem] md:w-[15rem] md:hover:-translate-y-3 duration-500 '>
                              <div className='w-full md:h-[15rem] h-[10rem]'>
                                   <Image src={value.image ? value.image : "/images/bg img.png"} alt={`${value.name} image`} className='w-full h-full ' width="1000" height="1000" />
                              </div>
                              {/* <h1>{value.image}</h1> */}
                              <div className='mt-2 flex flex-col gap-2 text-[#0a298c] md:text-[0.9rem] text-[0.75rem]'>
                                   <p><span className='text-red-600 font-semibold'>Name: </span> {value.name}</p>
                                   <p><span className='text-red-600 font-semibold'>Author: </span> {value.author}</p>
                                   <p><span className='text-red-600 font-semibold'>Category: </span> {value.category}</p>
                                   <p><span className='text-red-600 font-semibold'>Date: </span> {new Date(value.createdAt as string).toDateString()}</p>
                              </div>
                         </div>)
                    }
                    {
                         loading ? <>
                              <div className='w-[0.8rem] h-[0.8rem] bg-[#0a298c] rounded-full bigger'></div>
                              <div className='w-[0.8rem] h-[0.8rem] bg-[#0a298c] rounded-full bigger'></div>
                              <div className='w-[0.8rem] h-[0.8rem] bg-[#0a298c] rounded-full bigger'></div>
                         </> : <></>
                    }
                    <div className='h-[2rem] w-full md:hidden block'></div>
               </div>
          </>
     );
};

export default Page;
