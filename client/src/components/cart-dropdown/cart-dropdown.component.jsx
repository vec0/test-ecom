import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

import { selectCartItems } from "./../../redux/cart/cart.selectors";
import { withRouter } from "../../utils/utils";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";
import { useNavigate } from "react-router-dom";
//{ cartItems, router: { navigate }, dispatch }
function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems && cartItems.length ? (
          cartItems.map((item) => {
            console.log(item);

            return <CartItem key={item.id} item={item} />;
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          navigate("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
}

/* const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
}); */

export default Cart;
