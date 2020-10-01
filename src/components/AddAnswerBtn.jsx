import React, { useState } from 'react';
import AnswerFormModal from './AnswerFormModal';

function AddAnswerBtn({ question }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span>
      <span className="jgd-small-text jgd-pointer jgd-faded" onClick={handleShow} onKeyDown={null}><u>Add Answer</u></span>
      <AnswerFormModal show={show} question={question} onHide={handleClose} />
    </span>
  );
}

export default AddAnswerBtn;
