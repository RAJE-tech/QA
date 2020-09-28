import axios from 'axios';

const markQuestionAsHelpful = (id) => axios.put(`http://52.26.193.201:3000/qa/${id}/helpful`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default markQuestionAsHelpful;
