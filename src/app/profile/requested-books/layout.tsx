import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
     title: "(All requested books by HR Sohel)",
     description: "This is HR Sohel's profile page"
}

export default function RootLayour({sidebar, main}: 
     {sidebar: React.ReactNode, main: React.ReactNode}
) {
     return (
          <>
               <section className='flex items-center justify-between md:flex-nowrap flex-wrap w-screen my-2 h-[90vh] gap-2 px-2'>
                    {sidebar}
                    {main}
               </section>
          </>
          
     )
}