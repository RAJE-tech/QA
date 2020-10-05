import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function MoreQuestionsBtn({ questions }) {
  return (
    <span>
      <Button variant="outline-dark jgd-sharp-edge jgd-large-padded" size="lg" onClick={null}>
        <span className="jgd-small-bold">
          MORE ANSWERED QUESTIONS
        </span>
      </Button>
      {' '}
    </span>
  );
}

export default MoreQuestionsBtn;
