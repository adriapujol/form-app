import React, { useState, useMemo } from 'react';
import './App.scss';
import MultiForm from './pages/Form';
import Admin from './pages/Admin';
import Login from './pages/Login';
import { UserContext } from './context/UserContext';

function App() {

    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);

    const providerUser = useMemo(() => ({ user, setUser }), [user, setUser]);

    return (
        <div className="App">
            <UserContext.Provider value={providerUser}>
                <Login />
                {/* <MultiForm setUsers={setUsers} /> */}
                {/* <Admin users={users} /> */}
                {/* <Admin users={users} /> */}
            </UserContext.Provider>
        </div>
    );
}

export default App;
