import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import { useLocation, useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const SignInWithGoogle = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const {addUserWithGoogle} = useContext(AuthContext)
    return () => (
        addUserWithGoogle().then(result => {
            toast('Login Successfully')
            navigate(location.state ? location.state : '/')
        }).catch(err => {
            console.log(err);
        })
    )
};

export default SignInWithGoogle;