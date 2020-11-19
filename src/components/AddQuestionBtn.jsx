import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import QuestionFormModal from './QuestionFormModal';

function AddQuestionBtn({ productId, productName, setQuestions }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col">
      <Button
        variant="outline-dark jgd-less-top-space jgd-sharp-edge jgd-large-padded jgd-white-background jgd-small-bold"
        size="lg"
        onClick={handleShow}
      >
        ADD A QUESTION
        <span className="jgd-divider" />
        +
      </Button>
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
