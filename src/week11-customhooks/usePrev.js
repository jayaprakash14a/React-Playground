import { useEffect, useRef } from "react";

export function usePrev(value){
    const ref = useRef();

    //order of execution makes difference for usePrev hook functional.
    useEffect(() => {
        ref.current = value;
    })

    return ref.current;
}