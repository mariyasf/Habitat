import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
    const [user, setUser] = useState(null);

    const [loding, setLoding] = useState(true);

    // New User add
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login
    const signIn = (email, password) => {
        setLoding(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Use Google login
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const handleGithubSignIn = () => {
        return signInWithPopup(auth, githubProvider)

    }
    // Logout
    const logOut = () => {
        setLoding(true);
        return signOut(auth);
    }

    // Update Profile
    const updateUserProfile = (name, image, phoneNumber) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            phoneNumber: phoneNumber
        })


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
        createNewUser,
        signIn,
        loding,
        logOut,
        handleGoogleSignIn,
        handleGithubSignIn,
        updateUserProfile
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;