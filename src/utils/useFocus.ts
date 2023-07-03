import { useEffect, useRef } from "react"

//?  I was going to use that custom hook to automatically set the focus to each
//? rendered input but I just realize that it's easier to set the attribute `autoFocus` to `true`
// export const useFocus = ()=>{
//     const ref = useRef<HTMLInputElement>(null);
//     useEffect(() => {
//         ref.current?.focus
//     })
//     return ref
// }

export const author = "Kims";