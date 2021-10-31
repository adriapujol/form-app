import React from 'react';
import { CSVLink } from 'react-csv';

function ToExcel({ users }) {

    const headers = [
        { label: "Username", key: "username" },
        { label: "Coming", key: "isComing" },
        { label: "First Name", key: "fname" },
        { label: "Last Name", key: "lname" },
        { label: "Address", key: "address" },
        { label: "Phone", key: "phone" },
        { label: "Email", key: "email" },
        { label: "CP", key: "cp" },
        { label: "City", key: "city" },
        { label: "Food", key: "typeFood" },
        { label: "Allergies", key: "allergies" },
        { label: "PlusOne", key: "namePlusOne" },
        { label: "Children", key: "numChildren" },
        { label: "Hotel", key: "hotel" },
        { label: "Transport", key: "transport" }
    ]

    const formReplies = users.map(user => {
        return ({ username: user.username, ...user.formAnswers, namePlusOne: user.namePlusOne, numChildren: user.numChildren });
    });
    const data = [...formReplies];

    // console.log(data);

    return (
        <CSVLink
            data={data}
            headers={headers}
            filename={"guests-data.csv"}
            separator={","}
            enclosingCharacter={`"`}
            className="toExcel"
        >
            Download
        </CSVLink>
    )
}

export default ToExcel;
