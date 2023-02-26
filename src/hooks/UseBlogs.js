import { useEffect, useState } from "react";

const UseBlogs = () =>{

    const [Classes, setClasses] = useState([]);

    useEffect(() => {
        const url = `https://api.npoint.io/1eedb30fc7addb69b6d4`;
        fetch (url)
        .then ( res => res.json())
        .then ( data => setClasses(data));
    }, []);

    // return courses item
    return [Classes] ;
}

export default UseBlogs;