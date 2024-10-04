import React, { useState } from "react"

export default function useStateAndMethods (arg: boolean): {
     show: boolean, setShow: React.Dispatch <React.SetStateAction<boolean>>
} {
     const [show, setShow] = useState <boolean> (arg)
     return {
          show, setShow
     }
}