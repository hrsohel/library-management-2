import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import userReducer from "./slices/userSlice"
import loginUserReducer from "./slices/loginReducer"
import addBookSlice from "./slices/addBookSlice"
import  updateBook  from "./slices/updateBookSlice";

const store = configureStore({
     reducer: {
          user: userReducer,
          loginUser: loginUserReducer,
          addBook: addBookSlice,
          updateBook: updateBook
     }
})

export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootType> = useSelector

export default store