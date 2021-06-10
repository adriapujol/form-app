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
                    <th>nº</th>
                    <th>
                        <button onClick={() => requestSort("fname")}>
                            First Name
                        </button>
                    </th>
                    <th>
                        <button onClick={() => requestSort("lname")}>
                            Last Name
                        </button>
                    </th>
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