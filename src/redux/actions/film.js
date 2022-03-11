import { actionTypes } from "./actionsTypes";

export const addFilmToCart = data => {
  return {
    type: actionTypes.ADD_FILM,
    data
  };
};