import { combineReducers } from "redux";
import person from './person'
import cart from "./cart";


export default combineReducers({
  person: person,
  cart: cart
});
