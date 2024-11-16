import { createAsyncThunk, createSlice} from "@reduxjs/toolkit"
import { RootType } from "../store"
import { revalidTag } from "../../serverActions/get-decodedToken"

interface showOrNot {
     show?: boolean,
     loading?: boolean,
     message: {status?: boolean, message?: string}
}

const initialState: showOrNot = {
     show: false,
     loading: false,
     message: {status: false, message: ""}
}

export const addBook = createAsyncThunk(
     "book/addBook",
     async (formData: any, {rejectWithValue}) => {
          try {
               const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/add-book`, {
                    method: "POST",
                    body: formData,
                    headers: {
                         
                    }
               })
               await revalidTag("allBookDataInAdmin")
               return await response.json()
          } catch (error) {
               return rejectWithValue(error)
          }
     }
)

const addBookSlice = createSlice({
     name: "addBook",
     initialState,
     reducers: {
          showAddBookForm: (state) => {
               state.show = true
          },
          hideAddBookForm: (state) => {
               state.show = false
          }
     },
     extraReducers: (builder) => {
          builder.
               addCase(addBook.pending, (state) => {
                    state.loading = true
               })
               .addCase(addBook.fulfilled, (state, {payload}: {payload: any}) => {
                    state.loading = false
                    state.message = {status: payload.status, message: payload.message}
               })
               .addCase(addBook.rejected, (state, {payload}: {payload: any}) => {
                    state.loading = false
                    state.message = {status: payload.status, message: payload.message}
               })
     }
})

export const {showAddBookForm, hideAddBookForm} = addBookSlice.actions
export const selectAddBookData = (state: RootType) => state.addBook
export default addBookSlice.reducer