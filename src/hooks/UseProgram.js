import { useEffect, useState } from "react";

const UseProgram = () =>{

    const [program, setProgram] = useState([]);

    useEffect(() => {
        fetch ('https://server.financialwellnessforall.dicoit.com/program')
        .then ( res => res.json())
        .then ( data => setProgram(data));
        
    }, []);
    
    // return profile item
    return [program] ;
    
}

export default UseProgram;