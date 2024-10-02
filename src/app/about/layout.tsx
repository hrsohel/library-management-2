import React from "react"
import {Metadata} from "next"

export const metadata: Metadata = {
     title: "About",
     description: "This Library Management's About Page",
}

export default function RootLayout({children}: {children: React.ReactNode}) {
     return (
          <section>
               {children}
          </section>
     )
}