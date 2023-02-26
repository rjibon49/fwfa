import { useEffect, useState } from "react";

const UseArticles = () =>{

    const [article, setArticle] = useState([]);

    useEffect(() => {
        const url = `https://server.financialwellnessforall.dicoit.com/article`;
        fetch (url)
        .then ( res => res.json())
        .then ( data => setArticle(data));
    }, []);

    // return courses item
    return [article] ;
}

export default UseArticles;