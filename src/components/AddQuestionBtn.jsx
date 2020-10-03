import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuestionFormModal from './QuestionFormModal';

function AddQuestionBtn() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span>
      <Button variant="outline-dark jgd-sharp-edge jgd-large-padded" size="lg">
        <span className="jgd-small-bold">
          ADD A QUESTION
        </span>
        <span className="jgd-left-padded jgd-xlarge-text">
          +
        </span>
      </Button>
      {' '}
      <QuestionFormModal />
    </span>
  );
}

export default AddQuestionBtn;
