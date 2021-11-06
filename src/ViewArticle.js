// @flow

import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import type {ArticleValues} from "./types/ArticleValues";
import {Alert} from "react-bootstrap";

type Params = {
  articleId: 'number',
}

function ViewArticle(): React$Element<any> {
  const params: Params = useParams();
  const [article: ArticleValues, setArticle] = useState(null);
  const [found: boolean, isFound] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/news-article/${params.articleId}`)
      .then((response) => response.json())
      .then((result) => {
        const newsArticle = result['news-article'];
        newsArticle.createdDate = new Date(newsArticle.createdDate);
        setArticle(result['news-article']);
        isFound(result.found);
      });
  }, [params.articleId])

  if (!found || article === null) {
    return <Alert>Der gewünschte Artikel konnte leider nicht gefunden werden</Alert>;
  }

  const {title, text, createdDate} = article;

  return <div>
    <h1>{title}</h1>
    <i>Erstellt am {createdDate.toLocaleDateString()} um {createdDate.toLocaleTimeString()}</i>
    <p>{text}</p>
  </div>
}

export default ViewArticle;