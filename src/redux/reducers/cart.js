import { actionTypes } from "../actions/actionsTypes";

const updateQuantity = p =>
  p.quantity ? { ...p, quantity: p.quantity + 1 } : { ...p, quantity: 2 };

export default (state = [], action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_TO_CART:
      // console.log(state);
      const productInCart = state.find(p => p.product.id === action.product.id);
      if (!productInCart) return [...state, {product:action.product,quantity:action.quantity,size: action.size}];
      return state.map(p => {
        console.log('p',p)
        console.log('action',action.product)
        if (p.product.id === action.product.id) {
          // console.log('entra3111');
          return updateQuantity(p);
        }
        return p;
      });
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      case actionTypes.ADD_FILM:
        return [...state,{film:true}]
    default:
      return state;
  }
};
