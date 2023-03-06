import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import AddProjectForm from "./AddProjectForm";
import ViewProject from "./ViewProject";
import BidStatus from "./BidStatus/BidStatus";
import SelectionStatus from "./SelectionStatus/SelectionStatus";
import PurchasingStatus from "./PurchasingStatus/PurchasingStatus";

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
                {projects.map(project=>(
                    <div>
                        <h1> {project.address} </h1>
                        <SelectionStatus project={project}/>
                        <PurchasingStatus project={project}/>
                        <BidStatus project={project}/>
                    </div>
                ))}
        </div>
    );
}

export default Projects;