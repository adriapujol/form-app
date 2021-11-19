import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Admin.scss';
import Table from '../components/Table';
import ToExcel from '../components/ToExcel';
import Register from '../components/Register';

const Admin = () => {

    const [users, setUsers] = useState([]);
    const [formAnswered, setFormAnswered] = useState("Form Answered");
    const [userTotalNumber, setUserTotalNumber] = useState();
    const [userTotalFormDoneNumber, setUserTotalFormDoneNumber] = useState();

    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3001/admin/users/', { withCredentials: true });
                const filteredUsers = response.data.filter(user => user.role !== "admin");
                setUsers(filteredUsers);
                // console.log(response.data);

            } catch (err) {
                console.log(err.response);
            }
        }
        getUsers();
    }, []);
    useEffect(() => {
        if (users.length > 0) {
            setUserTotalNumber(users.length);
            setUserTotalFormDoneNumber(users.reduce((total, user) => {
                if (user.formDone) { total++ };
                return total;
            }, 0))
        }
    }, [users])


    const formatUserList = list => {

        const formatedList = list.map(user => {
            let childrenNum = 0;
            let plusOneName = "";
            let isComingText = "no";
            user.formAnswers.children.forEach(child => {
                if (child.fname) {
                    childrenNum++;
                }
            })
            if (user.formAnswers.plusOne.fname) plusOneName = `${user.formAnswers.plusOne.fname} ${user.formAnswers.plusOne.lname}`

            if (user.isComing) isComingText = "yes";

            return { ...user, isComing: isComingText, namePlusOne: plusOneName, numChildren: childrenNum };
        })

        return formatedList;
    }

    const filterUserList = userList => {
        const formatedList = formatUserList(userList);
        let filteredList = formatedList;

        if (formAnswered === "Form Answered") return filteredList = formatedList.filter(user => user.formDone === true);
        if (formAnswered === "Form Not Answered") return filteredList = formatedList.filter(user => user.formDone === false);

        return filteredList;
    }

    let formDoneFilterList = filterUserList(users);
    console.log("this list is used: ", formDoneFilterList)

    const handleSelect = e => {
        e.preventDefault();
        setFormAnswered(e.target.value);
        filterUserList(users);
    }

    return (
        <div className="admin">
            <Register></Register>
            <div className="table-box">
                <div className="info-box">
                    <div className="formFilter">
                        <select id="formFilter" name="formFilter" value={formAnswered} onChange={handleSelect}>
                            <option value="Form Answered">Form Answered</option>
                            <option value="Form Not Answered" >Form Not Answered</option>
                            <option value="All users">All users</option>
                        </select>
                    </div>
                    <div className="count">
                        Users Count: {userTotalFormDoneNumber}/{userTotalNumber}
                    </div>
                    <div className="data-box">
                        <p>Table data</p>
                        <ToExcel users={formDoneFilterList} fullData={false} />
                    </div>
                    <div className="data-box">
                        <p>Full data</p>
                        <ToExcel users={formDoneFilterList} fullData={true} />
                    </div>
                </div>
                <div className="table-container">
                    <Table users={formDoneFilterList} setUsers={setUsers} />
                </div>
            </div>
        </div>
    )
}

export default Admin;
