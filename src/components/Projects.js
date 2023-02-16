import React from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";

function Projects() {
    return (
        <div className = "projects">
            <h1>Project List</h1>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>13720 Atlantis</td>
                    <td>
                        <Button>Selection</Button>
                        <Button>Bid</Button>
                        <Button>Purchasing</Button>
                        <Button>Edit</Button>
                    </td>
                </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default Projects;