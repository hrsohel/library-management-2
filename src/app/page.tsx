import { FaSearch } from 'react-icons/fa';

const page = () => {
  return (
    <>
      <main className='h-screen'>
        <div className="home-main h-[93.5vh] flex items-center justify-center flex-col">
          <div className="flex gap-2 text-8xl text-white font-normal">
            <span>I</span>
            <span style={{transform: "rotateZ(-45deg)"}}>C</span>
            <span>E</span>
          </div>
          <div>
            <div className="flex items-center justify-center w-[30rem]">
              <input className="w-[90%] border-none outline-none p-2 rounded-l-md" type="search" name="" id="search" placeholder="Search by book name or category"/>
              <label htmlFor="search" className="w-[10%] bg-[#0a298c] p-[9px] rounded-r-md cursor-pointer">
                <FaSearch style={{width: "100%", color: "#fff"}} size={35} />
              </label>
            </div>
            <div className="w-[30rem] text-white p-2 bg-[#0a298c] mt-1 rounded-sm flex gap-2 flex-col h-[20rem] overflow-y-scroll">
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
      </main>
    </>
  );
};

export default page;