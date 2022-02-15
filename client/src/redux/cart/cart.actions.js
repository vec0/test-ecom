import CartActionTypes from "./cart.types";

/* export const toggleCartHidden2 = {
  value: () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
  }),
  get f() {
    return this.value;
  },
};
console.log(toggleCartHidden2); */

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: CartActionTypes.REMOVE_ITEM,
  payload: item,
});

export const increaseItems = (item) => ({
  type: CartActionTypes.INCREACE_ITEMS,
  payload: item,
});

export const decreaseItems = (item) => ({
  type: CartActionTypes.DECREACE_ITEMS,
  payload: item,
});

export const clearCartPayload = (item) => ({
  type: CartActionTypes.CLEAR_CART,
});
