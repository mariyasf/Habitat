import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null);


const AuthProovider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);

    // New User add
    const createUser = (email, password) => {
        setLoding(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // Logout
    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    // Login
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User in the auth state changed', currentUser);
            setUser(currentUser);
            setLoding(false);
        })
        return () => {
            unSubscribe();
        }

    }, [])


    const authInfo = {
        user,
        createUser,
        logOut,
        signIn,
        loding,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProovider;