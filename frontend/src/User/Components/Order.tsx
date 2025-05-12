import {ReactElement} from "react"
import { Col, Row } from "react-bootstrap";
import { OrderType } from "../../types/Types";

export default function Order(props: OrderType): ReactElement {
    return (
        <Row className="border border-1 rounded-2" style={{backgroundColor: "#0000FF10"}}>
            <Col sm={12}>
                <Row>
                    <Col sm={4}>
                        #{props.orderID}
                    </Col>
                    <Col sm={8}>
                        Item Name
                    </Col>
                </Row>
                <Row>
                    <hr/>
                </Row>
                <Row className="px-3">
                    <Col sm={3}>
                        <Row>
                            Total
                        </Row>
                        <Row>
                            ${props.paymentAmount}
                        </Row>
                    </Col>
                    <Col sm={3}>
                        <Row>Date & time</Row>
                        <Row>{props.date}</Row>
                    </Col>
                    <Col sm={3}>
                        
                    </Col>
                    <Col sm={3} className="pb-3">
                        <Row>Status</Row>
                        <Row>
                            {props.status.status}
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}