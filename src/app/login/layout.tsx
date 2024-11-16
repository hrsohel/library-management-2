"use client"
import React from "react";
import "../globals.css"
import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import store from "../../../redux/store";

export default function RootLayout({children}: {children: React.ReactElement}) {
     if(typeof document !== "undefined") {
          document.title = "Login"
          const meta = document.createElement("meta")
          meta.setAttribute("name", "description")
          meta.setAttribute("content", "This is login page of this website.")
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
                    <Navbar />
               </header>
               <section>{children}</section>
          </Provider>
     )
}