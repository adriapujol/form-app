import React, { useState } from 'react';
import './App.scss';
import MultiForm from './pages/Form';
import Admin from './pages/Admin';
import Login from './pages/Login';

function App() {

    const [users, setUsers] = useState([]);

    return (
        <div className="App">
            {/* <MultiForm setUsers={setUsers} /> */}
            {/* <Admin users={users} /> */}
            {/* <Admin users={users} /> */}
            <Login />
        </div>
    );
}

export default App;
