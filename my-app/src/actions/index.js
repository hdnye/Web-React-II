import React from 'react';
import axios from 'axios';

import { USER_LOGIN, ERROR } from './constants';

export const getUser = (payload, dispatch) => {
    const user = 
      axios
        .get('http//localhost:3000/login');
        user
        .then(res => {
          dispatch({
            type: USER_LOGIN,
            payload: res.data
         });
      })  
      .catch(err => {
          dispatch({
              type: ERROR,
              payload: err 
          });
      });
    };
