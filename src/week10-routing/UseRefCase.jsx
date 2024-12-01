import React, { useRef, useState } from "react";


//clock with a start and stop button
function UseRefCase(){
    const [currentCount, setCurrentCount] = useState(0);
    const clockRef = useRef();

    function startClock(){
        clockRef.current = setInterval(()=>{
            setCurrentCount((val)=> val+1)
        },1000);

    }

    function stopClock(){
        clearInterval(clockRef.current);
        clockRef.current = null;
    }

    return (<div>
        Timer : {currentCount}
        <br />
        <button onClick={startClock}>Start</button>
        <button onClick={stopClock}>Stop</button>
    </div>
    )
}

export default UseRefCase;