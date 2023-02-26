import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const AdminRoute = ({children, ...rest}) => {
    const {user,admin, isLoding} = useAuth();
    const location = useLocation()
    if (isLoding) {
        return <Spinner animation="border" />
    }
    if(user.email && admin) {
        return children
    }
    return <Navigate to="/login" state={{ from: location}} />
};

export default AdminRoute;