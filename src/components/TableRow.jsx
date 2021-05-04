import React from 'react';
import './TableRow.scss';

const TableRow = ({ user }) => {
    return (
        <tr>
            <td>{user && user.fname}</td>
            <td>{user && user.lname}</td>
            <td>{user && user.address}</td>
            <td>{user && user.phone}</td>
            <td>{user && user.email}</td>
            <td>{user && user.numberPersons}</td>
            <td>{user && user.numberMinors}</td>
            <td>{user && user.typeFood}</td>
            <td>{user && user.allergies}</td>
            <td>{user && user.hotel}</td>
            <td>{user && user.numberRooms}</td>
            <td>{user && user.transport}</td>
            <td>{user && user.childcare}</td>
        </tr>
    )
}

export default TableRow;
