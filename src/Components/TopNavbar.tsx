import { FC } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"
import { Link, NavigateFunction, useNavigate } from "react-router-dom";

const TopNavbar: FC = () => {
    const navigate:NavigateFunction = useNavigate()
    return (
            <Navbar  collapseOnSelect bg="light" variant="light" expand='sm'>
                <Container >
                    <Navbar.Brand>
                        <img src={logo} alt="ad zim log, a megaphone" width="50"/>
                    </Navbar.Brand>
                </Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto ">
                            <Nav.Link className="linkBox" href="/">Home</Nav.Link>
                            <Nav.Link className="linkBox" onClick={()=> navigate("/ads", {state:{category:"Electronics"}})}>Electronics</Nav.Link>
                            <Nav.Link className="linkBox" onClick={()=> navigate("/ads", {state:{category:"Clothing"}})}>Clothing</Nav.Link>
                            <Nav.Link className="linkBox" onClick={()=> navigate("/ads", {state:{category:"Vehicles"}})}>Vehicles</Nav.Link>
                            <Nav.Link className="linkBox" onClick={()=> navigate("/ads", {state:{category:"Tools"}})}>Tools</Nav.Link>
                            <Nav.Link className="linkBox" onClick={()=> navigate("/ads", {state:{category:"Other"}})}>Other</Nav.Link>
                            <Nav.Link className="linkBox" href="/freeAd"><b>FreeAds</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default TopNavbar;