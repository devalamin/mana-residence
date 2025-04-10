import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const loginUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    };

    const updateUserProfile = (info) => {
        return updateProfile(auth.currentUser, info)
    }

    const logOutUser = () => {
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
        updateUserProfile
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
        })

        return () => {
            unsubscribe()
        }
    }, [])

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;