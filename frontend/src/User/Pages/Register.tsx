import {ReactElement} from "react"
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


export default function Register(): ReactElement{
    const navigate = useNavigate();

    const registerUser = () => {
        navigate("/profile");
    }

    return (
        <>
        <Row className="justify-content-center align-items-center vh-100" style={{backgroundColor: "#FFF"}}>
            <Col sm={8} className="align-items-center rounded-3 py-4 px-4" style={{backgroundColor: "#0000FF11"}}>
                <Row>
                    <Col sm={6}>
                        <Row>
                            <Col sm={12} className="fs-1 fw-bolder">
                                Join Our Foodie Family!
                            </Col>
                        </Row>

                        <Row className="pt-2 text-center">
                            <Col sm={12}>
                                Sign up to explore mouthwatering menus, earn rewards, and order your favorite dishes for dine-in, 
                                pickup, or delivery.
                            </Col>
                        </Row>

                        <Row className="pt-2 text-center">
                            <Col sm={12}>
                                Creating an account is quick and easy — and gives you full access to exclusive offers, 
                                faster checkouts, and personalized recommendations. Whether you're planning a cozy dinner 
                                or grabbing something on the go, we've got you covered.
                            </Col>
                        </Row>

                        <Row className="pt-4 justify-content-center">
                            <Col sm={8}>
                            <ul>
                                <li>🍽️ View and order from our full menu</li>
                                <li>🛍️ Track orders and save favorites</li>
                                <li>🎁 Access member-only deals</li>
                                <li>🚀 Enjoy a faster, easier checkout</li>
                            </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className="pt-5">
                        <Row>
                            <Col md={6}>
                                <label>First Name</label>
                                <input type="text" className=" form-control" />
                            </Col>
                            <Col md={6}>
                                <label>First Name</label>
                                <input type="text" className=" form-control" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <label>Email</label>
                                <input type="email" className=" form-control" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <label>Password</label>
                                <input type="password" className=" form-control" />
                            </Col>
                        </Row>
                        <Row className="pt-2">
                            <Col sm={12}>
                                <input type="checkbox" className=" form-check-input" /> Remember me
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <input type="checkbox" className=" form-check-input" /> I have read and agree to the <a href="/terms-and-conditions">terms & condition</a> and <a href="/privacy-policy">Privacy Policy</a>
                            </Col>
                        </Row>
                        <Row className="pt-3">
                            <Col sm={12}>
                                <button className="btn btn-primary" onClick={registerUser}>Register</button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
        </>
    );
}