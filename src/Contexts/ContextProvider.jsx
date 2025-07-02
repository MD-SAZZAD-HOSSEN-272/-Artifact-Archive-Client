
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import axios from 'axios';

const ContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const [DarkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    useEffect(() => {
        if(DarkMode){
            localStorage.setItem('theme', 'dark')
            document.querySelector('html').setAttribute('data-theme','dark');
        }else{
            localStorage.setItem('theme', 'light')
            document.querySelector('html').removeAttribute('data-theme','dark');
            document.querySelector('html').setAttribute('data-theme','light');
        }
    },[DarkMode])

    const registerAdd = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const addUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    const signOutUser = () => {
        return signOut(auth);
    }





    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
            // if(currentUser) {
            //     localStorage.setItem('token',currentUser.accessToken)
            // }
            // if(user?.email){
            //     axios.post(`${import.meta.env.VITE_BASE_URL}/jwt`, {
            //         email: user?.email
            //     }).then(res => {
            //         console.log(res);
            //     }).catch(err => {
            //         console.log(err);
            //     })
            // }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    // console.log(user?.accessToken);

    const ContextInfo = {
        registerAdd,
        loginUser,
        user,
        setUser,
        signOutUser,
        addUserWithGoogle,
        loading,
        setLoading,
        DarkMode,
        setDarkMode
    }

    return (
        <div>
            <AuthContext value={ContextInfo}>
                {children}
            </AuthContext>
        </div>
    );
};

export default ContextProvider;