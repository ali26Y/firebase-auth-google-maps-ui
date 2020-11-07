import React, { useContext, useState, Fragment, useEffect } from 'react';
import { useLocation } from 'wouter';

import { AuthContext } from '../providers/authentication';

export const SignIn = () => {
    const [location, setLocation] = useLocation();
    const { errors, signInUser, token, signUpUser } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);

    const isSignIn = location.toLowerCase().includes('/signin');

    useEffect(() => {
        if (token) {
            setLocation('/');
        } else if (errors) {
            setLoading(false);
        }
        setLoading(false);
    }, [setLocation, token, errors])


    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (isSignIn) {
            await signInUser(email, password) 
        } else {
            await signUpUser(email, password);
        }
    }

    const handleChange = e => {
        const { name, value } = e.target;
        if (name === 'email') {
            setEmail(value);
        } else {
            setPassword(value)
        }
    }

    const changeRoute = e => {
        setLocation(isSignIn ? '/signup' : '/signin');
    }

    return (
        <Fragment>
            <h5 className="center-text">{isSignIn ? 'Sign In' : 'Sign Up'} or <button onClick={changeRoute}>{isSignIn ? 'Sign Up' : 'Sign In'}</button></h5>
            { loading ? <p>loading...</p> : (
                 <form className="center-text" onSubmit={onSubmit}>
                    <input onChange={handleChange} name="email" placeholder='email' value={email} />
                    <input onChange={handleChange} name="password" placeholder='password' value={password} />
                    <button>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
                    {errors && <p>{errors}</p>}
                </form>
            )}
        </Fragment>
      );
};
