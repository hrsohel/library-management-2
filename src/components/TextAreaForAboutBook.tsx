"use client"
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Link from 'next/link';

const AddBook = ({_id}: {_id: string}) => {
     const [comment, setComment] = useState<string>("")
     const [loading, setLoading] = useState<boolean>(false)
     const [cookie, setCookie] = useState<string | undefined>("")
     const [showMessage, setShowMessage] = useState<boolean>(false)
     const addComment = async () => {
          try {
               if(!cookie) {
                    setShowMessage(true)
                    return
               }
               setLoading(true)
               setShowMessage(false)
               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-comment`, {
                    method: "POST",
                    body: JSON.stringify({comment, _id, user: cookie}),
                    headers: {
                         "Content-Type": "application/json"
                    }
               })
               await response.json()
               setComment("")
               setLoading(false)
          } catch (error: unknown) {
               if (error instanceof Error) {
                    alert(error.message);
                } else {
                    alert("An unknown error occurred.");
                }
               setLoading(false)
          }
     }
     useEffect(() => {
          setCookie(Cookies.get("user-cookie"))
     }, [])
     return (
          <>
               <div>
                    <textarea onChange={(e) => {
                         setComment(e.target.value)
                    }} className='w-full p-1 rounded-sm bg-slate-300' placeholder='Write something about this book' value={comment}></textarea>
                    <button onClick={addComment} className='text-white bg-[#0a298c] rounded-md px-4 py-1 my-2 text-sm' type="submit" disabled={loading || !comment}>
                         {
                              loading ? "Loading..." : "Add Comment"
                         }
                    </button>
                    {
                         showMessage ? 
                         <div className='p-1 rounded-sm bg-red-200 text-lg text-red-500'>
                              <p>
                                   You must login to comment. Please login 
                                   <Link className='text-[#0a298c] ml-1' href="/login" >
                                        here.
                                   </Link>
                              </p> 
                         </div> : <></>
                    }
               </div>
          </>
     );
};

export default AddBook;