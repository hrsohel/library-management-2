import { redirect } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';

const page = () => {
  const searchBook = async (formData: FormData) => {
    "use server"
    const search = formData.get("search")
    if(search)
      redirect(`/search-book?search=${search}`)
  }
  return (
    <>
      <div className="home-main h-[93vh] flex items-center justify-center flex-col">
        <div className="flex gap-2 sm:text-8xl text-5xl text-white font-normal mt-0">
          <span>I</span>
          <span style={{ transform: "rotateZ(-45deg)" }}>C</span>
          <span>E</span>
        </div>
        <div className='sm:px-0 px-2 md:w-auto w-full'>
          <form action={searchBook} className="flex items-center justify-center md:w-[30rem] w-full sm:text-lg text-sm">
            <input className="sm:w-[90%] w-[80%] border-none outline-none p-2 rounded-l-md" type="search" name="search" id="search" placeholder="Search by book name or category" />
            <button type="submit" className="sm:w-[10%] w-[20%] bg-[#0a298c] sm:p-[16px] p-[11px] rounded-r-md cursor-pointer">
              <FaSearch style={{ width: "100%", color: "#fff" }} className='md:text-xl text-lg' />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;