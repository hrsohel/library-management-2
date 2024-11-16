"use client"
import React, { useEffect } from 'react';
import AdminSideBar from '../../../components/AdminSideBar'
import { getDecodedToken } from '../../../../serverActions/get-decodedToken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

const ProfileSideBar = () => {
     const router = useRouter()
     useEffect(() => {
          const getUserInfo = async () => {
               const userInfo = await getDecodedToken(Cookies.get("user-cookie"))
               if(userInfo?.type !== "admin") router.push("/home")
          }
          getUserInfo()
     }, [])
     return (
          <AdminSideBar />
     );
};

export default ProfileSideBar;