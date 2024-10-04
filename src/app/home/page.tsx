import { FaSearch } from 'react-icons/fa';

const page = () => {
  return (
      <>
        <div className="home-main h-[93vh] flex items-center justify-center flex-col">
          <div className="flex gap-2 sm:text-8xl text-5xl text-white font-normal">
            <span>I</span>
            <span style={{transform: "rotateZ(-45deg)"}}>C</span>
            <span>E</span>
          </div>
          <div className='sm:px-0 px-2 md:w-auto w-full'>
            <div className="flex items-center justify-center md:w-[30rem] w-full sm:text-lg text-sm">
              <input className="sm:w-[90%] w-[80%] border-none outline-none p-2 rounded-l-md" type="search" name="" id="search" placeholder="Search by book name or category"/>
              <label htmlFor="search" className="sm:w-[10%] w-[20%] bg-[#0a298c] sm:p-[16px] p-[11px] rounded-r-md cursor-pointer">
                <FaSearch style={{width: "100%", color: "#fff"}} className='md:text-xl text-lg' />
              </label>
            </div>
            <div className="md:text-lg text-sm md:w-[30rem] w-full text-white p-2 bg-[#0a298c] mt-1 rounded-sm flex gap-2 flex-col h-[20rem] overflow-y-scroll">
              <p>Database Management System</p>
              <p>Cryptography and Network Security</p>
              <p>Programming with Java and Networking</p>
              <p>Database Management System</p>
              <p>Cryptography and Network Security</p>
              <p>Programming with Java and Networking</p>
              <p>Database Management System</p>
              <p>Cryptography and Network Security</p>
              <p>Programming with Java and Networking</p>
              <p>Programming with Java and Networking</p>
              <p>Database Management System</p>
              <p>Cryptography and Network Security</p>
              <p>Programming with Java and Networking</p>
              <p>Programming with Java and Networking</p>
            </div>
          </div>
        </div>
      </>
  );
};

export default page;