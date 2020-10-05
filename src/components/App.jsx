import React, { useState, useEffect } from 'react';
import QuestionsList from './QuestionsList';
import AddQuestionBtn from './AddQuestionBtn';
import MoreQuestionsBtn from './MoreQuestionsBtn';
import Search from './Search';
import getProductQuestions from '../api/getProductQuestions';
import getProductInfo from '../api/getProductInfo';

function App() {
  const [productId, setProductId] = useState(3000);
  const [productName, setProductName] = useState('');
  const [questions, setQuestions] = useState([]);
  const [shownQuestions, setShownQuestions] = useState([]);
  const [count, setCount] = useState(2);

  useEffect(() => {
    getProductQuestions(productId)
      .then((res) => {
        console.log('result data from Greenfield:', res.data.results);
        setQuestions(res.data.results);
        setShownQuestions(res.data.results.slice(0, count));
      })
      .catch((err) => {
        throw err;
      });
  }, [productId, count]);

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
      <div className="row jgd-top-space">
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
            shownQuestions={shownQuestions}
          />
        </div>
      </div>
      <div className="row jgd-bottom-space no-gutters">
        <MoreQuestionsBtn
          count={count}
          questions={questions}
          setCount={setCount}
        />
        <span className="jgd-divider" />
        <AddQuestionBtn
          productId={productId}
          productName={productName}
          setQuestions={setQuestions}
        />
      </div>
    </div>
  );
}

export default App;
