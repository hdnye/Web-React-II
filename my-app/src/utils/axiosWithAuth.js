import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseUrl: 'https://deploy-serv-node-essentialism.herokuapp.com/auth/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;