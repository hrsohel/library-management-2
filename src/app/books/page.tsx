import Image from 'next/image';
import ThreeButton from '@/components/ThreeButton';
import Link from 'next/link';
import { bookDataType } from '../../../typeScript/book-data';

const page = async () => {
     const bookdata: bookDataType[] = []
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-all-books`, {
          next: {tags: ["allBookDataInAdmin"]}
     })
     if(response.ok) {
          const {data}: {data: bookDataType[]} = await response.json()
          bookdata.push(...data)
     }
     return (
          <>
                {
                    bookdata.length === 0 ? <h1 className='text-2xl font-bold text-center py-4'>No books available!</h1> : 
                
                    <div className='w-full py-4 rounded-md bg-slate-300 h-full md:gap-3 gap-1 overflow-y-scroll flex items-stretch justify-center flex-wrap'>
                            {
                                bookdata && bookdata.map((value: bookDataType) => <div key={value._id} className='bg-white md:p-3 p-1 rounded-md w-[10rem] md:w-[15rem] md:hover:-translate-y-3 duration-500 '>
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
                                    <ThreeButton _id={value._id} />
                                </div>)
                            }
                    </div>
                }
          </>
     );
};

export default page;
