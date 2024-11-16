import { useDispatch } from 'react-redux';
import { addUser, setLoadingtoFalse, setLoadingtoTrue } from '../redux/slices/userSlice';
import { useAppDispatch } from '../redux/store';

export type formDataType = {fullName?: any, email?: any, postCode?: any, phone?: any, password?: any, confirmPassword?: any, address?: any}

const useHookForSignUp = () => {
     const dispatch = useAppDispatch()
     const submit = async (e: React.FormEvent, inputErrors: {[key: string]: string}) => {
          e.preventDefault()
          dispatch(setLoadingtoTrue())
          const formData: formDataType = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          const disabled = Object.values(inputErrors).every(input => input === "")
          if(formData.password !== formData.confirmPassword) {
               alert("Password and confirm password must be same.")
               dispatch(setLoadingtoFalse())
               return
          }
          if(disabled) {
               await dispatch(addUser(formData))
          }
     }

     return {
          submit
     }
};

export default useHookForSignUp;