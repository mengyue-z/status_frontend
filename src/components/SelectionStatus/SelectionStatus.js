import React, {Fragment} from "react";
import Table from 'react-bootstrap/Table';
import {Button, Form} from "react-bootstrap";
import {useState,useEffect} from "react";
import SelectionStatusTableRow from "./SelectionStatusTableRow";
import EditableSelectionStatusTableRow from "./EditableSelectionStatusTable";

function SelectionStatus(props) {
    const {project} = props;
    const id = project.id;

    const[editRowId, setEditRowId] = useState(null);
    const[selectionStatusData, setSelectionStatusData] = useState("");
    console.log(selectionStatusData);
    const handleChildStateChange = (newChildState) => {
        setSelectionStatusData(newChildState);
    };
    const handleEditClick = (event, rowId) =>{
        event.preventDefault();
        setEditRowId(rowId);
    }
    console.log(selectionStatusData);
    const handleCancelClick = () =>{
        setEditRowId(null);
    }

    const handleEditFormSubmit=(event) =>{
        event.preventDefault();
        fetch(`http://localhost:8080/projects/bid-status/${id}/${selectionStatusData.item}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(            {
                status: {
                    statusDetail: `${selectionStatusData.status.statusDetail}`,
                    date: `${selectionStatusData.status.date}`,
                    notes: `${selectionStatusData.status.notes}`
                },
                poc: `${selectionStatusData.poc}`
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Successfully updated project:', data);
                console.log(data);
            })
            .catch(error => console.error('Error updating project:', error));
        setEditRowId(null);
        window.location.reload();
    }

    return (
        <div className = "selection-status">
            <h2>Selection Status</h2>

            <Form onSubmit={handleEditFormSubmit}>
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Items</th>
                        <th>People</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Notes</th>
                    </tr>
                    </thead>
                    <tbody>
                    <Fragment>
                        {editRowId===1 ? (<EditableSelectionStatusTableRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={1} item={"Appliance Selection"} itemDataName={"applianceSelection"} handleEditClick={handleEditClick}/>
                        ):(<SelectionStatusTableRow project = {project} id={1} item={"Appliance Selection"} itemDataName={"applianceSelection"} handleEditClick={handleEditClick}/>)}
                        {editRowId===2 ? (<EditableSelectionStatusTableRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={2} item={"Cabinet Selection"} itemDataName={"cabinetSelection"} handleEditClick={handleEditClick}/>
                        ):(<SelectionStatusTableRow project = {project} id={2} item={"Cabinet Selection"} itemDataName={"cabinetSelection"} handleEditClick={handleEditClick}/>)}
                    </Fragment>
                    </tbody>
                </Table>
            </Form>
        </div>
    );
}

export default SelectionStatus;