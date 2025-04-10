import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
import Loading from '../components/Loading/Loading';
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState({})
    const [error, setError] = useState('')




    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUserProfile = (info) => {
        setLoading(true)
        return updateProfile(auth.currentUser, info)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }


    const authInfo = {
        loginUser,
        createUser,
        setError,
        setUser,
        error,
        user,
        logOutUser,
        updateUserProfile,
        loading
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    }, [])



    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;