// @flow

import React, {useState} from "react";
import {Alert, Container} from "react-bootstrap";
import DeleteArticleForm from "./components/form/DeleteArticleForm";
import {useNavigate, useParams} from "react-router-dom";

function DeleteNewsArticle(): React$Element<any> {
  const params = useParams();

  const [error, setError] = useState();
  const [success, setSuccess] = useState();

  const navigate = useNavigate();

  const onDelete = (event) => {
    event.preventDefault();
    setError(null);

    fetch('http://localhost:8080/news-article/delete', {
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
