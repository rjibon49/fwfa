import { useEffect, useState } from "react";

const UseCommentData = () =>{

    const [commentData, setCommentData] = useState([]);

    useEffect(() => {
        const url = `https://api.npoint.io/6fb2bd0b7383487936c6`;
        fetch (url)
        .then ( res => res.json())
        .then ( data => setCommentData(data));
    }, []);

    // return courses item
    return [commentData] ;
}

export default UseCommentData;