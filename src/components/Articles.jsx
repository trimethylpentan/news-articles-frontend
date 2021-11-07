// @flow

import React from "react";
import type {ArticleValues} from "../types/ArticleValues";
import {Col, Container, Row} from "react-bootstrap";
import Article from "./Article";

type Props = {
  articles: Array<ArticleValues>
}

function Articles(props: Props): React$Element<any> {
  const {articles} = props;

  // Immer 2 Artikel nebeneinander in einer Row darstellen
  const mappedArticles = [];
  for (let i = 0; i < articles.length; i += 2) {
    mappedArticles.push(<Row className={"mt-4"} key={`row-${i}`}>
      <Col>
        <Article article={articles[i]}/>
      </Col>
      <Col>
        <Article article={articles[i + 1] || null}/>
      </Col>
    </Row>)
  }

  return (
    <Container fluid className="mb-5">
      {mappedArticles}
    </Container>
  )
}

export default Articles;
