import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import BidStatus from "./BidStatus/BidStatus";
import SelectionStatus from "./SelectionStatus/SelectionStatus";
import PurchasingStatus from "./PurchasingStatus/PurchasingStatus";
import {Row, Col} from 'react-bootstrap';
import "../index.css";

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
                        <Col className= "project">
                            <h1> {project.address} </h1>
                            <SelectionStatus project={project}/>
                            <PurchasingStatus project={project}/>
                            <BidStatus project={project}/>
                        </Col>
                ))}
        </div>
    );
}

export default Projects;