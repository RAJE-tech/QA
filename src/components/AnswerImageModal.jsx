import React from 'react';
import { Modal, Image } from 'react-bootstrap';

function AnswerImageModal({ image, show, onHide }) {
  if (show) {
    return (
      <Modal show={show} onHide={onHide} size="lg">
        <Modal.Header closeButton />
        <Image src={`${image.url}`} alt="alt" fluid />
        <Modal.Footer />
      </Modal>
    );
  }
  return <div />;
}

export default AnswerImageModal;
