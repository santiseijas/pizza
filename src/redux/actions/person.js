import { actionTypes } from "./actionsTypes"

export const selectPersonType = person => {
   return {
      type: actionTypes.SELECT_PERSON,
      person
   }
}

export const logOut = (state = null) => {
   return {
      type: actionTypes.LOG_OUT,
      state
   }
}