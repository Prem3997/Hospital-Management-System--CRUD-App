import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './Styles/NavigationBarStyles.scss'
const NavigationBarComponent = props => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand as={Link} to='/home'>
                    InterMountain Health Care
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink activeClassName="navbar__link--active"
                        className="navbar__link" as={Link} to='/MedicalServices'>Medical Services</NavLink>
                    <NavLink activeClassName="navbar__link--active"
                        className="navbar__link" as={Link} to='/Login'>LogIn</NavLink>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-light">Search</Button>
                </Form>
            </Navbar>
            <Navbar bg="primary" variant="dark" className='navbar fixed-bottom'>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Terms & Conditions</Nav.Link>
                    <Nav.Link href="#features">Privacy Policy</Nav.Link>
                    <Nav.Link href="#pricing">© Intermountain Health Care</Nav.Link>
                </Nav>
            </Navbar>
        </div >
    )
}

export default NavigationBarComponent
