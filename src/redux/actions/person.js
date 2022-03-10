import { actionTypes } from "./actionsTypes"
import intialState from '../../../App'

export const selectPersonType = person => {
   return {
      type: actionTypes.SELECT_PERSON,
      person
   }
}

export const logOut = () => {
   return {
      type: actionTypes.LOG_OUT,
      intialState
   }
}