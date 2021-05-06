import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.scss';
import Table from '../components/Table';

const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/users/');
                setUsers(response.data);
                console.log(response.data);

            } catch (err) {
                console.log(err);
            }
        }
        getUsers();
    }, []);

    return (
        <div>
            <Table users={users} />
        </div>
    )
}

export default Admin;
