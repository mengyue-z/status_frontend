import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";

function Projects() {
    const[projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/projects/",
            {
                method:"GET",
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'},
                })
            .then(res=>res.json())
            .then((result)=> {
            setProjects(result);
        }
        )},[]);

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
                {projects.map(project=>(
                    <tr>
                        <td>{project.id}</td>
                        <td>{project.address}</td>
                        <td>
                            <Button>View and Edit</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
}

export default Projects;