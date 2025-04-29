import {ReactElement} from "react";
import { Card, CardBody, CardHeader, Col, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";


export default function RestaurantManagerControlPanel(): ReactElement{
    return (
        <>
        <TabContainer id="sidebar">
            <Row>
                <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <NavItem>
                            <NavLink eventKey={"dashboard"}>Dashboard</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink eventKey={"orders"}>Orders</NavLink>
                        </NavItem>
                    </Nav>
                </Col>

                <Col sm={9}>
                    <TabContent>

                        <TabPane eventKey={"dashboard"}>
                            <Col sm={12}>
                                <Row className="gap-3">
                                    <Card style={{width: "15rem"}}>
                                        <CardHeader className="fs-3 fw-semibold">Orders Today</CardHeader>
                                        <CardBody className="text-center fs-4">
                                            150
                                        </CardBody>
                                    </Card>

                                    <Card style={{width: "15rem"}}>
                                        <CardHeader className="fs-3 fw-semibold">Revenue Today</CardHeader>
                                        <CardBody className="text-center fs-4">
                                            $15250
                                        </CardBody>
                                    </Card>

                                    <Card style={{width: "15rem"}}>
                                        <CardHeader className="fs-3 fw-semibold">Tables</CardHeader>
                                        <CardBody className="text-center fs-4">
                                            <Row>
                                                <Col xs={6}>
                                                    <Row>Active</Row>
                                                    <Row>20</Row>
                                                </Col>
                                                <Col xs={6}>
                                                    <Row>Inactive</Row>
                                                    <Row>18</Row>
                                                </Col>
                                            </Row>
                                        </CardBody>
                                    </Card>

                                </Row>
                            </Col>
                        </TabPane>

                        <TabPane eventKey={"orders"}>
                            Orders
                        </TabPane>

                    </TabContent>
                </Col>
            </Row>
        </TabContainer>
        </>
    );
}