import React, { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../Pages/Loading';

const PrivetRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    // console.log(location);

    if(loading){
        return <Loading></Loading>
    }
    if(!user){
        return <Navigate to='/login' state={location.pathname}></Navigate>
    }
    return children
};

export default PrivetRoute;