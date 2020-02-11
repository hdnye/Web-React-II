import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseUrl: "https://essentialism-test-01.herokuapp.com/api/auth/",
    // baseUrl: 'https://regres.in/',
    headers: {
      Authorization: token
    }
  });
};

export default axiosWithAuth;