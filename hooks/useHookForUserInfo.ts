"use client"
import React, { useEffect, useState } from 'react';
import { getDecodedToken } from '../serverActions/get-decodedToken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const useHookForUserInfo = () => {
     const [userData, setUserData] = useState<any>("")
     const [refresh, setRefresh] = useState<boolean>(false)
     const router = useRouter() 
     const fetchUserData = async (userId: any) => {
          try {
              if(!userData) {
                    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/get-single-user?userId=${userId}`, {
                    next: {tags: ["userinfo"]}
                   })
                   const { data } = await response.json();
                   setUserData(data)
                   sessionStorage.setItem("userData", JSON.stringify(data))
              } else return userData
          } catch (error: any) {
              console.error('Error fetching user data with details:', error);
          }
      };
     useEffect(() => {
           const cachedData = sessionStorage.getItem("userData")
           const cookie = Cookies.get("user-cookie");
           const getUserInfo = async () => {
               const userInfo: any = await getDecodedToken(cookie);
               await fetchUserData(userInfo.userId)
           };
           if(!cookie) router.push("/login") 
           else {
               if(cachedData) setUserData(JSON.parse(cachedData))
               else getUserInfo();
          }
     }, [refresh])
     return (
         {userData, refresh, setRefresh}
     );
};

export default useHookForUserInfo;
