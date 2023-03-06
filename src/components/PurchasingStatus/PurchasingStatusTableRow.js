import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";

function PurchasingStatusTableRow(props, handleEditClick) {
    const {project} = props;
    console.log(project)
    const rowId=props.id;
    let item = props.item;
    let itemDataName = props.itemDataName;

    let people = project.purchasingStatus == null ? "Not Assigned" : project.purchasingStatus[`${itemDataName}`].poc;
    let status = project.purchasingStatus == null ? "hello" : project.purchasingStatus[`${itemDataName}`].status.statusDetail;
    let date = project.purchasingStatus == null ? " " : project.purchasingStatus[`${itemDataName}`].status.date;
    let notes = project.purchasingStatus == null ? " " : project.purchasingStatus[`${itemDataName}`].status.notes
    return (
        <tr>
            <td>{item}</td>
            <td>{people}</td>
            <td>{status}</td>
            <td>{date}</td>
            <td>{notes}</td>
            <td>
                <Button type = "button" onClick={(event) => props.handleEditClick(event,rowId)}>Edit</Button>
            </td>
        </tr>
    )}

export default PurchasingStatusTableRow;