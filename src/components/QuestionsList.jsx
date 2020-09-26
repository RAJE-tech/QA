import React, { useState, useEffect } from 'react';
import Question from './Question';
import getProductQuestions from '../api/getProductQuestions';

function QuestionsList() {
  const [productId, setProductId] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    getProductQuestions(productId)
      .then((res) => {
        // console.log(res.data.results);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  return (
    <div>
      {questions.map((question) => <Question question={question} key={question.question_id} />)}
      <p>Load More Answers</p>
    </div>
  );
}

export default QuestionsList;

// useEffect(() => {
//   getProductQuestionGet(userId)
//     .then((res) => {
//       // console.log('this is data: ', res);
//       console.log('this is results: ', res.data.results);
//       setProductQuestion(res.data.results[userId]);
//     })
//     .catch((err) => {
//       throw err;
//     });
// }, []);