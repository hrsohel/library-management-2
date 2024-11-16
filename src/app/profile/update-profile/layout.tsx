"use client"
import React from "react";
import { Provider } from "react-redux";
import store from "../../../../redux/store";


export default function RootLayour({sidebar, main}: 
     {sidebar: React.ReactNode, main: React.ReactNode}
) {
     if(typeof document !== "undefined") {
          document.title = "Update user info"
     }
     return (
          <Provider store={store}>
               <section className='flex items-center justify-between md:flex-nowrap flex-wrap w-screen my-2 h-[90vh] gap-2 px-2'>
                    {sidebar}
                    {main}
               </section>
          </Provider>
          
     )
}