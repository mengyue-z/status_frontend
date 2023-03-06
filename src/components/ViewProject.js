import React, {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import {Button, Col, Row} from "react-bootstrap";
import SelectionStatus from "./SelectionStatus/SelectionStatus";
import PurchasingStatus from "./PurchasingStatus/PurchasingStatus";
import BidStatus from "./BidStatus/BidStatus";
import {useParams} from "react-router-dom";


function ViewProject() {
    const [project, setProject] = useState(null);
    const {id} = useParams();

    useEffect(()=>{
        const fetchProject = async() =>{
            const response = await fetch(`http://localhost:8080/projects/${id}`)
            const data = await response.json();
            setProject(data);
            console.log(data);
        };
        fetchProject();
    },[id]);

    if (!project) {
        return <div>Loading...</div>;
    }

    console.log(project);
    return (
        <div className = "view-project">
            <h1>{project.address}</h1>
            <Col>
                <SelectionStatus project={project}/>
            </Col>
            <Col>
                <BidStatus project={project} />
            </Col>
            <Col>
                <PurchasingStatus project={project} />
            </Col>
        </div>
    );
}

export default ViewProject;