import { createStore, combineReducers } from "redux";

export const SELECT_PERSONA = "SELECT_PERSONA";

const INITIAL_STATE = {
  current: [],
  possiblePerson: [
    'Single',
    'Married',
  ],
  cart:{}
};
export const reducer = (state = INITIAL_STATE, action) => {
  console.log(action)
  switch (action.type) {
     case 'Married':
      return {type:'Married'}
      case 'Single':
        return {type:'Single'}
        case 'ADD_TO_CART':    
        console.log('state',action)
        return { 
       
          cart:[action]
     }

    default:
      return state;
  }
};

export default reducer