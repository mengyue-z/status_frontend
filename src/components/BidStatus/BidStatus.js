import React, {useEffect, useState, Fragment} from "react";
import Table from 'react-bootstrap/Table';
import {Button,Form} from "react-bootstrap";
import BidStatusTableRow from "./BidStatusTableRow";
import EditableBidStatusTableRow from "./EditableBidStatusTable";
import {useParams} from "react-router-dom";

function BidStatus(props) {
    const {project} = props;
    const id = project.id;

    console.log(props);
    const[editRowId, setEditRowId] = useState(null);
    const[bidStatusData, setBidStatusData] = useState("");
    console.log(bidStatusData);
    const handleChildStateChange = (newChildState) => {
        setBidStatusData(newChildState);
    };
    const handleEditClick = (event, rowId) =>{
        event.preventDefault();
        setEditRowId(rowId);
    }
    console.log(bidStatusData);
    const handleCancelClick = () =>{
        setEditRowId(null);
    }

    const handleEditFormSubmit=(event) =>{
        event.preventDefault();
        fetch(`http://localhost:8080/projects/bid-status/${id}/${bidStatusData.item}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(            {
                    status: {
                        statusDetail: `${bidStatusData.status.statusDetail}`,
                        date: `${bidStatusData.status.date}`,
                        notes: `${bidStatusData.status.notes}`
                    },
                    poc: `${bidStatusData.poc}`
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
        <div className = "bid-status">
            <h2>Bid Status</h2>

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
                        {editRowId===1 ? (<EditableBidStatusTableRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={1} item={"Utility Disconnection"} itemDataName={"utilityDisconnection"} handleEditClick={handleEditClick}/>
                            ):(<BidStatusTableRow project = {project} id={1} item={"Utility Disconnection"} itemDataName={"utilityDisconnection"} handleEditClick={handleEditClick}/>)}
                        {editRowId===2 ? (<EditableBidStatusTableRow handleCancelClick ={handleCancelClick} onChildStateChange={handleChildStateChange} handleEditFormSubmit={handleEditFormSubmit} project = {project} id={2} item={"Concrete Bid"} itemDataName={"concreteBid"} handleEditClick={handleEditClick}/>
                        ):(<BidStatusTableRow project = {project} id={2} item={"Concrete Bid"} itemDataName={"concreteBid"} handleEditClick={handleEditClick}/>)}
                    </Fragment>
                    </tbody>
                </Table>
            </Form>
        </div>
    );
}

export default BidStatus;