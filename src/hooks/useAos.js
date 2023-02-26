import Aos from "aos";
import { useEffect } from "react";

const useAos = () =>

useEffect(() => {
    Aos.init({
        offset: 100,
        duration: 1000,
        easing:'ease-in'
    });
    
},[])

export default useAos;