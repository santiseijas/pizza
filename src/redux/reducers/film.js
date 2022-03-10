import { actionTypes } from "../actions/actionsTypes";

export default (state = [], action) => {
   console.log(state);
   switch (action.type) {
      case actionTypes.ADD_FILM:
        return true
     default:
       return state;
   }
}