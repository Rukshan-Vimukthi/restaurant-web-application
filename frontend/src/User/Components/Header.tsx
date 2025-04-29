import { Container, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarCollapse, Row } from "react-bootstrap";

export default function Header(){
    return (
        <Navbar expand={"md"} style={{height: "50px"}} className="bg-black text-white">
            <Container>
                <NavbarBrand>
                    <div style={{width: "200px"}}></div>
                </NavbarBrand>
                <NavbarCollapse>
                    <Nav className="d-flex flex-column flex-md-row gap-md-4 gap-0">
                        <NavLink href="/" style={{color: "white"}}>Home</NavLink>
                        <NavLink href="/about" style={{color: "white"}}>About Us</NavLink>
                        <NavLink href="/contact-us" style={{color: "white"}}>Contact Us</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
            <Container className="justify-content-end pe-4 gap-3">
                <NavLink href="/register" style={{color: "white"}} className=" align-self-end w-auto">Register</NavLink>
                <NavLink href="/login" style={{color: "white"}} className=" align-self-end w-auto">Login</NavLink>
            </Container>
        </Navbar>
    );
}