import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from './context/AuthContext';

function PublicRoute({ restricted, children, ...rest }) {

    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={() => {
                return currentUser && restricted ?
                    <Redirect to="/" /> : children;
            }}>
        </Route>
    )
}

export default PublicRoute;
