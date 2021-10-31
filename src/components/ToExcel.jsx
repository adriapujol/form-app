import React from 'react';
import { CSVLink } from 'react-csv';

function ToExcel({ users, fullData }) {

    //FILTERED LIST EXCEL

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
        return ({ username: user.username, ...user.formAnswers, isComing: user.isComing, namePlusOne: user.namePlusOne, numChildren: user.numChildren });
    });

    const data = [...formReplies];

    // FULL DATA EXCEL

    const fullDataList = users.map(user => {
        const formAnswers = user.formAnswers;
        const plusOne = {
            pOfname: formAnswers.plusOne.fname,
            pOlname: formAnswers.plusOne.lname,
            pOtypeFood: formAnswers.plusOne.typeFood,
            pOallergies: formAnswers.plusOne.allergies
        };
        const children = formAnswers.children;
        const child1 = { c1fname: children[0].fname, c1lname: children[0].lname, c1age: children[0].age, c1typeFood: children[0].typeFood, c1allergies: children[0].allergies };
        const child2 = { c2fname: children[1].fname, c2lname: children[1].lname, c2age: children[1].age, c2typeFood: children[1].typeFood, c2allergies: children[1].allergies };
        const child3 = { c3fname: children[2].fname, c3lname: children[2].lname, c3age: children[2].age, c3typeFood: children[2].typeFood, c3allergies: children[2].allergies };
        const child4 = { c4fname: children[3].fname, c4lname: children[3].lname, c4age: children[3].age, c4typeFood: children[3].typeFood, c4allergies: children[3].allergies };

        return { username: user.username, isComing: user.isComing, ...formAnswers, ...plusOne, ...child1, ...child2, ...child3, ...child4 }
    })

    const headersFullData = [
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
        { label: "Hotel", key: "hotel" },
        { label: "Transport", key: "transport" },
        { label: "Plus One First Name", key: "pOfname" },
        { label: "Plus One Last Name", key: "pOlname" },
        { label: "Plus One First Name", key: "pOfname" },
        { label: "Plus One Food", key: "pOtypeFood" },
        { label: "Plus One Allergies", key: "pOallergies" },
        { label: "Children", key: "numChildren" },
        { label: "Child 1 First Name", key: "c1fname" },
        { label: "Child 1 Last Name", key: "c1lname" },
        { label: "Child 1 Age", key: "c1age" },
        { label: "Child 1 Food", key: "c1typeFood" },
        { label: "Child 1 Allergies", key: "c1allergies" },
        { label: "Child 2 First Name", key: "c2fname" },
        { label: "Child 2 Last Name", key: "c2lname" },
        { label: "Child 2 Age", key: "c2age" },
        { label: "Child 2 Food", key: "c2typeFood" },
        { label: "Child 2 Allergies", key: "c2allergies" },
        { label: "Child 3 First Name", key: "c3fname" },
        { label: "Child 3 Last Name", key: "c3lname" },
        { label: "Child 3 Age", key: "c3age" },
        { label: "Child 3 Food", key: "c3typeFood" },
        { label: "Child 3 Allergies", key: "c3allergies" },
        { label: "Child 4 First Name", key: "c4fname" },
        { label: "Child 4 Last Name", key: "c4lname" },
        { label: "Child 4 Age", key: "c4age" },
        { label: "Child 4 Food", key: "c4typeFood" },
        { label: "Child 4 Allergies", key: "c4allergies" }
    ]


    // console.log(data);

    return (
        <CSVLink
            data={fullData ? fullDataList : data}
            headers={fullData ? headersFullData : headers}
            filename={"guests-data.csv"}
            separator={","}
            enclosingCharacter={`"`}
            className="toExcel"
        >
            <i class="fas fa-file-download"></i>
        </CSVLink>
    )
}

export default ToExcel;
