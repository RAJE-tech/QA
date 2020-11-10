import React from 'react';
import { Button } from 'react-bootstrap';

function MoreQuestionsBtn({ count, setCount, questions, searchActive }) {
  return (
    <span>
      <Button
        variant="outline-dark jgd-sharp-edge jgd-white-background jgd-large-padded"
        size="lg"
        onClick={() => setCount(count + 2)}
        disabled={count >= questions.length || searchActive}
      >
        <span className="jgd-small-bold">
          MORE ANSWERED QUESTIONS
        </span>
      </Button>
      {' '}
    </span>
  );
}

export default MoreQuestionsBtn;
