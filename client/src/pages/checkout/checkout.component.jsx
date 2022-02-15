import React from "react";
import { createStructuredSelector } from "reselect";
import { withRouter } from "../../utils/utils";
import {
  selectCartItems,
  selectCartTotal,
} from "./../../redux/cart/cart.selectors";
import { connect } from "react-redux";

import "./checkout.styles.scss";
import CheckoutItem from "./../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

const CheckOutPage = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {!cartItems
        ? null
        : cartItems.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}

      <div className="total" style={{ marginBottom: "20px" }}>
        <span>TOTAL: ${total}</span>
      </div>

      <StripeCheckoutButton />

      <div
        style={{
          color: "red",
          fontSize: "22px",
          margin: "auto 0",
          textAlign: "center",
          width: "200%",
        }}
      >
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/24 - CW: 123
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOutPage);
