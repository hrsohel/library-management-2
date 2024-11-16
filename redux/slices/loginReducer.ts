import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootType } from "../store";

interface UserState {
     loading: boolean,
     message: {message?: string, status?: boolean},
     data?: {token: string}
}

const initialState: UserState = {
     loading: false,
     message: {message: '', status: false},
     data: {token: ''}
}

export const loginUser = createAsyncThunk(
     "login/user",
     async (formData: {[key: string]: string}, {rejectWithValue}) => {
          try {
               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login-user`, {
                    method: "POST",
                    body: JSON.stringify({...formData}),
                    headers: {
                         "Content-Type": "application/json"
                    }
               })
               return await response.json()
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)

const loginUserReducer = createSlice({
     name: "loginUser",
     initialState,
     reducers: {
          setLoadingToFalseForLogin: (state: UserState) => {
               state.loading = false
               state.message = {status: false},
               state.data = {token: ''}
          }
     },
     extraReducers: (builder) => {
          builder.addCase(loginUser.pending, (state: UserState) => {
               state.loading = true
          })
          builder.addCase(loginUser.fulfilled, (state: UserState, {payload}: {payload: any}) => {
               state.loading = false
               state.message = {status: payload.status, message: payload.message}
               state.data = {token: payload.data.token}
          })
          builder.addCase(loginUser.rejected, (state: UserState, {payload}: {payload: any}) => {
               state.loading = false
               state.message = {status: payload.status, message: payload.message}
          })
     }
})

export const {setLoadingToFalseForLogin} = loginUserReducer.actions
export const selectUserLoginInfo = (state: RootType) => state.loginUser
export default loginUserReducer.reducer