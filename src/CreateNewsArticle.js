// @flow

import React, {useState} from "react";
import {Alert} from "react-bootstrap";
import ArticleForm from "./components/form/ArticleForm";
import {useNavigate} from "react-router-dom";

function CreateNewsArticle(): React$Element<any> {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const navigate = useNavigate();

  const saveChanges = (event: Event) => {
    setError(null);
    event.preventDefault();
    fetch('http://localhost:8080/news-article/create', {
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
        console.log(response);
        if (!success) {
          console.error(response.error)
          setError(response.error || 'Es ist ein Fehler aufgetreten');
          return;
        }
        
        console.log(response);

        setTimeout(() => navigate('/'), 1000);
      })
      .catch((error) => {
        console.error(error)
        setError(error.message)
      })
  }

  return <>
    {success && <Alert variant={'success'}>Artikel erfolgreich erstellt.</Alert>}
    {error && <Alert variant={'danger'}>{error}</Alert>}
    <ArticleForm title={title} text={text} setText={setText} setTitle={setTitle} onSubmit={saveChanges}/>
  </>
}

export default CreateNewsArticle;
