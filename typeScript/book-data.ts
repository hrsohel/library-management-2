export interface bookDataType {
     id: number,
     _id?: string,
     name: string,
     category: string,
     date: string,
     image: string,
     author: string,
     createdAt?: string
     description?: string
}

export interface comments {
     body: string
     user: string
     date: string
     _id: string
}

export interface userData {
     _id: string
     fullName: string
     email: string
     phone: string
     userId: number
     address: string
     postCode: string
     image: string
}
