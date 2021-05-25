import React, { useState, useMemo, useEffect } from 'react';
import './App.scss';
import MultiForm from './pages/Form';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Main from './pages/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {

    const [user, setUser] = useState(null);
    const [auth, setAuth] = useState();
    const [users, setUsers] = useState([]);

    const { currentUser } = useAuth()


    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute exact path={["/", "/main"]} >
                        <Main />
                    </PrivateRoute>
                    <Route path="/admin" component={Admin} />
                    <PublicRoute restricted={true} path="/login">
                        <Login />
                    </PublicRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
