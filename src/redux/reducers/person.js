export default (state = [], action) => {
   switch (action.person) {
      case "Married":
         return { type: "Married" };
      case "Single":
         return { type: "Single" };
      default:
         return state;
   }
};
