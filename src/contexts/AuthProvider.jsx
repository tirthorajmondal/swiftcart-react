import { createContext, useState, useEffect } from "react";
import app from './../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const auth = getAuth(app);

    const signupWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const loginWithEmailAndPassword = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
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
        loginWithEmailAndPassword,
        logout,
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;