import { useEffect, useState } from "react";

const useCollaborative = () =>{

    const [Classes, setClasses] = useState([]);

    useEffect(() => {
        const url = `https://api.npoint.io/76d5a55588bff5bd970e`;
        fetch (url)
        .then ( res => res.json())
        .then ( data => setClasses(data));
    }, []);

    // return courses item
    return [Classes] ;
}

export default useCollaborative;