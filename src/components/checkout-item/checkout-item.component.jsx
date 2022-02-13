import React from "react";
import {
  decreaseItems,
  increaseItems,
  removeItem,
} from "../../redux/cart/cart.actions";
import "./checkout-item.styles.scss";
import { connect } from "react-redux";
import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
function CheckoutItem({ cartItem, dispatch }) {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <span
          className="arrow"
          onClick={() => dispatch(decreaseItems(cartItem))}
        >
          &#10096;
        </span>
        {quantity}
        <span
          className="arrow"
          onClick={() => dispatch(increaseItems(cartItem))}
        >
          &#10095;
        </span>
      </span>
      <span className="price">{price}</span>
      <span
        className="remove-button"
        onClick={() => dispatch(removeItem(cartItem))}
      >
        <span style={{ fontSize: "20px" }}>&#9932;</span>
      </span>
    </div>
  );
}
/* const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
}); */

/* const mapDispatchToProps = (d) => ({
  removeItem: (item) => d(removeItem(item)),
}); */

export default connect(null)(CheckoutItem);
