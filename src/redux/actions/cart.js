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
