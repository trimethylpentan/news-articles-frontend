// @flow

import React from "react";
import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

type Props = {
  articleId: ?number
}

function ArticlesNavbar(props: Props): React$Element<any> {
  const {articleId} = props;

  return <Navbar bg="light" expand="lg" className={"mb-2"}>
    <Container>
      <Navbar.Brand><Link to={'/'} className="no-link-style">News-Artikel</Link></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link><Link to={'/'} className="no-link-style">Startseite</Link></Nav.Link>
          <Nav.Link><Link to={'/news-articles/create'} className="no-link-style">Artikel erstellen</Link></Nav.Link>
          {articleId && <Nav.Link><Link to={`/news-articles/edit/${articleId}`} className="no-link-style">Artikel bearbeiten</Link></Nav.Link>}
          {articleId && <Nav.Link><Link to={`/news-articles/delete/${articleId}`} className="no-link-style">Artikel löschen</Link></Nav.Link>}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default ArticlesNavbar;
