import axios from 'axios';

const Answer = {
  addAnswer: (id) => axios.post(`http://52.26.193.201:3000/qa/${id}/answers`)
  .then((data) => data)
  .catch((err) => { throw err; }),
};

export default Answer;
