import { initialState } from "../../../App";

export default (state = [], action) => {
  console.log(state);
  switch (action.type) {
    case "SELECT_PERSON":
      if (action.person === "Married") {
        return { type: "Married" };
      } else {
        return { type: "Single" };
      }
    case "LOG_OUT":
      return state=undefined
    default:
      return state;
  }
};
