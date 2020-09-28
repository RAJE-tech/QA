import axios from 'axios';

// remember, this is an answers API (id = answer_id)

const markAnswerAsHelpful = (id) => axios.put(`http://52.26.193.201:3000/qa/${id}/helpful`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default markAnswerAsHelpful;
