// @flow

import React from "react";
import {Outlet, useParams} from "react-router-dom";
import ArticlesNavbar from "./components/ArticlesNavbar";
import {Container} from "react-bootstrap";

function NewsArticles(): React$Element<any> {
  const params = useParams();

  // In das "Outlet" wird die aktuelle Child-Route gerendert
  return <>
    <ArticlesNavbar articleId={params.articleId || null}/>
    <Container>
      <Outlet/>
    </Container>
  </>
}

export default NewsArticles;
