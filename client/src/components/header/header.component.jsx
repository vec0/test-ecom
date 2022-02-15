import React from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDrowpdown from "./../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "./../../redux/user/user.selector";
import { signOutStartParams } from "../../redux/user/user.actions";

const Header = (props) => {
  return (
    <div className="header">
      <Link to="/">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>

        {props.currentUser ? (
          <React.Fragment>
            <div
              className="option"
              onClick={() => props.dispatch(signOutStartParams())}
            >
              SIGN OUT
            </div>
          </React.Fragment>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {props.hidden ? null : <CartDrowpdown />}
    </div>
  );
};

//const mapStateToProps = (state) => {
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps, null)(Header);
