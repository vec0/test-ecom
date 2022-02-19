/* export const addItemToCart = (cartItems, itemToAdd) => {
  let existiongCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  //Array.from(sheeps);
  // console.log(itemToAdd);
  let res = [...cartItems];
  if (!existiongCartItem) res.push((existiongCartItem = itemToAdd));
  existiongCartItem["quantity"] = (existiongCartItem["quantity"] ?? 0) + 1;
  return res;

  // resturn [ ...cartItems, { ...itemToAdd, quantity: 1 } ]
};

export const removeItemFromCart = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};

export const increaceItemsInCart = (cartItems, itemToRemove) => {
  cartItems = [...cartItems];
  let idx = cartItems.findIndex((cartItem) => cartItem.id === itemToRemove.id);
  if (idx === -1) return cartItems;
  cartItems[idx] = { ...cartItems[idx] };
  cartItems[idx].quantity++;
  return cartItems;
};

export const decreaceItemsInCart = (cartItems, itemToRemove) => {
  cartItems = [...cartItems];
  let idx = cartItems.findIndex((cartItem) => cartItem.id === itemToRemove.id);
  if (idx === -1) return cartItems;
  cartItems[idx] = { ...cartItems[idx] };
  cartItems[idx].quantity--;
  if (cartItems[idx].quantity < 1)
    cartItems = removeItemFromCart(cartItems, cartItems[idx]);
  return cartItems;
};
 */
