// @flow
import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import {useEffect, useState} from "react";
import Articles from "./components/Articles";
import {Outlet} from "react-router-dom";
import ArticlesNavbar from "./components/ArticlesNavbar";
import {Container} from "react-bootstrap";

function App(): React$Element<any> {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/news-article/list')
      .then((response) => response.json())
      .then((result) => setArticles(result['news-articles']));
  }, [])

  return (
    <>
      <ArticlesNavbar/>
      <Container>
        <h1>Startseite</h1>
        <Articles articles={articles}/>
      </Container>
    </>
  );
}

export default App;
