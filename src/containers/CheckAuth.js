import React, { useContext, Fragment, useState, useEffect } from 'react';
import { useLocation } from 'wouter';

import { AuthContext } from '../providers/authentication';
import { auth } from '../auth/config';

export const CheckAuth = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [, setLocation] = useLocation();
    const { token, setToken } = useContext(AuthContext);
    
    useEffect(() => {
        if (!token) {
            const localToken = localStorage.getItem('token');
            if (localToken) {
                auth.onAuthStateChanged((user) => {
                    if (user) {
                        setToken(user.ya);
                        setLoading(false)
                    }
                })
            } else {
                setLoading(false);
                setLocation('/signin');
            }
        } else {
            setLoading(false);
        }
    }, [ token, setToken, setLocation])

    return (
        <Fragment>
            {
                loading ? <p> loading.... </p>
                : token ? children
                : (
                    ''
                )
            }
        </Fragment>
    );
};
