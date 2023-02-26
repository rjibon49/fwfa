import { useEffect, useState } from "react";
import initializationAuth from "../Pages/Shared/Firebase/FirebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";


initializationAuth ()

const useFirebase = () => {
  const [user, setUser] = useState({});

  const [isLoding, setIsLoding] = useState(true);
  const [authError, setAuthError] = useState("");
  const [admin, setadmin] = useState(false);

  const auth = getAuth();

  const registerUser = (email, password, name, location, navigate) => {
    setIsLoding(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError('');
        
        const newUser = { email, displayName: name };
        setUser(newUser);

        // Save User Data to Databasenpm
        saveUser(email, name, 'POST');

        const destination = location?.state?.from || "/";
        navigate(destination);

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  const loginUser = (email, password, location, navigate) => {
    setIsLoding(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        navigate(destination);
        setAuthError('');
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoding(false));
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoding(false);
    });
    return () => unsubscribed;
  }, [auth]);

  useEffect(() =>{
    fetch(`https://server.financialwellnessforall.dicoit.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setadmin(data.admin))
  },[user.email])

  const logout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
      .finally(() => setIsLoding(false));
  };

  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch('https://server.financialwellnessforall.dicoit.com/users', {
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then()
}

  return {
    user,
    admin,
    registerUser,
    loginUser,
    isLoding,
    authError,
    logout
  };
};

export default useFirebase;