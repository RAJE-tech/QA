import React from 'react';
import { Modal } from 'react-bootstrap';

function AnswerImageModal({ image, show, onHide }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton />
        <img src={`${image.url}`} alt="alt" />
        <Modal.Footer />
      </Modal>
    );
  }
  return <div />;
}

export default AnswerImageModal;
