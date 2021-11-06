// @flow

import React, {useState} from "react";
import {Alert} from "react-bootstrap";
import ArticleForm from "./components/form/ArticleForm";
import {useNavigate} from "react-router-dom";
import {useBaseUrl} from "./hooks/base-url";

function CreateNewsArticle(): React$Element<any> {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const baseUrl = useBaseUrl();

  const saveChanges = (event: Event) => {
    setError(null);
    event.preventDefault();
    fetch(`${baseUrl}/news-article/create`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: JSON.stringify({
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

  return <>
    <h1>Neuen Artikel erstellen</h1>
    {success && <Alert variant={'success'}>Artikel erfolgreich erstellt.</Alert>}
    {error && <Alert variant={'danger'}>{error}</Alert>}
    <ArticleForm title={title} text={text} setText={setText} setTitle={setTitle} onSubmit={saveChanges}/>
  </>
}

export default CreateNewsArticle;
