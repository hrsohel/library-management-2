import React, { useState } from 'react';
import SignUpInputTags from '@/components/SignUpInputTags';
import useHookForSignUp from '../../hooks/useHookForSignUp';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setMessageToEmpty } from '../../redux/slices/userSlice';
import { useRouter } from 'next/navigation';

const SignUpForm = () => {
     const router = useRouter()
     const dispatch = useDispatch()
     const [inputErrors, setInputErrors] = useState<{[key: string]: string}>({
          fullName: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          postCode: '',
          address: '',
          phoneLengthError: ""
     })
     const [Password, setPassword] = useState("")
     const { submit } = useHookForSignUp()
     const {loading, message} = useSelector(selectUser)
     setTimeout(() => dispatch(setMessageToEmpty()), 3000)
     if(message.status) setTimeout(() => router.push("/login"), 3000)
     return (
          <>
               <div className={`
                         ${message.status ? "bg-green-200 text-green-500" : "bg-red-200 text-red-500"} 
                         transition-all duration-300 rounded-md inline px-2 py-1 fixed 
                         ${message.message ? "left-4" : "-left-[200%]"} top-[10%]
                    `}>{message.message}
               </div>
               <form onSubmit={(e) => submit(e, inputErrors)} method="post" className='user-signup-from'>
                    <div className='flex items-start justify-between md:gap-3 gap-1 md:flex-nowrap flex-wrap'>
                         <SignUpInputTags
                              type="text"
                              name="fullName"
                              placeholder="Enter full name"
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                         <SignUpInputTags
                              type="email"
                              name="email"
                              placeholder="Enter your email"
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                    </div>
                    <div className='flex items-start justify-between md:gap-3 gap-1'>
                         <SignUpInputTags
                              type="text"
                              name="postCode"
                              placeholder="Enter post code"
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                         <SignUpInputTags
                              type="tel"
                              name="phone"
                              placeholder="Enter phone number"
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                    </div>
                    <div className='flex items-start justify-between md:gap-3 gap-1'>
                         <SignUpInputTags
                              type="password"
                              name="password"
                              placeholder="Create password"
                              setPassword={setPassword}
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                         <SignUpInputTags
                              type="password"
                              name="confirmPassword"
                              placeholder="Re enter password"
                              Password={Password}
                              inputErrors={inputErrors}
                              setInputErrors={setInputErrors}
                         />
                    </div>
                    <textarea className={`w-full p-1 md:text-lg text-sm rounded-md mt-2`} name="address" id="" required placeholder='Enter address'></textarea>
                              
                    {
                         loading ? 
                         <>
                              <div className="lds-facebook my-2 rounded-sm"><div></div><div></div><div></div></div>
                         </> : 
                         <button disabled={loading} className='my-2 bg-[#0a298c] text-white px-3 py-1 md:text-lg text-sm rounded-sm' type="submit">Signup</button>
                    }
               </form>
          </>
     );
};

export default SignUpForm;