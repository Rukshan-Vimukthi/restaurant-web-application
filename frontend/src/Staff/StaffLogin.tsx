import { ReactElement } from "react";
import { Row, Col } from "react-bootstrap";

export default function StaffLogin(): ReactElement{
    return (
        <>
        <Row>
            <Col sm={12}>
                <Row className=" justify-content-center align-items-center vh-100">
                    <Col xs={12} md={3}>
                        <Row className="fs-1 fw-bolder justify-content-center">Staff Login</Row>
                        <Row className="gap-3">
                            <input type="text" className=" form-control" placeholder="username"/>
                            <input type="password" className=" form-control" placeholder="password"/>
                        </Row>
                        <Row className="pt-3 justify-content-end">
                            <button className="btn btn-primary w-auto">Login</button>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    );
}