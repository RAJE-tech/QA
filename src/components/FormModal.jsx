import React from 'react';
import { Modal } from 'react-bootstrap';
import FormModInputs from './FormModInputs';

function FormModal({ show, onHide }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide}>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Product QA</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FormModInputs onHide={onHide} />
          </Modal.Body>
          <Modal.Footer />
        </Modal.Dialog>
      </Modal>
    );
  }
  return <div />;
}

export default FormModal;
