import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {useState,useEffect} from "react";
import {useParams} from "react-router-dom";

function SelectionStatus(props) {
    const {project} = props;
    return (
        <div className = "bid-status">
            <h2>Selection Status</h2>
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
                <tr>
                    <td>Utility Disconnection</td>
                    <td>{project.bidStatus.utilityDisconnection.poc}</td>
                    <td>{project.bidStatus.utilityDisconnection.status.statusDetail}</td>
                    <td>{project.bidStatus.utilityDisconnection.status.date}</td>
                    <td>{project.bidStatus.utilityDisconnection.status.notes}</td>
                </tr>
                <tr>
                    <td>Site Work Contract</td>
                    <td>{project.bidStatus.siteWorkContract.poc}</td>
                    <td>{project.bidStatus.siteWorkContract.status.statusDetail}</td>
                    <td>{project.bidStatus.siteWorkContract.status.date}</td>
                    <td>{project.bidStatus.siteWorkContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Concrete</td>
                    <td>{project.bidStatus.concreteBid.poc}</td>
                    <td>{project.bidStatus.concreteBid.status.statusDetail}</td>
                    <td>{project.bidStatus.concreteBid.status.date}</td>
                    <td>{project.bidStatus.concreteBid.status.notes}</td>
                </tr>
                <tr>
                    <td>Windows</td>
                    <td>{project.bidStatus.windowBid.poc}</td>
                    <td>{project.bidStatus.windowBid.status.statusDetail}</td>
                    <td>{project.bidStatus.windowBid.status.date}</td>
                    <td>{project.bidStatus.windowBid.status.notes}</td>
                </tr>
                <tr>
                    <td>Ext Door</td>
                    <td>{project.bidStatus.extDoorBid.poc}</td>
                    <td>{project.bidStatus.extDoorBid.status.statusDetail}</td>
                    <td>{project.bidStatus.extDoorBid.status.date}</td>
                    <td>{project.bidStatus.extDoorBid.status.notes}</td>
                </tr>
                <tr>
                    <td>Roof Truss</td>
                    <td>{project.bidStatus.roofTrussBid.poc}</td>
                    <td>{project.bidStatus.roofTrussBid.status.statusDetail}</td>
                    <td>{project.bidStatus.roofTrussBid.status.date}</td>
                    <td>{project.bidStatus.roofTrussBid.status.notes}</td>
                </tr>
                <tr>
                    <td>Floor Joist</td>
                    <td>{project.bidStatus.floorJoistBid.poc}</td>
                    <td>{project.bidStatus.floorJoistBid.status.statusDetail}</td>
                    <td>{project.bidStatus.floorJoistBid.status.date}</td>
                    <td>{project.bidStatus.floorJoistBid.status.notes}</td>
                </tr>
                <tr>
                    <td>Stairs</td>
                    <td>{project.bidStatus.stairBid.poc}</td>
                    <td>{project.bidStatus.stairBid.status.statusDetail}</td>
                    <td>{project.bidStatus.stairBid.status.date}</td>
                    <td>{project.bidStatus.stairBid.status.notes}</td>
                </tr>
                <tr>
                    <td>HVAC Contract</td>
                    <td>{project.bidStatus.hvaccontract.poc}</td>
                    <td>{project.bidStatus.hvaccontract.status.statusDetail}</td>
                    <td>{project.bidStatus.hvaccontract.status.date}</td>
                    <td>{project.bidStatus.hvaccontract.status.notes}</td>
                </tr>
                <tr>
                    <td>Electrical Contract</td>
                    <td>{project.bidStatus.electricalContract.poc}</td>
                    <td>{project.bidStatus.electricalContract.status.statusDetail}</td>
                    <td>{project.bidStatus.electricalContract.status.date}</td>
                    <td>{project.bidStatus.electricalContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Low Voltage Contract</td>
                    <td>{project.bidStatus.lowVoltageContract.poc}</td>
                    <td>{project.bidStatus.lowVoltageContract.status.statusDetail}</td>
                    <td>{project.bidStatus.lowVoltageContract.status.date}</td>
                    <td>{project.bidStatus.lowVoltageContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Plumbing Contract</td>
                    <td>{project.bidStatus.plumbingContract.poc}</td>
                    <td>{project.bidStatus.plumbingContract.status.statusDetail}</td>
                    <td>{project.bidStatus.plumbingContract.status.date}</td>
                    <td>{project.bidStatus.plumbingContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Pest Control Contract</td>
                    <td>{project.bidStatus.pestControlContract.poc}</td>
                    <td>{project.bidStatus.pestControlContract.status.statusDetail}</td>
                    <td>{project.bidStatus.pestControlContract.status.date}</td>
                    <td>{project.bidStatus.pestControlContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Sprinkler Contract</td>
                    <td>{project.bidStatus.sprinklerContract.poc}</td>
                    <td>{project.bidStatus.sprinklerContract.status.statusDetail}</td>
                    <td>{project.bidStatus.sprinklerContract.status.date}</td>
                    <td>{project.bidStatus.sprinklerContract.status.notes}</td>
                </tr>
                <tr>
                    <td>Utility Reconnect</td>
                    <td>{project.bidStatus.utilityReconnect.poc}</td>
                    <td>{project.bidStatus.utilityReconnect.status.statusDetail}</td>
                    <td>{project.bidStatus.utilityReconnect.status.date}</td>
                    <td>{project.bidStatus.utilityReconnect.status.notes}</td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default SelectionStatus;