import React, { Component, useState, useEffect } from "react";
import { createContext } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

export const RootContext = createContext({
	/*   hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0, */
});

const RootProvider = ({ children, itemCount }) => {
	/*  const [hidden, setHidden] = useState(true);
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
 */
	return <RootContext.Provider>{children}</RootContext.Provider>;
};

const mapStateToProps = createStructuredSelector({
	// itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(RootContext);
/*   value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        cartItemsCount: itemCount,
      }}*/
