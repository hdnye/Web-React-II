import {
    USER_LOGIN,
    USER_VALUES,
    ERROR
  } from '../actions/index';
  
  const initialState = {
    user: {}, 
    values: {},
    projects: []
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch(action.type) {
      case USER_LOGIN: 
       return {
        ...state,
        error: null, 
        isFetching: false,
        currentUser: action.payload
      }
     
    case USER_VALUES: 
      return {
        ...state,
        error: null,
        isFetching: false,
        currentUser: action.payload
      }
      default: 
      return state;
  }
}
    
  //   switch (action.type) {
  //     case USER_GET_START:
  //       return {
  //         ...state,
  //         isLoading: true
  //       };
  //     case USER_GET_SUCCESS:
  //       return {
  //         ...state,
         
  //         user: action.payload,
  //         isLoading: false
  //       };
  //     case USER_GET_FAILURE:
  //       return {
  //         ...state,
  //         error: action.payload,
  //         isLoading: false
  //       };
  //     case USER_POST_START:
  //       return {
  //         ...state,
  //         isLoading: true
  //       };
  //     case USER_POST_SUCCESS:
  //       console.log(`USER_POST_SUCCESS: action.payload: `, action.payload);
  //       return {
  //         user: action.payload,
  //         isLoading: false
  //       };
  //     case USER_POST_FAILURE:
  //       return {
  //         ...state,
  //         error: action.payload,
  //         isLoading: false
  //       };
  //     case USER_PUT_START:
  //       return {
  //         ...state,
  //         isLoading: true
  //       };
  //     case USER_PUT_SUCCESS:
  //       return {
  //         ...state,
        
  //         user: action.payload[0]
  //       };
  //     case USER_PUT_FAILURE:
  //       return {
  //         ...state,
  //         error: action.payload,
  //         isLoading: false
  //       };
  //     case USER_DELETE_START:
  //       return {
  //         ...state,
  //         isLoading: true
  //       };
  //     case USER_DELETE_SUCCESS:
  //       return {
  //         ...state,
         
  //         user: {},
  //         isLoading: false
  //       };
  //     case USER_DELETE_FAILURE:
  //       return {
  //         ...state,
  //         error: action.payload,
  //         isLoading: false
  //       };
  //     default:
  //       return state;
  //   }
  // };
