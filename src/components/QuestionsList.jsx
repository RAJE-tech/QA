import React, { useState, useEffect } from 'react';
import Question from './Question';

function QuestionsList({ shownQuestions, productName }) {
  return (
    <div>
      {shownQuestions.map((question) =>
        <Question question={question} key={question.question_id} productName={productName} />)}
    </div>
  );
}

export default QuestionsList;
