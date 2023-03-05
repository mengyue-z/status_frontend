import React, {useState, useEffect} from "react";
import {Button, Table} from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';

function BidStatusTableRow(props, handleEditClick) {
    const {project} = props;
    console.log(project)
    const rowId=props.id;
    let item = props.item;
    let itemDataName = props.itemDataName;

    let people = project.bidStatus == null ? "Not Assigned" : project.bidStatus[`${itemDataName}`].poc;
    let status = project.bidStatus == null ? "hello" : project.bidStatus[`${itemDataName}`].status.statusDetail;
    let date = project.bidStatus == null ? " " : project.bidStatus[`${itemDataName}`].status.date;
    let notes = project.bidStatus == null ? " " : project.bidStatus[`${itemDataName}`].status.notes
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

export default BidStatusTableRow;