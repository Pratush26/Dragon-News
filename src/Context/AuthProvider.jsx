import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../Firebase/Firebase.config";

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();
    const createUser = (email, password) => createUserWithEmailAndPassword(auth, email, password)
    const sigInUser = (email, password) => signInWithEmailAndPassword(auth, email, password)
    const googleSignIn = () => signInWithPopup(auth, googleProvider)
    const signOutUser = () => signOut(auth)
    useEffect(() => {
        onAuthStateChanged(auth, (u) => {
            if (u) setUser(u.email)
            else setUser(null)
            setLoading(false);
        })
    }, [])

    return (
        <AuthContext.Provider value={{ user, loading, createUser, sigInUser, signOutUser, googleSignIn }}>
            {children}
        </AuthContext.Provider>
    )
}