import React from 'react';
import { Button } from 'react-bootstrap';

function MoreQuestionsBtn({
  count,
  setCount,
  questions,
  searchActive
}) {
  return (
    <div className="col auto">
      <Button
        variant="outline-dark jgd-less-top-space jgd-sharp-edge jgd-white-background jgd-small-bold jgd-large-padded"
        size="lg"
        onClick={() => setCount(count + 2)}
        disabled={count >= questions.length || searchActive}
      >
        MORE ANSWERED QUESTIONS
      </Button>
    </div>
  );
}

export default MoreQuestionsBtn;
