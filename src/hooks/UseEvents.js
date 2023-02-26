// import { async } from "@firebase/util";
import axios from "axios";
import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";

const UseEvents = () =>{

    
    const [event, setEvent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // useEffect(() => {
    //     fetch ('https://server.financialwellnessforall.dicoit.com/event')
    //     setIsLoading(true)
    //     .then ( res => res.json())
    //     .then ( data => setEvent(data));
        
    // }, []);
    // {isLoding && <Spinner animation="border" />}

    // useEffect (() => {
    //     const fetchData = async () => {
    //         setIsLoading(true);
    //         const res = await fetch('https://server.financialwellnessforall.dicoit.com/event');
    //         const json = await res.json();
    //         setEvent(json);
    //         console.log(json);
    //         setIsLoading(false);
    //     };
    //     fetchData();
    // }, [setEvent]);

    useEffect(() => {
        const fetchData = async () => {
          setIsLoading(true);
    
          const result = await axios('https://server.financialwellnessforall.dicoit.com/event',);
    
          setEvent(result.data);
          console.log(result.data);
          setIsLoading(false);
        };
    
        fetchData();
      }, []);
    
    // return profile item
    return [event] ;
    
}

export default UseEvents;