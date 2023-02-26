import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate,  useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivaetRoute = ({children, ...rest}) => {
    const {user, isLoding} = useAuth();
    let location = useLocation () ;
    if (isLoding) {
        return <Spinner animation="border" />
    }

    if (user.email) {
        return children; 
    }
    return <Navigate to="/login" state={{ from: location}} />;
}

export default PrivaetRoute;