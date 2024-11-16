"use client"
import Image from 'next/image';
import React, {  useEffect, useRef, useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { bookDataType } from '../../../../typeScript/book-data';
import { selectUpdateBookData, updateBook } from '../../../../redux/slices/updateBookSlice';
import useHookForAddBook from '../../../../hooks/useHookForAddBook';
import { redirect } from 'next/navigation';
import { AppDispatch } from '../../../../redux/store';

interface Context {
     params: {_id: string}
}

const UpdateBook = (context: Context) => {
     const dispatch: AppDispatch = useDispatch()
     const ref = useRef<HTMLFormElement>(null)
     const [bookData, setBookData] = useState<bookDataType | null>(null)
     const {loading, message} = useSelector(selectUpdateBookData)
     const {onchangeImage,previewImage} = useHookForAddBook()
     useEffect(() => {
          const getBook = async () => {
               const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-single-book/${context.params._id}`)
               const {data} = await res.json()
               setBookData(data[0])
          }
          getBook()
     }, [])
     const submit = (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          const {name, description, author, _id, category, new_image} = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          const inputData = new FormData()
          inputData.append("name", name)
          inputData.append("category", category)
          inputData.append("author", author)
          inputData.append("description", description)
          inputData.append("old_image", bookData?.image ? bookData?.image : "")
          inputData.append("_id", _id)
          inputData.append("new_image", new_image)
          dispatch(updateBook(inputData))
          redirect("/admin")
     }
     return (
          <>
               <div className='w-full rounded-md bg-slate-300 h-full gap-3 overflow-y-scroll flex items-center justify-center flex-wrap px-2'>
                    <div className='glass-div w-[40rem] relative md:p-4 p-1 rounded-md border-2 border-[#0a298c]'>
                          
                         {/* <h2 className='text-center text-xl mb-3 text-black'>{bookData?.name}</h2> */}
                         <form onSubmit={submit} ref={ref} method="post" encType="multipart/form-data" >
                              <div className='mx-auto mb-2 relative w-[8rem] h-[12rem]'>
                                   <Image src={previewImage || bookData?.image || "/images/user.png"} className='w-full h-full object-fill' alt={`${bookData?.name} book`} width="1000" height="1000" />
                                   
                                   <label htmlFor="image" className='p-1 rounded-full image-container w-[2rem] h-[2rem] absolute bottom-[10%] left-[90%] cursor-pointer'>
                                        <IoCloudUploadOutline className='mx-auto md:text-2xl text-lg'  />
                                   </label>
                                   <input onChange= {onchangeImage} type="file" name="new_image" defaultValue={bookData?.image} className='hidden' id='image' />
                                   {message && !message.status && message.message ? <p className='inline fixed left-4 top-4 bg-red-300 text-red-500 p-1 rounded-sm'>{message.message}</p> : <></>}
                              </div>
                              <div className='flex items-center justify-between gap-3 md:flex-nowrap flex-wrap'>
                                   <input type="hidden" name="_id" defaultValue={bookData?._id} />
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md `} type="text" name="name" defaultValue={bookData?.name} placeholder='Enter book name' required={true} />
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md `} type="text" name="author" defaultValue={bookData?.author} placeholder='Enter book author' required={true} />
                              </div>
                              <div className='flex items-center justify-between gap-3'>
                                   <input className={`w-full p-1 md:text-lg text-sm rounded-md mt-2 `} type="text" name="category" defaultValue={bookData?.category} placeholder='Enter book category' required={true} />
                                   
                              </div>
                              <textarea className={`w-full p-1 md:text-lg text-sm rounded-md mt-2`} name="description" defaultValue={bookData?.description} placeholder='Enter book description'></textarea>
                              {
                                   loading ? <>
                                       <span className='my-2 md:text-lg text-sm bg-[#0a298c] text-white px-3 py-1 rounded-sm'>Submiting ...</span> 
                                   </> : <button className='my-2 md:text-lg text-sm bg-[#0a298c] text-white px-3 py-1 rounded-sm' type="submit" disabled={loading}>Update</button>
                              }
                         </form>
                    </div>
               </div>
          </>
     );
};

export default UpdateBook;