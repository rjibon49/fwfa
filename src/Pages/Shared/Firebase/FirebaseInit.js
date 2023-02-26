import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfig";


const initializationAuth = () => {
    initializeApp(firebaseConfig);
}

export default initializationAuth;