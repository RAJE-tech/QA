import axios from 'axios';

const req = {
  count: 200,
};

const getProductQuestions = (id) => axios.get(`http://52.26.193.201:3000/qa/${id}?count=50`, req)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductQuestions;
