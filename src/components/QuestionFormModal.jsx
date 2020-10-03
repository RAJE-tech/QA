import React from 'react';
import { Modal } from 'react-bootstrap';
import QuestionFormModInputs from './QuestionFormModInputs';

function QuestionFormModal({productId, productName, show, onHide, setQuestions}) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Ask Your Question</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>{`About the ${productName}`}</p>
            <QuestionFormModInputs
              onHide={onHide}
              setQuestions={setQuestions}
              productId={productId}
            />
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div />;
}

export default QuestionFormModal;
