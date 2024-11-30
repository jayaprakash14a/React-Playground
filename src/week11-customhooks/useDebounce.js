import { useEffect, useRef, useState } from "react";

export function useDebounce(value){
    const currentClock = useRef();

    const fn = function(){
        clearTimeout(currentClock.current);
        currentClock.current = setTimeout(()=>{console.log("send data to backend")}, 300);
    }
    return fn;
}

export function useDebouncedValue(value,delay){
    const [debouncedVal, setDebouncedVal] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{setDebouncedVal(value)},delay);

        return ()=>{
            clearTimeout(timer);
        }
    },[value, delay])

    return debouncedVal;

}