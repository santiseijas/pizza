import { createStore, combineReducers } from "redux";

export const SELECT_PERSONA = "SELECT_PERSONA";

const INITIAL_STATE = {
  current: [],
  possible: [
    'Single',
    'Married',
  ],
};
export const personaReducer = (state = {type: ''}, action) => {
  switch (action.type) {
  
     case 'Married':
      return {type:'Married'}
      case 'Single':
        return {type:'Single'}
    default:
      return state;
  }
};

export default personaReducer