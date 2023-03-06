import React, {useState, useEffect} from "react";
import {Button, Table, Form} from "react-bootstrap";
import {useParams} from "react-router-dom";

function EditableSelectionStatusTableRow(props) {
    const {project} = props;
    const rowId=props.id;
    const id = project.id;
    let item = props.item;
    let itemDataName = props.itemDataName;

    console.log(project.selectionStatus[`${itemDataName}`]);
    let people = project.selectionStatus == null ? "Not Assigned" : project.selectionStatus[`${itemDataName}`].poc;
    let status = project.selectionStatus == null ? "hello" : project.selectionStatus[`${itemDataName}`].status.statusDetail;
    let date = project.selectionStatus == null ? "123 " : project.selectionStatus[`${itemDataName}`].status.date;
    let notes = project.selectionStatus == null ? "hello" : project.selectionStatus[`${itemDataName}`].status.notes

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

    const [selectionStatusData, setSelectionStatusData] = useState(null);

    const handleChildStateChange = () => {
        let newSelectionStatusData = {
            item: `${itemDataName}`,
            poc: `${editFormData.people}`,
            status: {
                date: `${editFormData.date}`,
                notes: `${editFormData.notes}`,
                statusDetail: `${editFormData.status}`
            }
        };
        setSelectionStatusData(newSelectionStatusData);
        props.onChildStateChange(selectionStatusData);
    };
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

export default EditableSelectionStatusTableRow;