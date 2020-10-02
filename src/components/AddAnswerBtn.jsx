import React, { useState } from 'react';
import AnswerFormModal from './AnswerFormModal';

function AddAnswerBtn({ question, productName, setAnswers }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <span>
      <span className="jgd-small-text jgd-pointer jgd-faded" onClick={handleShow} onKeyDown={null}><u>Add Answer</u></span>
      <AnswerFormModal
        show={show}
        question={question}
        productName={productName}
        onHide={handleClose}
        setAnswers={setAnswers}
      />
    </span>
  );
}

export default AddAnswerBtn;
