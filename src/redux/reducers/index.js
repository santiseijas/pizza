import { combineReducers } from "redux";
import person from './person'
import cart from "./cart";
import film from "./film";


export default combineReducers({
  person,
  cart,
  film
});
