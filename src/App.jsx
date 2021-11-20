import React from 'react';
import './App.scss';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Main from './pages/Main';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


function App() {


    return (
        <Router>
            <div className="App">
                <Switch>
                    <PrivateRoute adminOnly={true} exact path="/admin" >
                        <Admin />
                    </PrivateRoute>
                    <PublicRoute restricted={true} path="/login">
                        <Login />
                    </PublicRoute>
                    <PrivateRoute adminOnly={false} >
                        <Main />
                    </PrivateRoute>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
