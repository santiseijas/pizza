import { actionTypes } from "./actionsTypes"

export const selectPersonType = person => {
   return {
      type: actionTypes.SELECT_PERSON,
      person
   }
}