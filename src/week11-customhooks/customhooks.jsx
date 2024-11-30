import { useEffect, useState } from "react"
import { useCounter } from "./useCounter";
import { useFetch, usePostTitle } from "./useFetch";
import { usePrev } from "./usePrev";
import { useDebounce, useDebouncedValue } from "./useDebounce";



function CustomHooks() {
    return (
        <div>
            <Counter />
            <br /><br /><br />
            <PostTitle />
            <br /><br /><br />
            <Posts />
            <br /><br /><br />
            <SearchBar />

        </div>
    )
}

function PostTitle() {
    const title = usePostTitle();
    return (
        <div>
            {title}
        </div>
    )
}

function Posts() {
    const [currentPost, setCurrentPost] = useState(1);
    const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

    return (
        <div>
            <button onClick={() => setCurrentPost(1)}>1</button>
            <button onClick={() => setCurrentPost(2)}>2</button>
            <button onClick={() => setCurrentPost(3)}>3</button>
            {loading ? "Loading....." : JSON.stringify(finalData)}
        </div>
    )

}

function Counter() {
    const { count, increaseCount } = useCounter();
    const prev = usePrev(count);
    return (
        <>
            <button onClick={increaseCount}>Increase {count}</button><br />
            previous value : {prev}
        </>
    )
}
function SearchBar() {
    const [inputVal, setInputVal] = useState("");
    const debouncedValue = useDebouncedValue(inputVal, 300);

    function changeEvent(e) {
        setInputVal(e.target.value);
    }

    useEffect(() => {
        console.log(debouncedValue)
    }, [debouncedValue])

    return (
        <div>
            <input type="text" onChange={changeEvent} />
        </div>
    )
}
export default CustomHooks