// @flow

import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";

function ArticlesNavbar(): React$Element<any> {
  return <Navbar bg="light" expand="lg" className={"mb-2"}>
    <Container>
      <Navbar.Brand href={'/'}>News-Artikel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Startseite</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default ArticlesNavbar;