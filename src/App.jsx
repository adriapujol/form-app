import React, { useState, useMemo, useEffect } from 'react';
import './App.scss';
import Form from './pages/Form';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Main from './pages/Main';
import Navbar from './components/Navbar';
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
                        <Navbar />
                        <Main />
                    </PrivateRoute>
                    <Route path="/admin" component={Admin} />
                    <PrivateRoute exact path="/form" >
                        <Navbar />
                        <Form />
                    </PrivateRoute>
                    <PublicRoute restricted={true} path="/login">
                        <Login />
                    </PublicRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
