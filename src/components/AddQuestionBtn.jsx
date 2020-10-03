import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function AddQuestionBtn() {
  return (
    <span>
      <Button variant="outline-dark jgd-sharp-edge jgd-large-padded" size="lg">
        <span className="jgd-small-bold">
          ADD A QUESTION
        </span>
        <span className="jgd-left-padded jgd-xlarge-text">
          +
        </span>
      </Button>
      {' '}
    </span>
  );
}

export default AddQuestionBtn;
