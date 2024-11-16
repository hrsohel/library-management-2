import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react';
import { acceptRequest, cancelRequest, takeBackBook } from '../../../../serverActions/get-decodedToken';
import { redirect } from 'next/navigation';
import { userData } from '../../../../typeScript/book-data';

export let metadata: Metadata = {}

interface Params {id: string}
interface SearchParams {type: string}
interface requestedUserData extends userData {
     requestedDate: string
     days: number
     user: string
     accepted: boolean
     taken: boolean
}

const page = async ({params, searchParams}: {params: Params, searchParams: SearchParams}) => {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-requested-users-with-book-data?_id=${params.id}&type=${searchParams.type}`, {
          // next: {tags: ["allRequestedBookWithUser"]}
     })
     const {data} = await response.json()
     metadata = {
          ...metadata, 
          title: `${data[0].name} by ${data[0].author}`,
          description: data[0].description,
          keywords: data[0].category
     }
     const serverFunctionForCancel = async (formData: FormData) => {
          "use server"
          await cancelRequest(formData)
          redirect(`/about-book-with-user/${params.id}?type=${searchParams.type}`)
     }
     const serverFunctionForAccept = async (formData: FormData) => {
          "use server"
          await acceptRequest(formData)
          redirect(`/about-book-with-user/${params.id}?type=${searchParams.type}`)
     }
     const serverFunctionForTakeBackBook = async (formData: FormData) => {
          "use server"
          takeBackBook(formData)
          redirect(`/about-book-with-user/${params.id}?type=${searchParams.type}`)
     }
     return (
          <>
               <div className='flex items-center justify-around gap-4 min-h-[80vh] md:flex-nowrap flex-wrap md:px-4 px-2'>
                    <div className='md:w-[25rem] md:h-[35rem] w-[15rem] h-[20rem] border-2 mb-6 rounded-md'>
                         <Image className='w-full h-full object-fill rounded-md' src={data[0].image} alt='Java book' width={1000} height={1000} />
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
                    </div>
               </div>
               <h1 className='text-center my-1 text-lg font-bold'>{
                    searchParams.type === "userIssuedList" ? "Issued" : searchParams.type === "userReturnedList" ? "Returned" : "Requested"
                    } users</h1>
               <div className='flex items-center justify-center flex-wrap p-4 gap-2'>
                    {
                         data[0].requestedUsers.map((value: requestedUserData) => 
                              <div key={value._id} className='w-[20rem] p-2 rounded-md text-lg border-2 border-[#0a298c]'>
                                   <div className='block mx-auto w-[5rem] h-[5rem] rounded-full'>
                                        <Image className='w-full h-full rounded-full object-cover' src={value.image || "/images/user.png"} width="1000" height="1000" alt={`${value.fullName} image`} />
                                   </div>
                                   <div className='my-1'>
                                        <p>
                                             <span className='text-red-500 font-semibold'>Name:</span> {value.fullName}
                                        </p>
                                   </div>
                                   <div className='my-1'>
                                        <p>
                                             <span className='text-red-500 font-semibold'>Email:</span> {value.email}
                                        </p>
                                   </div>
                                   <div className='my-1'>
                                        <p>
                                             <span className='text-red-500 font-semibold'>Phone:</span> {value.phone}
                                        </p>
                                   </div>
                                   <div className='my-1'>
                                        <p>
                                             <span className=' text-red-500 font-semibold'>Adress:</span> {value.address}
                                        </p>
                                   </div>
                                   <div className='my-1 text-sm'>
                                        {/* <p>
                                             This user requested this book at <span className="font-bold">{new Date(value.requestedDate).toDateString()}</span> for <span className="font-bold">{value.days}</span> days
                                        </p> */}
                                        <p className='font-semibold italic text-sm'>
                                             {
                                                  searchParams.type === "userRequestedLists" ? `This user requested this book on ${new Date(value.requestedDate).toDateString()} for ${value.days} days.`
                                                  : searchParams.type === "userIssuedList" ? `Accepted on ${new Date(value.requestedDate).toDateString()}. This user requested this book for ${value.days} days.`
                                                  : ""
                                             }
                                        </p>
                                   </div>
                                   {
                                        searchParams.type === "userRequestedLists" ? <div className='mt-1 flex gap-2 text-sm'>
                                             {
                                                  !value.accepted ? <div>
                                                       <form action={serverFunctionForCancel}>
                                                            <input type="hidden" name="user_id" value={value._id} />
                                                            <input type="hidden" name="book_id" value={data[0]._id} />
                                                            <input type="hidden" name="requested_date" value={value.requestedDate} />
                                                            <input type="hidden" name="days" value={value.days} />
                                                            <input id='cancel' type='submit' className='bg-[#0a298c] px-4 py-1 rounded-full text-white cursor-pointer' 
                                                                 value="Cancel"
                                                                 name='cancel'
                                                            />
                                                       </form>
                                                  </div> : <></>
                                             }
                                             
                                             <div>
                                                  <form action={serverFunctionForAccept}>
                                                  <input type="hidden" name="user" value={value._id} />
                                                  <input type="hidden" name="book_id" value={data[0]._id} />
                                                       <input id='accept' type='submit' className='bg-[#0a298c] px-4 py-1 rounded-full text-white cursor-pointer' value={
                                                                 value.accepted ? "Accepted" : "Accept"
                                                            } disabled={value.accepted}
                                                            name='acceptedOrNot'
                                                       />
                                                  </form>
                                             </div>
                                        </div> 
                                        : 
                                        <div className='mt-1 flex gap-2 text-sm'>
                                             <form action={serverFunctionForTakeBackBook}>
                                                  <input type="hidden" name="user" value={value._id} />
                                                  <input type="hidden" name="book_id" value={data[0]._id} />
                                                  <button type='submit' className='bg-[#0a298c] px-4 py-1 rounded-full text-white cursor-pointer' 
                                                       disabled={value.taken}
                                                  >{value.taken ? "Taken": "Take back"}</button>
                                             </form>
                                        </div>
                                   }
                              </div>
                         )
                    }
               </div>
          </>
     );
};

export default page;