import { useEffect, useState } from "react";

export function usePostTitle(){
    const [post, setPost] = useState({});
    
    useEffect(()=>{
        getPosts();
    },[])

    async function getPosts() {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const json = await response.json();
        setPost(json);
    }
    
    return post.title;
}

export function useFetch(url){
    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true)
    console.log('loaded');
    useEffect(()=>{
        getDetails();
    },[url])

    async function getDetails(){
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    return {finalData, loading};
}