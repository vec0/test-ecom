import React, { useContext } from "react";
import { SessionContext } from "../../../app/app";
import { ReactComponent as ShoppingIcon } from "../../../assets/shopping-bag.svg";
import {
	selectCartItemsCount,
	selectCartTotal,
} from "../../../store/select/cart.selector";
import "./cart-icon.styles.scss";
//import { CartContext } from "../../providers/cart/cart.provider";
import { useSelector } from "react-redux";
import CustomButton from "../../ui-button/ui-button.component";
import { selectCartItems } from "./../../../store/select/cart.selector";
import CartItem from "../cart-item/cart-item.component";

import "bootstrap/dist/js/bootstrap.bundle.min";
import { Navigate, useNavigate } from "react-router-dom";

//	onClick={() => {} /*c.setCartDropdownHidden*/}
function CartIcon() {
	//const c = useContext(SessionContext);
	const cartTotalCount = useSelector(selectCartItemsCount);
	const cartTotalPrice = useSelector(selectCartTotal);
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	return (
		<React.Fragment>
			<div
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#cartModal"
				className="cart-icon"
			>
				<div className="shopping-icon"></div>
				<span className="item-count">{cartTotalCount}</span>
			</div>

			<div
				className="modal fade "
				id="cartModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true"
				style={{
					position: "fixed",
				}}
			>
				<div
					className="modal-dialog modal-lg modal-dialog-centered"
					role="document"
				>
					<div className="modal-content">
						<div className="modal-header border-bottom-0">
							<h5 className="modal-title" id="exampleModalLabel">
								Your Shopping Cart
							</h5>
							{/*	<CustomButton
								type="button"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</CustomButton>*/}

							<button
								type="button"
								className="btn"
								data-bs-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="cart-items">
								{cartItems && cartItems.length ? (
									cartItems.map((item) => {
										//	console.log(item);

										return <CartItem key={item.id} item={item} />;
									})
								) : (
									<span className="empty-message">Your cart is empty</span>
								)}
							</div>

							<div className="d-flex justify-content-end">
								<h5>
									Total:{" "}
									<span className="price text-success">${cartTotalPrice}</span>
								</h5>
							</div>
						</div>
						<div className="modal-footer border-top-0 d-flex justify-content-between">
							{/*<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-success">
								Checkout
				</button>*/}
							<CustomButton
								type="button"
								data-bs-dismiss="modal"
								onClick={() => {
									navigate("/checkout");
									/* navigate("/checkout");
									dispatch(actionsCreator.toggleCartHidden()); */
								}}
							>
								GO TO CHECKOUT
							</CustomButton>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
//c.cartItemsCount
/* const mapDispatchToProps = (d) => ({
  toggleCartHidden: () => d(toggleCartHidden()),
}); */

export default CartIcon;
