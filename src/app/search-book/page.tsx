import Image from 'next/image';
import { bookDataType } from '../../../typeScript/book-data';
import Link from 'next/link';
import { TiTimesOutline } from "react-icons/ti";

interface Context {
     params: {id: string}
     searchParams: {search: string}
}

const page = async (context: Context) => {
     const search = context.searchParams.search
     const bookdata: bookDataType[] = []
     const response = await fetch(`${process.env.API_URL}/api/search-book?search=${search}`, {
          // next: {tags: [search]}
          cache: "no-store"
     })
     if(response.ok) {
          const {data}: {data: bookDataType[]} = await response.json()
          bookdata.push(...data)
     }
     return (
          <>
               <Link href="/home" style={{background: "rgba(0, 0, 0, 0.3)"}} className='absolute right-4 top-16 text-4xl font-semibold p-1 z-10 rounded-full'>
                    <TiTimesOutline size={35} color='#0a298c' />
               </Link>
               <div className='h-screen py-4 rounded-md bg-slate-300 md:gap-3 gap-1 overflow-y-scroll flex items-start justify-center flex-wrap md:mb-0 mb-12'>
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
                              <Link className='px-2 mx-auto py-0.5 mt-2 block text-center rounded-full md:text-lg text-sm text-white bg-[#0a298c]' href={`/about-book/${value._id}`}>View details</Link>
                         </div>)
                    }
                    {
                         bookdata.length === 0 ? <div className='w-screen text-3xl flex items-center justify-center text-center font-bold'>
                              No book found
                         </div> : <></>
                    }
               </div>
          </>
     );
};

export default page;
