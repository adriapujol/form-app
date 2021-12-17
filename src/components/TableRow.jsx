import React, { useState } from 'react';
import axios from 'axios';
import Modal from './Modal';


const TableRow = ({ user, number, setUsers }) => {

    const [confirmDelete, setConfirmDelete] = useState(false);

    const deleteUser = async () => {

        try {
            const response = await axios.delete(`https://jenniferetcarlos.herokuapp.com/admin/delete/${user._id}`, { withCredentials: true });
            setUsers(prevUsers => {
                return prevUsers.filter(u => u._id !== user._id);
            })

        } catch (error) {
            alert(`Sorry, we couldn't delete the user. Error: ${error.response}`)
        }

    }

    return (
        <>
            {confirmDelete && <Modal action={deleteUser} closeModal={setConfirmDelete} />}
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
                <td>{user.namePlusOne}</td>
                <td>{user.numChildren}</td>
                <td>
                    <button onClick={() => setConfirmDelete(true)}>
                        <i className="fas fa-trash-alt"></i>
                    </button>
                </td>
            </tr>
        </>
    )
}

export default TableRow;
