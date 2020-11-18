import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuestionFormModal from './QuestionFormModal';

function AddQuestionBtn({ productId, productName, setQuestions }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col">
      <Button variant="outline-dark jgd-sharp-edge jgd-large-padded jgd-white-background" size="lg" onClick={handleShow}>
        <span className="jgd-small-bold">
          ADD A QUESTION
        </span>
        <span className="jgd-divider" />
        <span className="jgd-small-bold">
          +
        </span>
      </Button>
      {' '}
      <QuestionFormModal
        show={show}
        productId={productId}
        productName={productName}
        onHide={handleClose}
        setQuestions={setQuestions}
      />
    </div>
  );
}

export default AddQuestionBtn;
