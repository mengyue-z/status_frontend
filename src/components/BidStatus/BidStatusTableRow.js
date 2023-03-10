import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";

function BidStatusTableRow(props, handleEditClick) {
    const {project} = props;
    console.log(project)
    const rowId=props.id;
    let item = props.item;
    let itemDataName = props.itemDataName;
    let people = project.bidStatus == null ? "Not Assigned" : project.bidStatus[`${itemDataName}`].poc;
    let status = project.bidStatus == null ? "in process" : project.bidStatus[`${itemDataName}`].status.statusDetail;
    let date = project.bidStatus == null ? " " : project.bidStatus[`${itemDataName}`].status.date;
    let notes = project.bidStatus == null ? " " : project.bidStatus[`${itemDataName}`].status.notes
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

export default BidStatusTableRow;