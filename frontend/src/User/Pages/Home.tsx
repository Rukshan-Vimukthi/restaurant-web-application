import {Row, Col, Card, CardBody, CardFooter} from "react-bootstrap"

import BannerImage from "../../assets/ChatGPT Image Apr 22, 2025, 03_54_34 PM.png"
import DishesOnTable from "../../assets/33eb9d93-7116-4a35-9d71-6731b727614c.jpeg"
import TeamImage from "../../assets/ChatGPT Image Apr 27, 2025, 06_23_28 PM.png"
import OfferImage from "../../assets/ChatGPT Image Apr 27, 2025, 07_48_45 PM.png"

import BrowseAndSelect from "../../assets/browse-and-select.svg"
import CustomizeAndOrder from "../../assets/customize-and-order.svg"
import DineInPickupGetDelivered from "../../assets/dine-pick-up-or-get-delivered.svg"
import { ReactElement, useEffect } from "react";

import "./css/style.css"
import Review from "../Components/Review"


export default function Home(): ReactElement{

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting){
                    const classList = entry.target.classList;

                    if(entry.target.id == "banner-heading"){
                        entry.target.classList.add("typing-animation");
                    }

                    if (classList.contains("popup-card")){
                        entry.target.classList.add("popup");
                    }else{
                        entry.target.classList.add("fade-in");
                    }
                }else{
                    const classList = entry.target.classList;

                    if(entry.target.id == "banner-heading"){
                        entry.target.classList.add("typing-animation");
                    }

                    if (classList.contains("popup-card")){
                        entry.target.classList.remove("popup");
                    }else{
                        entry.target.classList.remove("fade-in");
                    }
                }
            });
        }, {threshold: 0.5});

        const elements = document.querySelectorAll(".observe-target");
        elements.forEach(element => {observer.observe(element)});

        const stepCards = document.querySelectorAll(".popup-card");
        stepCards.forEach(element => {observer.observe(element)});

        return () => observer.disconnect();
    }, [])

    return (
        <>
            <Row className="justify-content-center py-5 observe-target" style={{height: "612px", backgroundImage: `url('${BannerImage}')`, backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <Col sm={5} className="text-white py-5 h-100 d-flex flex-column justify-content-start">
                    <div className="fw-bolder text-center mt-5 type-animation" style={{fontSize: "45px"}}>Delicious Moments Await 🍕</div>
                    <div className="text-center mt-3" style={{fontSize: "28px"}}>Dine-In • Delivery • Pickup</div>
                    <div className="text-center" style={{fontSize: "28px"}}>Enjoy your favorite meals wherever you are.</div>
                    <Row className="text-center justify-content-center align-items-center pt-5 gap-3">
                        <button className="btn text-white rounded-3 w-auto" style={{fontSize: "32px", backgroundColor: "#FF6B00"}}>Order Now</button> 
                        <button className="btn text-white rounded-3 w-auto" style={{fontSize: "32px", backgroundColor: "#007F5F"}}>Book a Table</button>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"pe-xl-5 py-5"} style={{backgroundColor: "#FAF3E0"}}>
                    <Row className="d-flex align-items-center justify-content-evenly justify-content-xl-end gap-5 pe-xl-5 me-xl-5">
                        <Col sm={5}>
                            <div className="popup-card" style={{width: "450px", height: "300px", backgroundImage: `url(${TeamImage})`, backgroundSize: "cover", borderRadius: "10px"}}></div>
                        </Col>
                        <Col sm={5} className="pe-xl-5 me-xl-5">
                            <Row className="fs-1 fw-bolder">
                                <Col sm={11} className="text-center">
                                    About Us
                                </Col>
                            </Row>
                            <Row className="pt-3 fs-3">
                                <Col sm={11} className="text-center">
                                    Made With Passion, Served With Love
                                </Col>
                            </Row>
                            <Row className="pt-4">
                                <Col sm={11} className="text-center fs-5">
                                    At [Restaurant Name], we believe great food brings people together. 
                                    Whether you're joining us for a cozy dine-in experience, grabbing a quick bite to go, 
                                    or enjoying delivery from the comfort of your home — we’re here to serve flavor with flair. 
                                    Fresh ingredients, bold recipes, and heartfelt service are our secret ingredients.
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"px-5 d-flex align-items-center"} style={{backgroundColor: "#FFFFFF", height: "312px", background: `url(${DishesOnTable}) right/512px 512px no-repeat`}}>
                    <Row className="ps-xl-5 ms-xl-5 justify-content-center align-items-center">
                        <Col sm={12} className="">
                            <Row className="fs-1 fw-bolder">
                                Explore Our Menu
                            </Row>
                            <Row className="pt-3 fs-4">
                                <Col sm={12}>
                                    Crave-Worthy Dishes for Every Craving
                                </Col>
                            </Row>
                            <Row className="pt-4 fs-5">
                                <Col xs={5} xl={8}>
                                    From hearty classics to modern twists, our menu is crafted to satisfy. 
                                    Explore a delicious range of starters, mains, desserts, and drinks — all made fresh, 
                                    just for you.
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"px-5 py-5"} style={{backgroundColor: "#E9CBA7"}}>
                    <Row className="ps-5 ms-5">
                        <Col sm={12}>
                            <Row className="fs-1 fw-bolder justify-content-center">
                                How It Works
                            </Row>
                            <Row className="pt-3 fs-2">
                                <Col sm={12} className="text-center">
                                    Getting Your Favorite Food Is Easy
                                </Col>
                            </Row>
                            <Row className="pt-4 justify-content-center">
                                <Col xs={12} md={4} xl={3}>
                                    <Card className="popup-card">
                                        <CardBody className="d-flex justify-content-center">
                                            <img src={BrowseAndSelect} style={{width: "200px", height: "auto"}}/>
                                        </CardBody>
                                        <CardFooter className="fs-5 text-center">
                                            Browse & Select — Explore our menu and pick your favorites.
                                        </CardFooter>
                                    </Card>
                                </Col>

                                <Col xs={12} md={4} xl={3}>
                                    <Card className="popup-card">
                                        <CardBody className="d-flex justify-content-center">
                                            <img src={CustomizeAndOrder} style={{width: "200px", height: "auto"}}/>
                                        </CardBody>
                                        <CardFooter className="fs-5 text-center">
                                            Customize & Order — Add your special touch and place the order.
                                        </CardFooter>
                                    </Card>
                                </Col>

                                <Col xs={12} md={4} xl={3}>
                                    <Card className="popup-card">
                                        <CardBody className="d-flex justify-content-center">
                                            <img src={DineInPickupGetDelivered} style={{width: "200px", height: "auto"}}/>
                                        </CardBody>
                                        <CardFooter className="fs-5 text-center">
                                            Dine, Pick Up, or Get Delivered — You choose how you enjoy it!
                                        </CardFooter>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"px-5 py-5"} style={{backgroundColor: "#FFF4E0"}}>
                    <Row className="ps-5 ms-5 justify-content-center align-items-center">
                        <Col xs={12} md={6}>
                            <Row className="fs-1 fw-bolder justify-content-start justify-content-xl-center">
                                Special Offers / Featured Dishes
                            </Row>
                            <Row className="pt-3 fs-2 text-center">
                                <Col sm={12}>
                                    Hot Deals & Fresh Picks 🔥
                                </Col>
                            </Row>
                            <Row className="pt-4 justify-content-center align-items-center fs-5">
                                <Col sm={6} className="text-center">
                                    Don't miss out on our limited-time offers and top-rated dishes. 
                                    There's always something exciting to try!
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} md={6}>
                            <img src={OfferImage} className="popup-card" style={{width: "400px", height: "400px", borderRadius: "20px", boxShadow: "0px 0px 5px 4px #CCC0b055"}}/>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row className="observe-target">
                <Col sm={12} className={"px-5 py-5 wooden-texture-section"} style={{backgroundColor: "#FAF3E0"}}>
                    <Row className="ps-5 ms-5">
                        <Col sm={12}>
                            <Row className="fs-1 fw-bolder">
                                Book a Table
                            </Row>
                            <Row>
                                <Col sm={5}>
                                    <hr className=" border-5"/>
                                </Col>
                            </Row>
                            <Row className="fs-4 pt-3">
                                <Col sm={12}>
                                    Reserve Your Table in Seconds
                                </Col>
                            </Row>
                            <Row className="fs-5 pt-4">
                                <Col sm={10}>
                                    <Row>
                                        <Col sm={12}>
                                            Skip the wait and book your table online. Perfect for date nights, family dinners, 
                                            or casual get-togethers.
                                        </Col>
                                    </Row>
                                    <Row className="pt-4">
                                        <Col sm={12}>
                                            <button className="btn w-auto fs-4" style={{backgroundColor: "#E63946", color: "#FFF"}}>Book now</button>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row className="observe-target">
                <Col sm={12} className={"px-5 py-5"} style={{backgroundColor: "#FDF6ED"}}>
                    <Row className="ps-5 ms-5 gap-5">
                        <Col sm={7}>
                            <Row className="fs-1 fw-bolder">
                                Testimonials / Reviews
                            </Row>
                            <Row className="pt-3 fs-4">
                                <Col sm={12}>
                                    Our Customers Say It Best ❤️
                                </Col>
                            </Row>
                            <Row className="pt-4 fs-5">
                                <Col sm={12}>
                                    Here's what our happy diners have to say about their experience.
                                </Col>
                            </Row>
                            <Row className=" overflow-x-scroll pt-3 gap-5">
                                <Review />
                                <Review />

                                {/* <Col sm={5} className="px-3 py-2 rounded-2" style={{backgroundColor: "#0000FF15"}}>
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
                                        <Col sm={12}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis suscipit expedita nulla ea maxime possimus.
                                        </Col>
                                    </Row>
                                </Col> */}
                            </Row>
                        </Col>
                        <Col sm={4} className="pt-5 d-flex flex-column justify-content-center algin-items-center">
                            <Row>
                                <textarea className=" form-control" cols={8} rows={11} style={{height: "100%"}} placeholder="Write your thoughts"></textarea>
                            </Row>
                            <Row className="justify-content-end pt-3">
                                <button className="w-auto btn btn-primary">POST</button>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"px-5 py-5"} style={{backgroundColor: "#FFFFFF"}}>
                    <Row className="ps-5 ms-5">
                        <Col sm={12}>
                            <Row className="fs-1 fw-bolder">
                                Location & Hours
                            </Row>
                            <Row style={{color: "#2B2B2B"}} className="pt-3 fs-4">
                                <Col sm={12}>
                                    Visit Us or Get It Delivered
                                </Col>
                            </Row>
                            <Row className="pt-4 fs-5">
                                <Col xs={12} md={5} className="d-flex flex-column gap-3">
                                    <Row>
                                        📍 Address: [Your location]
                                    </Row>
                                    <Row>
                                        🕒 Hours: Mon - Sun, 11 AM - 10 PM
                                    </Row>
                                    <Row>
                                        📞 Phone: [Your number]
                                    </Row>
                                </Col>
                                <Col xs={12} md={5}>

                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row className="observe-target">
                <Col sm={12} className={"px-5"} style={{backgroundColor: "#2B2B2B"}}>
                    <Row className="ps-5 ms-5">
                        <Col sm={12}>
                            <Row>
                                Call to Action / Footer
                            </Row>
                            <Row>
                                Hungry yet?  
                                Order now or come visit us — we’ll take care of the rest!
                            </Row>
                            <Row>
                                <Col sm={5}>
                                    <button>Start Order</button> <button>Book a Table</button>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
}