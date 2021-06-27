import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PrivateRoute({ adminOnly, children, ...rest }) {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                return currentUser ?
                    adminOnly && currentUser.role !== "admin" ? <Redirect to="/" /> : children
                    : <Redirect to="/login" />;
            }}
        >
        </Route>
    )
}

export default PrivateRoute;
