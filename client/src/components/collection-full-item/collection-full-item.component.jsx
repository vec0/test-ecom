import React, { Component, useContext } from "react";
import { connect, useDispatch } from "react-redux";
import { actionsCreator } from "../../store/reducers/cart.reducer";
import CustomButton from "../ui-button/ui-button.component";
import "./styles.scss";
//import { CartContext } from "../../providers/cart/cart.provider";
//Awesome Sunglasses Men's Collection
const CollectionFullItem = ({ title, item, children, onDivClick }) => {
	const { name, imageUrl, price } = item;
	const dispatch = useDispatch();
	//const { addItem, cartItems } = useContext(CartContext);
	return (
		<div
			className="item mb-4"
			style={{
				cursor: `${onDivClick ? "pointer" : "unset"}`,
			}}
			onClick={() => (onDivClick ?? (() => {}))()}
		>
			<div className="img-box">
				<img src={imageUrl} alt={name} />
			</div>
			<div className="details">
				{children ? (
					children
				) : (
					<React.Fragment>
						<h2>
							{name}
							<br />
							<span>{title}</span>
						</h2>
						<div className="price">${price}</div>
						<CustomButton
							onClick={() => dispatch(actionsCreator.addItem(item))}
						>
							ADD TO CART
						</CustomButton>
					</React.Fragment>
				)}
			</div>
		</div>
	);
	/*

		<label>Size</label>
				<ul>
					<li>55-14</li>
					<li>58-14</li>
					<li>62-14</li>
				</ul>
				<label>Color</label>
				<ul className="colors">
					<li></li>
					<li></li>
					<li></li>
				</ul>


	return (
		<div className="collection-item">
			<div className="cit-hid">
				<div
					className="image"
					style={{ backgroundImage: `url(${imageUrl})` }}
				/>
			</div>{" "}
			<div className=" collection-footer">
				<span className=" name">{name}</span>
				<span className=" price">${price}</span>
			</div>
			<CustomButton onClick={() => actionsCreator.addItem(item)}>
				ADD TO CART
			</CustomButton>
		</div>
	);*/
};
/* 
const mapDispatchToProps = (d) => ({
  addItem: (item) => d(addItem(item)),
});
 */
export default connect(null, null)(CollectionFullItem);
