import { actionTypes } from "../actions/actionsTypes";

const updateQuantity = (p) =>
  p.quantity ? { ...p, quantity: p.quantity + 1 } : { ...p, quantity: 2 };

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      const productInCart = state.find(
        (p) => p.product?.id === action.product.id
      );
      if (!productInCart)
        return [
          ...state,
          {
            product: action.product,
            quantity: action.quantity,
            size: action.size,
          },
        ];
      return state.map((p) => {
        if (p?.product?.id === action?.product?.id) {
          if (p.product.size === action.product.size) {
            return [
              ...state,
              {
                product: action.product,
                quantity: action.quantity,
                size: action.size,
              },
            ];
          } else {
            return updateQuantity(p);
          }
        }
        return p;
      });
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      if (state.length > 1) {
        return state.filter((element) => element !== action.product);
      } else {
        return (state = []);
      }

    case actionTypes.LOG_OUT:
      return (state = []);

    default:
      return state;
  }
};
