import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateAuthRoute = ({ children }) => {

    const { user } = useContext(AuthContext)

    if (user) {
        return <Navigate to='/'></Navigate>
    }
    return children
};

export default PrivateAuthRoute;