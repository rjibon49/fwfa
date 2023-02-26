import { useEffect, useState } from "react";

const UseCareer = () =>{

    const [career, setCareer] = useState([]);

    useEffect(() => {
        fetch ('https://server.financialwellnessforall.dicoit.com/career')
        .then ( res => res.json())
        .then ( data => setCareer(data));
        
    }, []);
    
    // return profile item
    return [career] ;
    
}

export default UseCareer;