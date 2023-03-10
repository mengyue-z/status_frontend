import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";

function SelectionStatusTableRow(props, handleEditClick) {
    const {project} = props;
    console.log(project)
    const rowId=props.id;
    let item = props.item;
    let itemDataName = props.itemDataName;
    const [cellColor, setCellColor] = useState('white');
    const handleCellClick = () => {
        switch (cellColor) {
            case 'white':
                setCellColor('red');
                break;
            case 'red':
                setCellColor('lightgreen');
                break;
            case 'green':
                setCellColor('white');
                break;
            default:
                setCellColor('white');
        }
    };
    //console.log(project.selectionStatus[`${itemDataName}`]);
    let people = project.selectionStatus == null ? "Not Assigned" : project.selectionStatus[`${itemDataName}`].poc;
    let status = project.selectionStatus == null ? "in process" : project.selectionStatus[`${itemDataName}`].status.statusDetail;
    let date = project.selectionStatus == null ? " " : project.selectionStatus[`${itemDataName}`].status.date;
    let notes = project.selectionStatus == null ? " " : project.selectionStatus[`${itemDataName}`].status.notes
    return (
        <tr>
            <td style={{ backgroundColor: cellColor }} onClick={handleCellClick}>{item}</td>
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