import axios from 'axios';

const Answer = {
  markAsHelpful: (id) => axios.put(`http://52.26.193.201:3000/qa/answer/${id}/helpful`)
    .then((data) => data)
    .catch((err) => { throw err; }),
  report: (id) => axios.put(`http://52.26.193.201:3000/qa/answer/${id}/report`)
    .then((data) => data)
    .catch((err) => { throw err; }),
};

export default Answer;
