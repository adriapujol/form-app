import React from 'react';
import axios from 'axios';
import './TableRow.scss';


const TableRow = ({ user, number, setUsers }) => {

    const deleteUser = async () => {
        try {
            const response = await axios.delete(`http://localhost:3001/admin/delete/${user._id}`, { withCredentials: true });
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
            <td>{number + 1}</td>
            <td>{user.username}</td>
            <td>{user.isComing}</td>
            <td>{user.formAnswers.fname}</td>
            <td>{user.formAnswers.lname}</td>
            <td>{user.formAnswers.address}</td>
            <td>{user.formAnswers.phone}</td>
            <td>{user.formAnswers.email}</td>
            <td>{user.formAnswers.cp}</td>
            <td>{user.formAnswers.city}</td>
            <td>{user.formAnswers.typeFood}</td>
            <td>{user.formAnswers.allergies}</td>
            <td>{user.namePlusOne}</td>
            <td>{user.numChildren}</td>
            <td>{user.formAnswers.hotel}</td>
            <td>{user.formAnswers.transport}</td>
            <td>
                <button onClick={deleteUser}>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </td>
        </tr>
    )
}

export default TableRow;
