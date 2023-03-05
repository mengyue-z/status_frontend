import React, {useState, useEffect} from "react";
import {Button, Table, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";

function EditableBidStatusTableRow(props) {
    const {project} = props;
    const rowId=props.id;
    const id = project.id;
    console.log(props);
    let item = props.item;
    let itemDataName = props.itemDataName;
    let people = project.bidStatus == null ? "Not Assigned" : project.bidStatus[`${itemDataName}`].poc;
    let status = project.bidStatus == null ? "hello" : project.bidStatus[`${itemDataName}`].status.statusDetail;
    let date = project.bidStatus == null ? "123 " : project.bidStatus[`${itemDataName}`].status.date;
    let notes = project.bidStatus == null ? "hello" : project.bidStatus[`${itemDataName}`].status.notes

    const[editFormData, setEditFormData] = useState({
        people:people,
        status:status,
        date:date,
        notes:notes
    })


    const handleEditFormChange=(event) =>{
        event.preventDefault();
        const fieldName = event.target.name;
        console.log(fieldName);
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        console.log(newFormData)
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }


    const [bidStatusData, setBidStatusData] = useState(null);


    const handleChildStateChange = () => {
        let newBidStatusData = {
                poc: `${editFormData.people}`,
                status: {
                    date: `${editFormData.date}`,
                    notes: `${editFormData.notes}`,
                    statusDetail: `${editFormData.status}`
                }
        };

        // let newBidStatusData =
        //     {
        //         "utilityDisconnection": {
        //             "status": {
        //                 "statusDetail": "test",
        //                 "date": "test",
        //                 "notes": "test"
        //             },
        //             "poc": "string"
        //         }
        //     }
        setBidStatusData(newBidStatusData);
        props.onChildStateChange(bidStatusData);
    };
    console.log(bidStatusData);
    return (
        <tr>
            <td>{item}</td>
            <td>
                <input name = "people" type = "text" value={editFormData.people} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input name = "status" type = "text" value={editFormData.status} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input name = "date" type = "text" value={editFormData.date} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <input name = "notes" type = "text" value={editFormData.notes} onChange={handleEditFormChange}>
                </input>
            </td>
            <td>
                <Button onClick={handleChildStateChange} type="submit">Submit</Button>
            </td>
            <td>
                <Button>Cancel</Button>
            </td>
        </tr>
    )}

export default EditableBidStatusTableRow;