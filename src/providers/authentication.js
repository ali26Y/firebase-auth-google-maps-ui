import React, { useState } from 'react';
import { signIn, signOut, signUp } from '../auth/helpers'

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [inputs, setInputs] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState('');
    const [token, setToken] = useState(null);

    const signUpUser = async (email, password) => {
        await signUp(email, password, setErrors, setToken )
    };

    const signInUser = async (email, password,) => {
        await signIn(email, password, setErrors, setToken);
    };

    const signOutUser = async () => {
        await signOut(setErrors, setToken)
    };

    return (
        <AuthContext.Provider
            value={{
                signUpUser,
                signInUser,
                signOutUser,
                token,
                inputs,
                setInputs,
                errors,
                setToken,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
