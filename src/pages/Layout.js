import React from "react"
import { Link, Outlet } from "react-router-dom"
// Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap"

const Layout = () => {
  return (
    <div>
      <Navbar className="main-accent" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            My CV
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/education">
                Education
              </Nav.Link>
              <Nav.Link as={Link} to="/experience">
                Experience
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  )
}

export default Layout
