// @flow

import React, {useState} from "react";
import {Alert, Container} from "react-bootstrap";
import DeleteArticleForm from "./components/form/DeleteArticleForm";
import {useNavigate, useParams} from "react-router-dom";
import {useBaseUrl} from "./hooks/base-url";

function DeleteNewsArticle(): React$Element<any> {
  const params = useParams();

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const baseUrl = useBaseUrl();

  // Diese Funktion wird aufgerufen, wenn der User auf "löschen" klickt
  const onDelete = (event) => {
    event.preventDefault();
    setError(null);

    fetch(`${baseUrl}/news-article/delete`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
        articleId: params.articleId,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.success) {
          setError(response.error || 'Es ist ein Fehler aufgetreten');
          return;
        }

        // Nach 1s leiten wir auf die Startseite zurück
        setSuccess(true);
        setTimeout(() => navigate('/'), 1000);
      })
      .catch((error) => setError(error.message))
  }

  const onCancel = (event) => {
    event.preventDefault();
    navigate(`/news-articles/${params.articleId}`);
  }

  return <Container>
    {error && <Alert variant={'danger'}>{error}</Alert>}
    {success && <Alert variant={'success'}>Artikel erfolgreich gelöscht</Alert>}
    <DeleteArticleForm articleId={params.articleId} onDelete={onDelete} onCancel={onCancel}/>
  </Container>
}

export default DeleteNewsArticle;
