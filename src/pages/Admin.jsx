import React from 'react';
import './Admin.scss';
import Table from '../components/Table';

const Admin = ({ users }) => {
    return (
        <div>
            <Table users={users} />
        </div>
    )
}

export default Admin;
