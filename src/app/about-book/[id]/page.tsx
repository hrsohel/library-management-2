import { Metadata } from 'next';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import Image from 'next/image';
import React, { Suspense } from 'react';
import TextAreaForAboutBook from "../../../components/TextAreaForAboutBook"
// import BorrowButton from '@/components/BorrowButton';
import dynamic from 'next/dynamic';
import { comments, userData } from '../../../../typeScript/book-data';

const BorrowButton = dynamic(() => import("@/components/BorrowButton"))

export let metadata: Metadata = {}

const page = async ({params}: {params: Params}) => {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-single-book/${params.id}`, {
          cache: "no-cache"
     })
     const {data} = await response.json()
     metadata = {
          ...metadata, 
          title: `${data[0].name} by ${data[0].author}`,
          description: data[0].description,
          keywords: data[0].category
     }
     return (
          <>
               <div className='flex items-center justify-around gap-4 min-h-[80vh] md:flex-nowrap flex-wrap md:px-4 px-2'>
                    <div className='md:w-[25rem] md:h-[35rem] w-[15rem] h-[20rem] border-2 mb-6 rounded-md'>
                         <Image className='w-full h-full object-fill rounded-md' src={data[0].image} alt='Java book' width={1000} height={1000} />
                         <Suspense fallback={<p>Loading...</p>}>
                              <BorrowButton _id={data[0]._id} />
                         </Suspense>
                    </div>
                    <div className='flex flex-col w-[40rem] md:text-lg text-sm'>
                         <h1 className='md:text-4xl text-xl my-1'>{data[0].name}</h1>
                         <h3 className='text-lg my-1'>by <span className='text-[#0a298c] font-semibold'>{data[0].author}</span><i> (author)</i></h3>
                         <div className='w-full'>
                              <article className='my-1'>
                                   {data[0].description}
                              </article>
                         </div>
                         <h3 className='my-1 text-sm md:text-lg'>Genres 
                              <span className='ml-2'>
                                   {
                                        data[0].category.split(",").map((value: string, index: number) => 
                                             <span key={index} className='border-b-4 border-[#0a298c] ml-2'>{value}</span>
                                        )
                                   }
                              </span>
                         </h3>
                         <TextAreaForAboutBook _id={data[0]._id} />
                    </div>
               </div>
               <h2 className='text-center text-lg md:text-xl font-semibold py-2 underline'>Comments</h2>
               <div className=' py-4 md:px-4 px-1 mb-8 md:mb-0 md:text-lg text-sm'>
                    {
                         data[0].comments.map((value: comments) => {
                              const imageData = data[0].userData.filter((user: userData) => {
                                   if(user._id === value.user) return user
                              })
                              return <div key={value._id} className='my-2'>
                                   <div className='flex items-center gap-4'>
                                        <Image src= {
                                             imageData[0]?.image ? imageData[0].image : "/images/user.png"
                                        } alt='HR Sohel' className='md:w-[3rem] md:h-[3rem] w-[1.5rem] h-[1.5rem] rounded-full object-cover' width={1000} height={1000} />
                                        <span>{imageData[0]?.fullName ? imageData[0]?.fullName : ""}</span>
                                   </div>
                                   <p className='my-1'>
                                        {value.body}
                                   </p>
                              </div>
                         })
                    }
               </div>
          </>
     );
};

export default page;