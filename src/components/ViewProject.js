import React from "react";
import Table from 'react-bootstrap/Table';
import {Button, Col, Row} from "react-bootstrap";
import SelectionStatus from "./SelectionStatus";
import PurchasingStatus from "./PurchasingStatus";
import BidStatus from "./BidStatus";

function ViewProject() {
    return (
        <div className = "view-project">
            <Col>
                <SelectionStatus />
            </Col>
            <Col>
                <BidStatus />
            </Col>
            <Col>
                <PurchasingStatus />
            </Col>
        </div>
    );
}

export default ViewProject;