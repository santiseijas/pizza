import { actionTypes } from "../actions/actionsTypes";

export default (state = [], action) => {
   switch (action.type) {
      case actionTypes.ADD_FILM:
         return true;
      case actionTypes.LOG_OUT:
         return (state = []);
      default:
         return state;
   }
};
