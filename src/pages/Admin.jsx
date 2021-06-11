import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.scss';
import Table from '../components/Table';
import ToExcel from '../components/ToExcel';

const Admin = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/admin/users/', { withCredentials: true });
                const filteredUsers = response.data.filter(user => user.formDone && user.role !== "admin")
                setUsers(filteredUsers);
                console.log(response.data);

            } catch (err) {
                console.log(err.response);
            }
        }
        getUsers();
    }, []);

    return (
        <div className="container admin">
            <ToExcel users={users} />
            <Table users={users} setUsers={setUsers} />
        </div>
    )
}

export default Admin;
