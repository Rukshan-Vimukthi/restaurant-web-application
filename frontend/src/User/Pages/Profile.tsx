import {ReactElement} from "react"
import { Card, CardBody, CardHeader, Col, FormCheck, Nav, NavItem, NavLink, Row, TabContainer, TabContent, TabPane } from "react-bootstrap";
import Order from "../Components/Order";
import "./css/style.css"
import { TrashFill } from "react-bootstrap-icons";
import { BiDevices } from "react-icons/bi";
import { RxReset } from "react-icons/rx";

export default function Profile(): ReactElement {
    return (
        <>
            <Row>
                <TabContainer defaultActiveKey={"dashboard"}>
                    <Row>
                        <Col sm={2} className="ps-3 pe-1 vh-100" style={{backgroundColor: "#000"}}>
                            <Row className="justify-content-center pb-3">
                                <div style={{width: "150px", height: "150px", borderRadius: "75px", backgroundColor: "#555"}}>

                                </div>
                            </Row>
                            <Nav variant="pills" className="flex-column">
                                <NavItem>
                                    <NavLink eventKey={"dashboard"}>Dashboard</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"security"}>Security</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink eventKey={"settings"}>Settings</NavLink>
                                </NavItem>
                            </Nav>
                        </Col>
                        <Col sm={10} className="pe-0">
                            <TabContent className="vh-100 w-100 overflow-y-scroll hide-scroll-bar" style={{backgroundColor: "#00F1"}}>
                                <TabPane className="" eventKey={"dashboard"}>
                                    <Col sm={12} className="ps-3 pt-2">
                                        <Row className="gap-3">
                                            <Card style={{width: "40%"}}>
                                                <CardHeader>
                                                    <Row>
                                                        <Col sm={8} className="fs-4">Basic Information</Col>
                                                        <Col sm={4} className="d-flex flex-row justify-content-end pe-0">
                                                            <button className="btn btn-primary">Edit</button>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row>
                                                        <label>First Name</label>
                                                        <input type="text" className=" form-control" />
                                                    </Row>
                                                    <Row>
                                                        <label>Last Name</label>
                                                        <input type="text" className=" form-control" />
                                                    </Row>
                                                    <Row>
                                                        <label>Email</label>
                                                        <input type="email" className=" form-control" />
                                                    </Row>
                                                    <Row>
                                                        <label>Phone Number</label>
                                                        <input type="text" className=" form-control" />
                                                    </Row>
                                                </CardBody>
                                            </Card>

                                            <Card style={{width: "50%"}}>
                                                <CardHeader>
                                                    <Row>
                                                        <Col sm={12} className="fs-4">Orders</Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>
                                                    <Row className="overflow-y-scroll hide-scroll-bar" style={{height: "300px"}}>
                                                        <Col sm={12} className="d-flex flex-column gap-3">
                                                            <Order 
                                                                orderID={1} 
                                                                paymentAmount={23} 
                                                                status={{statusID: 2, status: "processing"}} 
                                                                date={"4/23/2025"} 
                                                                items={
                                                                    [
                                                                        {
                                                                            itemID: 1,
                                                                            itemName: "Item 1",
                                                                            price: 23,
                                                                            description: ""
                                                                        }
                                                                    ]
                                                                } />

                                                            <Order 
                                                                orderID={2} 
                                                                paymentAmount={23} 
                                                                status={{statusID: 2, status: "ready"}} 
                                                                date={"4/23/2025"} 
                                                                items={
                                                                    [
                                                                        {
                                                                            itemID: 1,
                                                                            itemName: "Item 1",
                                                                            price: 23,
                                                                            description: ""
                                                                        }
                                                                    ]
                                                                } />

                                                            <Order 
                                                                orderID={3} 
                                                                paymentAmount={23} 
                                                                status={{statusID: 2, status: "delivered"}} 
                                                                date={"4/23/2025"} 
                                                                items={
                                                                    [
                                                                        {
                                                                            itemID: 1,
                                                                            itemName: "Item 1",
                                                                            price: 23,
                                                                            description: ""
                                                                        }
                                                                    ]
                                                                } />
                                                        </Col>
                                                    </Row>
                                                </CardBody>
                                            </Card>
                                        </Row>
                                        <Row>
                                            <Card style={{width: "40%"}} className="mt-2">
                                                <CardHeader>
                                                    <Row className="fs-4">
                                                        <Col xs={6}>Addresses</Col>
                                                        <Col xs={6}>
                                                            <Row className="justify-content-end">
                                                                <button className="w-auto btn btn-primary">Add a new address</button>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </CardHeader>
                                                <CardBody>

                                                    <Row className="rounded-2 border border-1 borderdark p-3">
                                                        <Col xs={8} className="d-flex align-items-center">
                                                            Address goes here
                                                        </Col>
                                                        <Col xs={4} className="d-flex justify-content-end align-items-center">
                                                            <button className="btn w-auto"><TrashFill style={{color: "red"}} /></button>
                                                        </Col>
                                                    </Row>

                                                </CardBody>
                                            </Card>
                                        </Row>
                                    </Col>
                                </TabPane>
                                <TabPane className="" eventKey={"security"}>
                                    <Col sm={12} className="ps-3 pt-2">
                                        <Row>
                                            <Col sm={3}>
                                                <Card className="px-3">
                                                    <CardHeader>
                                                        <Row className="fs-4">Password</Row>
                                                    </CardHeader>
                                                    <CardBody>
                                                        <Row className="pb-2">Forgot or exposed the password</Row>
                                                        <Row><button className="btn btn-outline-danger d-flex align-items-center gap-2 justify-content-center"><RxReset size={"28px"}/> RESET Now</button></Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                            <Col sm={3}>
                                                <Card className="px-3">
                                                    <CardHeader className="fs-4">Login Activity</CardHeader>
                                                    <CardBody>
                                                        <Row>
                                                            <Col xs={12}>
                                                                Last Login at 8:00 AM
                                                            </Col>
                                                        </Row>
                                                        <Row className="pt-2"><button className="btn btn-danger"><BiDevices className="fs-4"/> Logout from all devices</button></Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>

                                        </Row>
                                    </Col>
                                </TabPane>
                                <TabPane className="" eventKey={"settings"}>
                                    <Col sm={12} className="p-3">
                                        <Row>
                                            <Col xs={12} sm={10} md={3}>
                                                <Card>
                                                    <CardHeader className="fs-4">
                                                        Notification
                                                    </CardHeader>
                                                    <CardBody className="px-4">
                                                        <Row className="p-2">
                                                            <FormCheck className="rounded-2 border border-primary" style={{backgroundColor: "#0000FF0F"}} type="switch" id="order-status-update-switch" label="Order Status Updates"/>
                                                        </Row>
                                                        <Row className="p-2">
                                                            <FormCheck className="rounded-2 border border-primary" style={{backgroundColor: "#0000FF0F"}} type="switch" id="order-status-update-switch" label="Promotional messages"/>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                            <Col xs={12} sm={10} md={3}>
                                                <Card>
                                                    <CardBody className="px-4">
                                                        <Row className="p-2">
                                                            <button className="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2"><TrashFill />DELETE Account</button>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                        <Row className="mt-3">
                                            <Col xs={12} md={6}>
                                                <Card>
                                                    <CardHeader className="fs-4">Payment Methods</CardHeader>
                                                    <CardBody>
                                                        <Row className="rounded-2 border border-1 border-light p-2" style={{backgroundColor: "#0000FF10"}}>
                                                            <Col xs={2}>
                                                                <div style={{height: "70px"}}></div>
                                                            </Col>
                                                            <Col xs={6} className="d-flex align-items-center">
                                                                Debit Card
                                                            </Col>
                                                            <Col sm={4} className="d-flex justify-content-end align-items-center">
                                                                <input type="radio" style={{width: "30px", height: "30px"}} className=" form-check-input border border-1 border-dark" />
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </TabContainer>
            </Row>
        </>
    );
}
