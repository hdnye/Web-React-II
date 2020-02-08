import React from 'react';
import axios from 'axios';

// import { USER_LOGIN, ERROR } from './constants';

export const USER_LOGIN = 'USER_LOGIN';
export const ERROR = 'ERROR';

export const getUser = (info, history) => dispatch => {
    const user = 
      axios
        .get('http//localhost:3000/login', info);
        user
        .then(res => {
          localStorage.setItem('token', res.data.payload);
          localStorage.setItem('id', res.data.id);
          dispatch({
            type: USER_LOGIN,
            payload: res.data
         });
         history.push('/account-dashboard');
      })  
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: err 
          });
      });
    };
