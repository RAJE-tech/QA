import React, { useState, useEffect } from 'react';
import Question from './Question';

function QuestionsList({ questions, productName }) {
  return (
    <div>
      {questions.map((question) =>
        <Question question={question} key={question.question_id} productName={productName} />)}
    </div>
  );
}

export default QuestionsList;
