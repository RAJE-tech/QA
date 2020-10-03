import React, { useState, useEffect } from 'react';
import QuestionsList from './QuestionsList';
import AddQuestionBtn from './AddQuestionBtn';
import Search from './Search';
import getProductQuestions from '../api/getProductQuestions';
import getProductInfo from '../api/getProductInfo';

function App() {
  const [productId, setProductId] = useState(3);
  const [questions, setQuestions] = useState([]);
  const [productName, setProductName] = useState('');

  useEffect(() => {
    getProductQuestions(productId)
      .then((res) => {
        console.log('result data from Greenfield:', res.data.results);
        setQuestions(res.data.results);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  useEffect(() => {
    getProductInfo(productId)
      .then((res) => {
        console.log('this is the product name: ', res.data.name);
        setProductName(res.data.name);
      })
      .catch((err) => {
        throw err;
      });
  }, [productId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>QUESTIONS & ANSWERS</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Search
            questions={questions}
            setQuestions={setQuestions}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <QuestionsList
            productName={productName}
            questions={questions}
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AddQuestionBtn
            productId={productId}
            productName={productName}
            setQuestions={setQuestions}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
