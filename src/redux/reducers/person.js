
export default (state = [], action) => {
  switch (action.type) {
    case "SELECT_PERSON":
      if (action.person === "Married") {
        return { type: "Married" };
      } else {
        return { type: "Single" };
      }
    case "LOG_OUT":
      return state;
    default:
      return state;
  }
};
