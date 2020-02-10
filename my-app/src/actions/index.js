import axiosWithAuth from '../utils/axiosWithAuth';

// import { USER_LOGIN, ERROR } from './constants';

export const USER_LOGIN = 'USER_LOGIN';
export const USER_VALUES = 'USER_VALUES';
export const ERROR = 'ERROR';

export const getUser = (info, history) => dispatch => {
    const user = 
      axiosWithAuth
        .get(`login/${user.id}`, info);
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

export const getValues = (info, history) => dispatch => {
  const values =
    axiosWithAuth
      .get(`values/${values.id}`, info);
      values
      .then(res => {
        console.log(res);
        dispatch({
          type: USER_VALUES,
          payload: res.data
        })
        history.push('/account-dashboard');
      })
      .catch(err => {
        dispatch({
            type: ERROR,
            payload: err 
        });
    });
  };
