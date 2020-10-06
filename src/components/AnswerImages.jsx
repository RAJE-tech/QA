import React, { useState } from 'react';
import { Image } from 'react-bootstrap';
import AnswerImageModal from './AnswerImageModal';

function AnswerImages({ image }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="col-2">
      <Image className="thumbnail" src={`${image.url}/171x180`} alt="alt" onClick={handleShow} />
      <AnswerImageModal
        image={image}
        show={show}
        onHide={handleClose}
      />
    </div>
  );
}

export default AnswerImages;
