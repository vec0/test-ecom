import React, { Component } from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)}>ADD TO CART</CustomButton>
    </div>
  );
};

const mapDispatchToProps = (d) => ({
  addItem: (item) => d(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
