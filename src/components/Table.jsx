import React, { useState, useMemo } from 'react';
import './Table.scss';
import TableRow from './TableRow';

const Table = ({ users, setUsers }) => {

    const [sortedField, setSortedField] = useState(null);
    const [sortedDirection, setSortedDirection] = useState("ascending");

    const sortedUsers = useMemo(() => {
        const sortedList = [...users];

        if (sortedField !== null) {
            sortedList.sort((a, b) => {
                if (a.formAnswers[sortedField] < b.formAnswers[sortedField]) return sortedDirection === "ascending" ? -1 : 1;
                if (a.formAnswers[sortedField] > b.formAnswers[sortedField]) return sortedDirection === "ascending" ? 1 : -1;
                return 0;
            });
        }

        return sortedList;
    }, [sortedField, sortedDirection, users]);


    const requestSort = sortField => {
        let direction = "ascending";

        if (sortedField === sortField && sortedDirection === "ascending") {
            direction = "descending";
        }

        setSortedField(sortField);
        setSortedDirection(direction);
    }




    return (
        <table>
            <thead>
                <tr>
                    <th>num</th>
                    <th>username</th>
                    <th>Coming</th>
                    <th>
                        First Name
                        <button onClick={() => requestSort("fname")}>
                            <i class="fas fa-sort"></i>
                        </button>
                    </th>
                    <th>
                        Last Name
                        <button onClick={() => requestSort("lname")}>
                            <i class="fas fa-sort"></i>
                        </button>
                    </th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>CP</th>
                    <th>City</th>
                    <th>Food</th>
                    <th>Allergies</th>
                    <th>Plus one</th>
                    <th>Children</th>
                    <th>Hotel</th>
                    <th>Transport</th>
                    <th>Controls</th>
                </tr>
            </thead>
            <tbody>
                {
                    sortedUsers.map((user, index) => <TableRow user={user} key={index} number={index} setUsers={setUsers} />)
                }
            </tbody>
        </table>
    )
}

export default Table;