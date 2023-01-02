import { FC } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import logo from "../assets/logo.png"

const TopNavbar: FC = () => {
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
                            <Nav.Link className="linkBox" href="#link">Electronics</Nav.Link>
                            <Nav.Link className="linkBox" href="#link">Clothing</Nav.Link>
                            <Nav.Link className="linkBox" href="#link">Vehicles</Nav.Link>
                            <Nav.Link className="linkBox" href="#link">Tools</Nav.Link>
                            <Nav.Link className="linkBox" href="#link">Other</Nav.Link>
                            <Nav.Link className="linkBox" href="/freeAd"><b>FreeAds</b></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Navbar>
    )
}

export default TopNavbar;