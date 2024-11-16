import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { formDataType } from "../../hooks/useHookForSignUp";
import { RootType } from "../store";

interface UserState {
     loading: boolean,
     message: {message: string, status: boolean}
}

const initialState: UserState = {
     loading: false,
     message: {message: '', status: false}
}

export const addUser = createAsyncThunk(
     "user/addUser",
     async (formData: formDataType, {rejectWithValue}) => {
          try {
               const reponse = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-user` as string, {
                    method: "POST",
                    body: JSON.stringify({formData}),
                    headers: {
                         "Content-Type": "application/json"
                    }
               })
               return await reponse.json()
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)

const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {
          setLoadingtoFalse: (state) => {
               state.loading = false
          },
          setLoadingtoTrue: (state) => {
               state.loading = true 
          },
          setMessageToEmpty: (state) => {
               state.message.message = ""
          }
     },
     extraReducers: (builder) => {
          builder.
               addCase(addUser.pending, (state) => {
                    state.loading = true
               })
               .addCase(addUser.fulfilled, (state, { payload }: {payload: any}) => {
                    state.loading = false;
                    state.message = { status: payload.status, message: payload.message };
               })
               .addCase(addUser.rejected, (state, { payload }: {payload: any}) => {
                    state.loading = false
                    state.message = { status: payload.status, message: payload.message }
               })
     }
})

export const {setLoadingtoFalse, setLoadingtoTrue, setMessageToEmpty} = userSlice.actions
export const selectUser = (state: RootType) => state.user;
export default userSlice.reducer