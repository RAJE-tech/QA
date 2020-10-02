import axios from 'axios';

const getProductInfo = (id) => axios.get(`http://52.26.193.201:3000/products/${id}`)
  .then((data) => data)
  .catch((err) => { throw err; });

export default getProductInfo;
