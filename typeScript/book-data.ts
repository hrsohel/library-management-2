export interface bookDataType {
     id: number,
     name: string,
     category: string,
     date: string,
     image: string,
     author: string
}

export const bookData: readonly bookDataType[] = [
     {
          id: 1,
          name: "Java book",
          author: "HR Sohel",
          category: "Programming",
          date: "27-09-2024",
          image: "/images/java.jpeg"
     },
     {
          id: 2,
          name: "SQL book",
          author: "Arman Hasan",
          category: "SQL",
          date: "29-09-2024",
          image: "/images/sql.jpeg"
     },
     {
          id: 3,
          name: "C++ programming book",
          author: "Tahshen Mahmud",
          category: "Programming",
          date: "30-09-2024",
          image: "/images/c++ programming.jpg"
     },
     {
          id: 4,
          name: "Cryptography book",
          author: "Omar Faruk",
          category: "Programming",
          date: "01-10-2024",
          image: "/images/cryptography.jpeg"
     },
]