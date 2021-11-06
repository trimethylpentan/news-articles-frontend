// @flow
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {useEffect, useState} from "react";
import Articles from "./components/Articles";
import ArticlesNavbar from "./components/ArticlesNavbar";
import {Container} from "react-bootstrap";
import {useBaseUrl} from "./hooks/base-url";

function App(): React$Element<any> {
  const [articles, setArticles] = useState([]);
  const baseUrl = useBaseUrl();

  useEffect(() => {
    fetch(`${baseUrl}/news-article/list`)
      .then((response) => response.json())
      .then((result) => setArticles(result['news-articles']));
  }, [])

  return (
    <>
      <ArticlesNavbar articleId={null}/>
      <Container>
        <h1>Startseite</h1>
        <Articles articles={articles}/>
      </Container>
    </>
  );
}

export default App;
