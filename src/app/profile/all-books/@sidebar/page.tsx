"use client"
import ProfileSideBar from '@/components/ProfileSideBar';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../../../redux/store';

const page = () => {
     return (
          <Provider store={store}>
               <ProfileSideBar />
          </Provider>
     );
};

export default page;