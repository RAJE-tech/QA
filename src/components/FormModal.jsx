import React from 'react';
import { Modal } from 'react-bootstrap';
import FormModInputs from './FormModInputs';

function FormModal({ show, onHide, question }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Submit your Answer</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormModInputs onHide={onHide} question={question} />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div />;
}

export default FormModal;
