// @flow

import React from "react";
import {Button, Form} from "react-bootstrap";

type Props = {
  title: string,
  text: string,
  setText: Function,
  setTitle: Function,
  onSubmit: Function,
}

function ArticleForm(props: Props): React$Element<any> {
  return <Form>
    <Form.Group className={'mb-3'}>
      <Form.Label>Titel</Form.Label>
      <Form.Control type={'text'} placeholder={'Titel des Artikels'} value={props.title} onChange={(event) => props.setTitle(event.target.value)}/>
    </Form.Group>
    <Form.Group className={'mb-3'}>
      <Form.Label>Text</Form.Label>
      <Form.Control as={'textarea'} rows={10} placeholder={'Der Text des Artikels...'} value={props.text} onChange={(event) => props.setText(event.target.value)}/>
    </Form.Group>
    <Button variant={'primary'} type={'submit'} onClick={props.onSubmit}>
      Artikel speichern
    </Button>
  </Form>
}

export default ArticleForm;
