import React from "react";
import { actionsCreator } from "../../store/reducers/cart.reducer";
import "./checkout-item.styles.scss";
import { connect, useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../store/select/cart.selector";

function CheckoutItem({ cartItem }) {
	//useSelector(selectCartItems);
	const { name, imageUrl, price, quantity } = cartItem;
	const dispatch = useDispatch();
	const _remove = () => {
		dispatch(actionsCreator.removeItem(cartItem));
	};

	const _increase = () => {
		dispatch(actionsCreator.increaseItems(cartItem));
	};

	const _decrease = () => {
		dispatch(actionsCreator.decreaseItems(cartItem));
	};

	return (
		<article className="product">
			<header>
				<div
					className="img"
					style={{ backgroundImage: `url("${imageUrl}"` }}
					alt={name}
				/>
				<div className="remove" onClick={_remove}>
					<h3>Remove </h3>
				</div>
			</header>

			<div className="content">
				<h1>{name}</h1>
				<div
					className="img-bg"
					style={{ backgroundImage: `url("${imageUrl}"` }}
				></div>
				{/*Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta,
				numquam quis perspiciatis ea ad omnis provident laborum dolore in atque.*/}
				<div
					title="You have selected this product to be shipped in the color yellow."
					style={{ top: "0" }}
					className="color yellow"
				></div>
				{/*<div style={{ top: "43px" }} className="type small">
					XXL
				</div>*/}
			</div>

			<footer className="content">
				<span className="qt-minus" onClick={_decrease}>
					-
				</span>
				<span className="qt">{quantity}</span>
				<span className="qt-plus" onClick={_increase}>
					+
				</span>

				<h2 className="full-price">${price}</h2>

				<h2 className="price">-5%</h2>
			</footer>
		</article>
	);
}
/* const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
}); */

/* const mapDispatchToProps = (d) => ({
  removeItem: (item) => d(removeItem(item)),
}); */

export default connect(null)(CheckoutItem);

/*	return (
		<div className="checkout-item">
			<div className="image-container">
				<img src={imageUrl} alt="item" />
			</div>
			<span className="name">{name}</span>
			<span className="quantity">
				<span
					className="arrow"
					onClick={() => dispatch(actionsCreator.decreaseItems(cartItem))}
				>
					&#10096;
				</span>
				{quantity}
				<span
					className="arrow"
					onClick={() => dispatch(actionsCreator.increaseItems(cartItem))}
				>
					&#10095;
				</span>
			</span>
			<span className="price">{price}</span>
			<span
				className="remove-button"
				onClick={() => dispatch(actionsCreator.removeItem(cartItem))}
			>
				<span style={{ fontSize: "20px" }}>&#9932;</span>
			</span>
		</div>
	);*/
