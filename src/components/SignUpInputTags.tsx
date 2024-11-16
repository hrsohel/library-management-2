"use client"
import React from 'react';

const SignUpInputTags = ({
     type, name, placeholder, Password, setPassword, inputErrors, setInputErrors
}: {
     type: string, name: string, placeholder: string, Password?: string, inputErrors: {[key: string]: string}
     setPassword?: React.Dispatch<React.SetStateAction<string>>, 
     setInputErrors: React.Dispatch<React.SetStateAction<{[key: string]: string}>>
}) => {

     const patterns: {[key: string]: RegExp} = {
          fullName: /^[A-Za-z\s]+$/,
          email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          postCode: /^[0-9]+$/,
          phone: /^[0-9]+$/
     }

     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const {name, value} = e.target
          let currentError = "";
          let currentPhoneLengthError = "";
          if(name === "fullName")
               currentError = !patterns.fullName.test(value as string) ? "Full name must contain letters and spaces only." : ""
          else if(name === "email")
               currentError = !patterns.email.test(value as string) ? "Please enter valid email." : ""
          else if(name === "postCode")
               currentError = !patterns.postCode.test(value as string) ? "Post code must be number." : ""
          else if(name === "phone") {
               currentError = !patterns.phone.test(value as string) ? "Phone must be number." : ""
               currentPhoneLengthError = value.length !== 11 ? "Phone number must be number 11 characters long" : ""
          }
          else if(name === "password") {
               currentError = value.length < 5 ? "Password must be at least 5 characters long." : ""
               if(setPassword) setPassword(value)
          }
          else if(name === "confirmPassword")
               currentError = Password !== value? "Confirm password and password must be same." : ""
          setInputErrors((prev) => ({...prev, [name]: currentError, phoneLengthError: currentPhoneLengthError}))
     }
     return (
          <>
               <div className='w-full my-2'>
                    <input onChange={onChange} className={`w-full ${inputErrors[name] ? "input-shake" : ""} p-1 md:text-lg text-sm rounded-md`} type={type} name={name} id="" required placeholder={placeholder} />
                    {
                         name === "phone" ? <>
                              <span className='text-red-500 font-bold text-sm'>{inputErrors[name]}</span>
                              <span className='text-red-500 font-bold text-sm'>{inputErrors.phoneLengthError}</span>
                         </> : <>
                              <span className='text-red-500 font-bold text-[0.7rem]'>{inputErrors[name]}</span>
                         </>
                    }
               </div>
          </>
     );
};

export default React.memo(SignUpInputTags);