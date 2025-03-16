
import { createContext } from "react";
import { useState } from "react";
import { auth } from "../firebase/firebase.init";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    // create user 
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login user
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout user
    const logout = () => {
        return signOut(auth);
    }

    // update user
    const updateUser = (user) => {
        return updateProfile(auth.currentUser, {
            displayName: user.displayName
        });
    }

    // reset password
    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
    }

    const userInfo = {
        user,
        createUser,
        login,
        logout,
        updateUser,
        resetPassword,
        setUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
