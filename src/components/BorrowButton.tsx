"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import Cookies from 'js-cookie';
import { revalidTag } from '../../serverActions/get-decodedToken';

const BorrowButton = ({_id}: {_id: string}) => {
     const [show, setShow] = useState(false)
     const [message, setMessage] = useState(false)
     const [days, setDays] = useState<number>(0)
     const [loading, setLoading] = useState(false)
     const [responseMessage, setResponseMessage] = useState<string>("")
     const submit = async () => {
          setLoading(true)
          const cookie = Cookies.get("user-cookie")
          if(!cookie) {
               setMessage(true)
               setLoading(false)
               return
          }
          const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/request-this-book`, {
               method: "POST",
               body: JSON.stringify({token: cookie, bookId: _id, days}),
               headers: {
                    "Content-Type": "application/json"
               }
          })
          const data = await response.json()
          revalidTag("allRequestedBookWithUser")
          revalidTag("allRequestedBookForAdmin")
          setResponseMessage(data.message)
          setDays(0)
          setLoading(false)
     }
     return (
          <>
             <div className='relative'>
               {
                    !show ? <button onClick={() => {
                         setShow(true)
                    }} className='px-2 py-1 mt-2 text-sm md:text-[0.9rem] rounded-full bg-[#0a298c] text-white'>Borrow this book</button>  : <></>
               }
               {
                    show ? <div className='p-1 bg-white flex items-start justify-start flex-col gap-1 absolute left-0 top-[110%] border-2 border-[#0a298c] rounded-md'>
                         <div className='flex items-end justify-center'>
                              <div>
                                   <label htmlFor="" className='block text-sm'>For how many days?</label>
                                   <input onChange={(e) => setDays(Number(e.target.value))} type="number" min={0} name="days" defaultValue={days} className='w-[5rem] outline-none border-2 border-[#0a298c] p-1 text-sm rounded-sm' />
                              </div>
                              
                              <div className='flex items-start gap-2 justify-start'>
                                   <button onClick={submit} className='text-sm px-2 py-1 text-[#fff] bg-[#0a298c] rounded-sm' disabled={loading || !days}>
                                        {
                                             loading ? "Loading..." : "Sumit"
                                        }
                                   </button>
                                   <button onClick={() => {
                                        setShow(false)
                                   }} className='text-sm px-2 py-1 text-[#fff] bg-[#0a298c] rounded-sm'>Cancel</button>
                              </div>
                         </div>
                         
                        {
                         message ?  <div className='bg-rose-300 text-red-600 p-1 rounded-md text-sm'>
                                   <p>
                                        You must login to borrow this book. Login <Link href="/login" className='border-b-2 border-[#0a298c]' >Here.</Link>
                                   </p>
                              </div> : <></>
                        }
                        {
                         responseMessage ? 
                         <div className='bg-blue-300 text-[#0a298c] p-1 rounded-sm text-sm'>
                              <p>
                                   {responseMessage}
                              </p>
                         </div>: <></>
                        }
                    </div> : <></>
               }
             </div>
          </>
     );
};

export default BorrowButton;