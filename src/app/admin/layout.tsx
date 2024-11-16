"use client"
import React from "react";
import { Provider } from "react-redux";
import store from "../../../redux/store";

export default function AdminLayout(
     {adminSideBar, adminMainRighSide}: 
     {adminSideBar: React.ReactNode, adminMainRighSide: React.ReactNode}) {
     if(typeof document !== "undefined") {
          document.title = "Admin page / (All books)"
     }
     return (
          <Provider store={store}>
               <header className="flex items-center justify-between md:px-4 px-0 bg-[#0a298c] py-2 text-white font-normal text-lg">
                    <div className="flex gap-1 md:text-3xl text-xl font-semibold ml-2 md:ml-0">
                         <span>I</span>
                         <span style={{transform: "rotateZ(-45deg)"}} className="text-red-500">C</span>
                         <span>E</span>
                    </div>
                    <h2 className="text-center md:text-lg text-[.95rem] mr-2 md:mr-0">Library Management</h2>
               </header>
               <section className='flex items-center justify-between md:flex-nowrap flex-wrap w-screen my-2 h-[90vh] gap-2 md:px-2 px-0.5'>
                    {adminSideBar}
                    {adminMainRighSide}
               </section>
          </Provider>
     )
}