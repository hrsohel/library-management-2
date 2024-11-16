import Navbar from '@/components/Navbar';
import React from 'react';

const loading = () => {
     return (
          <>
               <header className="flex items-center justify-between md:px-4 px-0 bg-[#0a298c] py-2 text-white font-normal text-lg">
                    <div className="flex gap-1 md:text-3xl text-xl font-semibold ml-2 md:ml-0">
                    <span>I</span>
                    <span style={{transform: "rotateZ(-45deg)"}} className="text-red-500">C</span>
                    <span>E</span>
                    </div>
                    <h2 className="text-center md:text-lg text-[.95rem] mr-2 md:mr-0">Library Management</h2>
                    <Navbar />
               </header>
               <div className='h-screen flex items-center justify-center'>
                    <h1 className='font-bold text-4xl text-center'>Loading...</h1>
               </div>
          </>
     );
};

export default loading;