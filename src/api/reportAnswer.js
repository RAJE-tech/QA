import axios from 'axios';

const reportAnswer = (id) => axios.put(`http://52.26.193.201:3000/qa/answer/${id}/report`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default reportAnswer;
