import React from "react";
import { Metadata } from "next";
import "./globals.css"

export const metadata: Metadata = {
     title: "Login"
}

export default function RootLayout({children}: {children: React.ReactElement}) {
     return (
          <html lang="en">
               <body>
                    <main>
                    {children}
                    </main>
               </body>
          </html>
     )
}