import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";

function SelectionStatusTableRow(props, handleEditClick) {
    const {project} = props;
    console.log(project)
    const rowId=props.id;
    let item = props.item;
    let itemDataName = props.itemDataName;
    //console.log(project.selectionStatus[`${itemDataName}`]);
    let people = project.selectionStatus == null ? "Not Assigned" : project.selectionStatus[`${itemDataName}`].poc;
    let status = project.selectionStatus == null ? "hello" : project.selectionStatus[`${itemDataName}`].status.statusDetail;
    let date = project.selectionStatus == null ? " " : project.selectionStatus[`${itemDataName}`].status.date;
    let notes = project.selectionStatus == null ? " " : project.selectionStatus[`${itemDataName}`].status.notes
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

export default SelectionStatusTableRow;