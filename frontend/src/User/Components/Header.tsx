import { Container, Nav, NavLink, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";

export default function Header(){
    return (
        <Navbar expand={"md"} style={{height: "50px"}} className="bg-black text-white">
            <Container>
                <NavbarBrand>
                    <div style={{width: "200px"}}>
                        
                    </div>
                </NavbarBrand>
                <NavbarCollapse>
                    <Nav className="d-flex flex-column flex-md-row gap-md-4 gap-0">
                        <NavLink href="/restaurant-web-application/" style={{color: "white"}}>Home</NavLink>
                        <NavLink href="/restaurant-web-application/about" style={{color: "white"}}>About Us</NavLink>
                        <NavLink href="/restaurant-web-application/contact-us" style={{color: "white"}}>Contact Us</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
            <Container className="justify-content-end pe-4 gap-3">
                <NavLink href="/restaurant-web-application/register" style={{color: "white"}} className=" align-self-end w-auto">Register</NavLink>
                <NavLink href="/restaurant-web-application/login" style={{color: "white"}} className=" align-self-end w-auto">Login</NavLink>
            </Container>
        </Navbar>
    );
}