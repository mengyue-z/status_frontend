import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Button, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

function Projects() {
    const navigate = useNavigate();
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
                <thead className ="thead-white">
                <tr>
                    <th>#</th>
                    <th>Project</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody className="table-striped">
                {projects.map(project=>(
                    <tr key="{project.id}">
                        <td>{project.id}</td>
                        <td>{project.address}</td>
                        <td>
                            <Button onClick={()=>navigate(`/project/${project.id}`)}>View and Edit</Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
            <Button onClick={()=>navigate(`/new-project`)}>Add New Project</Button>
        </div>
    );
}

export default Projects;