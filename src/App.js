import React from 'react';
import { Route, Switch } from 'wouter';

import { CheckAuth } from './containers/CheckAuth';
import { Home, SignIn } from './components/index';
import { AuthProvider } from './providers/authentication';
 
export const App = () => {
    return (
        <div className="app-wrapper">
            <AuthProvider>
                <Switch>
                    <Route path="/">
                        <CheckAuth>
                            <Home />
                        </CheckAuth>
                    </Route>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignIn} />
                </Switch>
            </AuthProvider>
        </div>
    );
};

export default App;
