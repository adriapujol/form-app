import React from 'react';
import axios from 'axios';
import './TableRow.scss';


const TableRow = ({ user, setUsers }) => {

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/users/delete/${user._id}`);
            console.log(response);
            setUsers(prevUsers => {
                return prevUsers.filter(u => u._id !== user._id);
            })

        } catch (error) {
            console.log(error.response);
        }
    }

    return (
        <tr>
            <td>{user.fname}</td>
            <td>{user.lname}</td>
            <td>{user.address}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.numberPersons}</td>
            <td>{user.numberMinors}</td>
            <td>{user.typeFood}</td>
            <td>{user.allergies}</td>
            <td>{user.hotel}</td>
            <td>{user.numberRooms}</td>
            <td>{user.transport}</td>
            <td>{user.childcare}</td>
            <td>
                <button onClick={deleteUser}>Delete</button>
            </td>
        </tr>
    )
}

export default TableRow;
