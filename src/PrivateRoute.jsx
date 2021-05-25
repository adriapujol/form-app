import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ children, ...rest }) {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                return currentUser ? children : <Redirect to="/login" />;
            }}
        >
        </Route>
    )
}

export default PrivateRoute;
