import { useEffect, useState } from "react";

const UseProfile = () =>{

    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch ('./profile.json')
        .then ( res => res.json())
        .then ( data => setProfile(data));
    }, []);

    // return profile item
    return [profile] ;
}

export default UseProfile;