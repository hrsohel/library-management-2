import Image from 'next/image';
import { bookDataType } from '../../../../typeScript/book-data';
import Link from 'next/link';

const page = async () => {
     const bookdata: bookDataType[] = []
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-requested-books`, {
          // next: {tags: ["allRequestedBookForAdmin"]}
          cache: "no-store"
     })
     if(response.ok) {
          const {data}: {data: bookDataType} = await response.json()
          bookdata.push(data)
     }
     return (
          <>
               <div className='w-full py-4 rounded-md bg-slate-300 h-full md:gap-3 gap-1 overflow-y-scroll flex items-stretch justify-center flex-wrap'>
                    {
                         bookdata && bookdata.map((value: bookDataType) => <div key={value._id} className='bg-white md:p-3 p-1 relative rounded-md w-[10rem] md:w-[15rem] md:hover:-translate-y-3 duration-500 '>
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
                              <Link className='px-2 py-0.5 mx-auto bottom-0 left-0 mt-2 block text-center rounded-full md:text-lg text-sm text-white bg-[#0a298c]' href={`/about-book-with-user/${value._id}?type=userRequestedLists`}>View details</Link>
                         </div>)
                    }
                    {/* <div className='h-[2rem] w-full md:hidden block'></div> */}
               </div>
          </>
     );
};

export default page;
