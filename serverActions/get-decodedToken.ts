"use server"
import jwt, { JwtPayload } from "jsonwebtoken";
import { revalidateTag } from "next/cache";
import {redirect} from "next/navigation"

export async function getDecodedToken(cookie: any): Promise<JwtPayload | null> {
     const secret = process.env.JWT_SECRET as string
     if(cookie) {
          const getDecodedToken: JwtPayload | null = await jwt.verify(cookie, secret) as JwtPayload
          return getDecodedToken
     } else return null
}

export async function revalidTag(tag:string) {
     revalidateTag(tag)
}

export async function cancelRequest(formData: FormData) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/cancel-request`, {
          method: "POST",
          body: JSON.stringify({user_id: formData.get("user_id"), book_id: formData.get("book_id")}),
          headers: {
               "Content-Type": "application/json"
          }
     })
     await response.json()
}

export async function acceptRequest(formData: FormData) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/accept-request`, {
          method: "POST",
          body: JSON.stringify({user: formData.get("user"), book_id: formData.get("book_id")}),
          headers: {
               "Content-Type": "application/json"
          }
     })
     await response.json()
}

export async function takeBackBook(formData: FormData) {
     const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/take-back-book`, {
          method: "POST",
          body: JSON.stringify({user: formData.get("user"), book_id: formData.get("book_id")}),
          headers: {
               "Content-Type": "application/json"
          }
     })
     await response.json()
}

export async function searchBook(formData: FormData) {
     const search = formData.get("search")
     console.log(search);
     
     if(search)
          redirect(`/search-book?search=${search}`)
}