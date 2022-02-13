import CartActionTypes from "./cart.types";
import {
  addItemToCart,
  decreaceItemsInCart,
  increaceItemsInCart,
  removeItemFromCart,
} from "./cart.utils";
const INITIALK_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIALK_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CartActionTypes.ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    case CartActionTypes.INCREACE_ITEMS:
      return {
        ...state,
        cartItems: increaceItemsInCart(state.cartItems, action.payload),
      };
    case CartActionTypes.DECREACE_ITEMS:
      return {
        ...state,
        cartItems: decreaceItemsInCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
