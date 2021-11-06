// @flow

import React from "react";
import {Outlet} from "react-router-dom";
import ArticlesNavbar from "./components/ArticlesNavbar";
import {Container} from "react-bootstrap";

function NewsArticles(): React$Element<any> {
  return <>
    <ArticlesNavbar/>
    <Container>
      <Outlet/>
    </Container>
  </>
}

export default NewsArticles;