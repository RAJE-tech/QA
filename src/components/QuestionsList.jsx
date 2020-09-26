import React, { useState, useEffect} from 'react';
import Question from './Question';
import getProductQuestions from '../api/getProductQuestions';

function QuestionsList() {
  return (
    <div>
      <Question />
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