import React from 'react';
import './Table.scss';
import TableRow from './TableRow';

const Table = ({ users }) => {

    console.log(users)

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Companions</th>
                    <th>Minors</th>
                    <th>Type of Food</th>
                    <th>Allergies</th>
                    <th>Accomodation</th>
                    <th>Rooms</th>
                    <th>Transport</th>
                    <th>Childcare</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => <TableRow user={user} key={index} />)
                }
            </tbody>
        </table>
    )
}

export default Table;