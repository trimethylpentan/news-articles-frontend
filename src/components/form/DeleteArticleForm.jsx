// @flow

import React from "react";
import {Button, Col, Container, Row} from "react-bootstrap";

type Props = {
  articleId: number,
  onDelete: Function,
  onCancel: Function,
}

function DeleteArticleForm(props: Props): React$Element<any> {
  const {articleId, onDelete, onCancel} = props;

  return <Container>
    <p>Möchten Sie den Artikel mit der ID <code>{articleId}</code> wirklich löschen?</p>
    <Row>
      <Col>
        <Button variant={'secondary'} onClick={onCancel}>Abbrechen</Button>
      </Col>
      <Col>
        <Button variant={'danger'} onClick={onDelete}>Löschen</Button>
      </Col>
    </Row>
  </Container>
}

export default DeleteArticleForm;
