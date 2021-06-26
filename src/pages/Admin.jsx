import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.scss';
import Table from '../components/Table';
import ToExcel from '../components/ToExcel';

const Admin = () => {

    const [users, setUsers] = useState([]);
    const [formAnswered, setFormAnswered] = useState("Form Answered");

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/admin/users/', { withCredentials: true });
                const filteredUsers = response.data.filter(user => user.role !== "admin");
                setUsers(filteredUsers);
                console.log(response.data);

            } catch (err) {
                console.log(err.response);
            }
        }
        getUsers();
    }, []);

    const filterFormDone = userList => {
        let filteredList = userList;
        const formCheck = formAnswered === "Form Answered" ? true : false;

        if (formCheck) return filteredList = userList.filter(user => user.formDone === formCheck);

        return filteredList;
    }

    let formDoneFilterList = filterFormDone(users);

    const handleSelect = e => {
        e.preventDefault();
        setFormAnswered(e.target.value);
        filterFormDone(users);
    }

    return (
        <div className="container admin">
            <ToExcel users={formDoneFilterList} />
            <div className="formFilter">
                <select id="formFilter" name="formFilter" value={formAnswered} onChange={handleSelect}>
                    <option value="Form Answered">Form Answered</option>
                    <option value="Form Not Answered" >All users</option>
                </select>
            </div>
            <Table users={formDoneFilterList} setUsers={setUsers} />
        </div>
    )
}

export default Admin;
