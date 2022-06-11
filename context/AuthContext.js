import { createContext, useState, useEffect, useContext } from "react";
import { auth, googleProvider } from "../firebase/client";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = (props) => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        })
    }, [])

    const onAuthStateChanged = (callback) => {
        return auth.onAuthStateChanged(callback)
    }

    const singup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password)
    }
    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password)
    }
    const loginWithGoogle = () => {
        return auth.signInWithPopup(googleProvider)
    }
    const logout = () => auth.signOut()

    const value = { singup, login, loginWithGoogle, logout, currentUser, onAuthStateChanged }

    return (
        <AuthContext.Provider value={value}>
            {props.children}
        </AuthContext.Provider>
    )
}