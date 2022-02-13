import { createSelector } from "reselect";

const selectCart = (state) => {
  return state.cart;
};

const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    const qwe = cartItems.reduce((res, o) => res + o.quantity, 0);
    return qwe;
  }
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
  items.reduce((res, o) => res + o.quantity * o.price, 0)
);
