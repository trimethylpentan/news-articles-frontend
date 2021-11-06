// @flow

import React from "react";
import type {ArticleValues} from "../types/ArticleValues";
import {Card} from "react-bootstrap";
import {Link} from "react-router-dom";

type Props = {
  article: ?ArticleValues
}

function Article(props: Props): ?React$Element<any> {
  if (!props.article) {
    return null;
  }

  const {title, text, id} = props.article;
  return <Card>
    <Card.Body>
      <Link to={`/news-articles/${id}`} style={{color: 'inherit', textDecoration: 'none'}}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Link>
    </Card.Body>
  </Card>
}

export default Article;