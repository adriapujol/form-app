import React from 'react';
import { CSVLink } from 'react-csv';

function ToExcel({ users }) {

    const headers = [
        { label: "Username", key: "username" },
        { label: "First Name", key: "fname" },
        { label: "Last Name", key: "lname" },
        { label: "Address", key: "address" },
        { label: "Phone", key: "phone" },
        { label: "Email", key: "email" },
        { label: "Companions", key: "numberPersons" },
        { label: "Minors", key: "numberMinors" },
        { label: "Type of Food", key: "typeFood" },
        { label: "Allergies", key: "allergies" },
        { label: "Accomodation", key: "hotel" },
        { label: "Rooms", key: "numberRooms" },
        { label: "Transport", key: "transport" },
        { label: "Childcare", key: "childcare" }
    ]

    const formReplies = users.map(user => {
        return ({ username: user.username, ...user.formAnswers });
    });
    const data = [...formReplies];

    console.log(data);

    return (
        <CSVLink
            data={data}
            headers={headers}
            filename={"guests-data.csv"}
            separator={","}
            enclosingCharacter={`"`}
        >
            Download
        </CSVLink>
    )
}

export default ToExcel;
