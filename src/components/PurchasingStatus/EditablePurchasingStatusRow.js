import React, {useState, useEffect} from "react";
import {Button, Table, Form} from "react-bootstrap";

function EditablePurchasingStatusTableRow(props) {
    const {project} = props;
    const rowId=props.id;
    const id = project.id;
    console.log(props);
    let item = props.item;
    let itemDataName = props.itemDataName;
    let people = project.purchasingStatus == null ? "Not Assigned" : project.purchasingStatus[`${itemDataName}`].poc;
    let status = project.purchasingStatus == null ? "hello" : project.purchasingStatus[`${itemDataName}`].status.statusDetail;
    let date = project.purchasingStatus == null ? "123 " : project.purchasingStatus[`${itemDataName}`].status.date;
    let notes = project.purchasingStatus == null ? "hello" : project.purchasingStatus[`${itemDataName}`].status.notes

    const[editFormData, setEditFormData] = useState({
        people:people,
        status:status,
        date:date,
        notes:notes
    })

    const handleEditFormChange=(event) =>{
        event.preventDefault();
        const fieldName = event.target.name;
        const fieldValue = event.target.value;
        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;
        setEditFormData(newFormData);
    }

    const [purchasingStatusData, setPurchasingStatusData] = useState(null);

    const handleChildStateChange = () => {
        let newPurchasingStatusData = {
            item: `${itemDataName}`,
            poc: `${editFormData.people}`,
            status: {
                date: `${editFormData.date}`,
                notes: `${editFormData.notes}`,
                statusDetail: `${editFormData.status}`
            }
        };
        setPurchasingStatusData(newPurchasingStatusData);
        props.onChildStateChange(purchasingStatusData);
    };
    console.log(purchasingStatusData);
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
                <Button onClick={handleChildStateChange} >Save</Button>
            </td>
            <td>
                <Button onClick={handleChildStateChange} type="submit">Submit</Button>
            </td>
            <td>
                <Button onClick={props.handleCancelClick}>Cancel</Button>
            </td>
        </tr>
    )}

export default EditablePurchasingStatusTableRow;