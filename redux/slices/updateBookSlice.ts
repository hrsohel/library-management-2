import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootType } from "../store"
import { revalidTag } from "../../serverActions/get-decodedToken"

interface showOrNot {
     loading?: boolean
     message?: {status?: boolean, message?: string}
}

const initialState: showOrNot = {
     loading: false,
     message: {status: false, message: ''}
}

export const updateBook = createAsyncThunk(
     "book/updateBook",
     async(formData: FormData, {rejectWithValue}) => {
          try {
               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/update-book`, {
                    method: "POST",
                    body: formData,
                    headers: {
                         
                    }
               })
               await revalidTag("allBookDataInAdmin")
               return await response.json()
          } catch (error) {
               rejectWithValue(error)
          }
     }
)

const updateBookSlice = createSlice({
     name: "updateBook",
     initialState,
     reducers: {

     },
     extraReducers: (builder) => {
          builder.
          addCase(updateBook.pending, (state) => {
               state.loading = true
          })
          .addCase(updateBook.fulfilled, (state, {payload}: {payload: any}) => {
               state.loading = false
               state.message = {status: payload.status, message: payload.message}
          })
          .addCase(updateBook.rejected, (state, {payload}: {payload: any}) => {
               state.loading = false
               state.message = {status: payload.status, message: payload.message}
          })
     }
})

export const selectUpdateBookData = (state: RootType) => state.updateBook
export default updateBookSlice.reducer