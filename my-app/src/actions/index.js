import axiosWithAuth from '../utils/axiosWithAuth';

// import { USER_LOGIN, ERROR } from './constants';

export const GETTING_USER = 'GETTING_USER';
export const USER_LOGIN = 'USER_LOGIN';
export const USER_VALUES = 'USER_VALUES';
export const ADD_VALUE = 'ADD_VALUE';
export const ERROR = 'ERROR';

export const getUser = (info, history) => dispatch => {
     axiosWithAuth()
      .get(`login/`, info)
      .then(res => {
        localStorage.setItem('token', res.info.payload);
        localStorage.setItem('id', res.info.id);
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
    axiosWithAuth()
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

  export const addValues = (info, history) => dispatch => {
    const newValue = 
      axiosWithAuth() 
        .put(`values/${newValue.id}`, info);
      newValue  
        .then(res => {
          console.log(res);
          dispatch({
            typs: ADD_VALUE,
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