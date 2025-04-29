import { Col, Row } from "react-bootstrap";
import {ReactElement} from "react";

export default function Review(): ReactElement{
    return (
        <Col sm={5} className="px-3 py-2 rounded-2" style={{backgroundColor: "#0000FF15"}}>
            <Row>
                <Col sm={2}>
                    <div style={{width: "40px", height: "40px", backgroundColor: "#555", borderRadius: "20px"}}></div>
                </Col>
                <Col sm={9} className="d-flex align-items-center">
                    John
                </Col>
            </Row>
            <Row className="pt-3">
                <hr />
            </Row>
            <Row>
                <Col sm={12} className="fs-5">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit expedita nulla ea maxime possimus.
                </Col>
            </Row>
        </Col>
    );
}