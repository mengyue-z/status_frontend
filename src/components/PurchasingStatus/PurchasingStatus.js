import React, {useEffect, useState, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import {Button,Form} from "react-bootstrap";
import PurchasingStatusTableRow from "./PurchasingStatusTableRow";
import EditablePurchasingStatusRow from "./EditablePurchasingStatusRow";

function PurchasingStatus(props) {
    const {project} = props;
    const id = project.id;

    console.log(props);
    const[editRowId, setEditRowId] = useState(null);
    const[purchasingStatusData, setPurchasingStatusData] = useState("");
    console.log(purchasingStatusData);
    const handleChildStateChange = (newChildState) => {
        setPurchasingStatusData(newChildState);
    };
    const handleEditClick = (event, rowId) =>{
        event.preventDefault();
        setEditRowId(rowId);
    }
    console.log(purchasingStatusData);
    const handleCancelClick = () =>{
        setEditRowId(null);
    }

    const handleEditFormSubmit=(event) =>{
        event.preventDefault();
        fetch(`http://localhost:8080/projects/purchasing-status/${id}/${purchasingStatusData.item}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(            {
                status: {
                    statusDetail: `${purchasingStatusData.status.statusDetail}`,
                    date: `${purchasingStatusData.status.date}`,
                    notes: `${purchasingStatusData.status.notes}`
                },
                poc: `${purchasingStatusData.poc}`
            })
        })
            .then(response => response.json())
            .then(data => {
                console.log('Successfully updated project:', data);
                console.log(data);
                // reset the form input
                // setEditFormData('');
            })
            .catch(error => console.error('Error updating project:', error));
        setEditRowId(null);
        window.location.reload();
    }

    return (
        <div className = "purchasing-status">
            <h2>Purchasing Status</h2>

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
                        {editRowId===1 ? (<EditablePurchasingStatusRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={1} item={"Appliance Purchase"} itemDataName={"appliancePurchase"} handleEditClick={handleEditClick}/>
                        ):(<PurchasingStatusTableRow project = {project} id={1} item={"Appliance Purchase"} itemDataName={"appliancePurchase"} handleEditClick={handleEditClick}/>)}
                        {editRowId===2 ? (<EditablePurchasingStatusRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={2} item={"Cabinet Purchase"} itemDataName={"cabinetPurchase"} handleEditClick={handleEditClick}/>
                        ):(<PurchasingStatusTableRow project = {project} id={2} item={"Cabinet Purchase"} itemDataName={"cabinetPurchase"} handleEditClick={handleEditClick}/>)}
                    </Fragment>
                    </tbody>
                </Table>
            </Form>
        </div>
    );
}

export default PurchasingStatus;