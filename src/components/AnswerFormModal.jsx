import React from 'react';
import { Modal } from 'react-bootstrap';
import AnswerFormModInputs from './AnswerFormModInputs';

function AnswerFormModal({ show, onHide, question }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Submit your Answer</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {/* <p>{`${productName}: ${question.question_body}`}</p> */}
            <AnswerFormModInputs onHide={onHide} question={question} />
          </Modal.Body>
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div />;
}

export default AnswerFormModal;
