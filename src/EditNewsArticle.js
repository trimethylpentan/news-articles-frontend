// @flow

import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Alert} from "react-bootstrap";
import ArticleForm from "./components/form/ArticleForm";
import type {ArticleValues} from "./types/ArticleValues";
import {useBaseUrl} from "./hooks/base-url";

type Params = {
  articleId: 'number',
}

function EditNewsArticle(): React$Element<any> {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const params: Params = useParams();

  const navigate = useNavigate();

  const baseUrl = useBaseUrl();

  // Diese Funktion wird aufgerufen, wenn das Formular abgesendet wird
  const saveChanges = (event: Event) => {
    setError(null);
    event.preventDefault();
    fetch(`${baseUrl}/news-article/edit`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        id: params.articleId,
        title: title,
        text: text
      })
    })
      .then((response) => response.json())
      .then((response) => {
        setSuccess(response.success);
        if (!response.success) {
          setError(response.error || 'Es ist ein Fehler aufgetreten');
          return;
        }

        setTimeout(() => navigate('/'), 1000);
      })
      .catch((error) => {
        setError(error.message)
      })
  }

  // Den aktuellen Artikel von der API laden
  useEffect(() => {
    fetch(`${baseUrl}/news-article/${params.articleId}`)
      .then((response) => response.json())
      .then((result) => {
        if (!result.found) {
          setError('Der Artikel konnte nicht gefunden werden');
          return;
        }

        const newsArticle: ArticleValues = result['news-article'];
        console.log(newsArticle);
        setTitle(newsArticle.title);
        setText(newsArticle.text);
      });
  }, [params.articleId])

  return <>
    <h1>Artikel bearbeiten</h1>
    {success && <Alert variant={'success'}>Artikel erfolgreich bearbeitet.</Alert>}
    {error && <Alert variant={'danger'}>{error}</Alert>}
    <ArticleForm title={title} text={text} setText={setText} setTitle={setTitle} onSubmit={saveChanges}/>
  </>
}

export default EditNewsArticle;
