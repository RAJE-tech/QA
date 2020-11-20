import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import AnswerImageModal from './AnswerImageModal';

function AnswerImages({ image }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span>
      <Image className="thumbnail" src={`${image.url}/171x180`} alt="alt" onClick={handleShow} fluid />
      <AnswerImageModal
        image={image}
        show={show}
        onHide={handleClose}
      />
    </span>
  );
}

export default AnswerImages;
