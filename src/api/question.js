import axios from 'axios';

const Question = {
  addAnswer: (id) => axios.post(`http://52.26.193.201:3000/qa/${id}/answers`)
    .then((data) => data)
    .catch((err) => { throw err; }),
  getAnswers: (id) => axios.get(`http://52.26.193.201:3000/qa/${id}/answers?count=50`)
    .then((data) => data)
    .catch((err) => { throw err; }),
  markAsHelpful: (id) => axios.put(`http://52.26.193.201:3000/qa/question/${id}/helpful`)
    .then((data) => data)
    .catch((err) => { throw err; }),
  report: (id) => axios.put(`http://52.26.193.201:3000/qa/question/${id}/report`)
    .then((data) => data)
    .catch((err) => { throw err; }),
};

export default Question;
