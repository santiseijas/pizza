import { actionTypes } from "./actionsTypes";

export const addProductToCart = (product,quantity,size) => {
  return {
    type: actionTypes.ADD_PRODUCT_TO_CART,
    product,
    quantity,
    size
  };
};

export const removeProductFromCart = index => {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    index
  };
};

export const addFilmToCart = data => {
  return {
    type: actionTypes.ADD_FILM,
    data
  };
};