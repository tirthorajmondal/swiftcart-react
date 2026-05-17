import { createContext, useState, useEffect } from "react";
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(user);

    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    // Signup function to create a new user with email and password
    const signupWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // 
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // Login function to sign in the user with email and password
    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // updateProfile function to update the user's profile with display name and photo URL
    const updateUserProfile = (displayName, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL
        });
    }

    // Logout function to sign out the user
    const logout = () => {
        setLoading(true);
        signOut(auth)
            .then(() => {
                setUser(null);
                setLoading(false);
                console.log("User Signed Out Successfully");
            })
            .catch((error) => {
                console.error('Error signing out:', error);
                setLoading(false);
            });
    }


    // Toggle password visibility function for the password input field
    const handleToggleWatch = (e) => {
        const passwordInput = e.target;
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);






    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        signupWithEmailAndPassword,
        googleSignIn,
        loginWithEmailAndPassword,
        updateUserProfile,
        handleToggleWatch,
        logout,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;