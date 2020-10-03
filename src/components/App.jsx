import React, { useState } from 'react';
import QuestionsList from './QuestionsList';
import AddQuestionBtn from './AddQuestionBtn';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h5>QUESTIONS & ANSWERS</h5>
        </div>
      </div>
      <div className="row">
        <div className="col">
          *Search Will Go Here*
        </div>
      </div>
      <div className="row">
        <div className="col">
          <QuestionsList />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <AddQuestionBtn />
        </div>
      </div>
    </div>
  );
}

export default App;
