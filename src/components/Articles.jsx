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

  const mappedArticles = [];
  for (let i = 0; i < articles.length; i += 2) {
    mappedArticles.push(<Row>
      <Col>
        <Article id={`article-${i}`} article={articles[i]}/>
      </Col>
      <Col>
        <Article id={`article-${i + 1}`} article={articles[i + 1] || null}/>
      </Col>
    </Row>)
  }

  return (
    <Container fluid>
      {mappedArticles}
    </Container>
  )
}

export default Articles;