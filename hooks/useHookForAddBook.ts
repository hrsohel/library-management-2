import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/slices/addBookSlice';
import { useAppDispatch } from '../redux/store';

const useHookForAddBook = () => {
     const dispatch = useAppDispatch()
     const [error, setError] = useState("")
     const [previewImage, setPreviewImage] = useState("")
     const submit = async (e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault()
          const inputData = new FormData()
          const formData: any = Object.fromEntries(new FormData(e.target as HTMLFormElement).entries())
          if(!formData.image?.name) {
               setError((prev) => (prev + "Please provide an image. "))
               return
          }
          else if(formData.image.type.split("/")[0] !== "image") {
               setError((prev) => (prev + `Please provide an image file. Not ${formData.image.type.split("/")[0]} file. `))
               return
          }
          setError("")
          inputData.append("name", formData.name)
          inputData.append("author", formData.author)
          inputData.append("category", formData.category)
          inputData.append("description", formData.description)
          inputData.append("image", formData.image)
          dispatch(addBook(inputData))
     }
     const onchangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
          const image = e.target.files?.[0]
          const reader = new FileReader();
          reader.onload = (event: ProgressEvent<FileReader>) => {
               if (event.target) {
                    setPreviewImage(event.target.result as string);
               }
          };
          reader.readAsDataURL(image as Blob);
     }
     return {
          error, submit, previewImage, onchangeImage
     }
};

export default useHookForAddBook;