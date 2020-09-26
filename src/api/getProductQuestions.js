import axios from 'axios';

const getProductQuestions = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductQuestions;
