"use client"
import Link from 'next/link';
import React from 'react';
import { revalidTag } from '../../serverActions/get-decodedToken';
import { redirect } from 'next/navigation';

const ThreeButton = ({_id}: {_id: string | undefined}) => {
     // const [message, setMessage] = useState<string>("Failed to delete this book. Please try again.")
     const deleteBook = async () => {
          try {
               if(confirm("Do you want to delete this book?")) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/delete-book/${_id}`, {
                         method: "DELETE",
                         headers: {
                              "Content-Type": "application/json"
                         }
                    })
                    await revalidTag("allBookDataInAdmin")
                    const {data} = await response.json()
                    if(data.status) {
                         redirect("/admin")
                    }
                    else alert("Failed to delete this book. Please try again.")
               }
          } catch (error) {
               console.error("Failed to delete the book:", error); 
               alert("An error occurred. Please try again.");
          }
     }
     return (
          <>
               <div style={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} className='flex gap-2 md:text-sm text-[0.5rem] mt-2 text-red-600 items-center justify-center md:px-2 px-1 md:py-2 py-1 rounded-full'>
                    <Link href={`/update-book/${_id}`} className='py-1 px-2 text-white rounded-md bg-[#0a298c]'>Update</Link>
                    <Link href={`/about-book/${_id}`} className='py-1 px-2 text-white rounded-md bg-[#0a298c]'>Details</Link>
                    <button onClick={deleteBook} className='py-1 px-2 text-white rounded-md bg-[#0a298c]'>Delete</button>
                    
               </div>
          </>
     );
};

export default ThreeButton;