import React, { Component, useState, useEffect } from "react";
import { createContext } from "react";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { addItemToCart } from "./../../redux/cart/cart.utils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
});

const CartProvider = ({ children, itemCount }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  const addItem = (item) => {
    console.log(cartItems);
    const qwe = addItemToCart(cartItems, item);
    setCartItems(qwe);
    console.log(qwe);
  };
  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount: itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(CartProvider);
