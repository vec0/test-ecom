import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getSingleCollection } from "./../../redux/shop/shop.selector";
import { withRouter } from "../../utils/utils";

function CategoryPage(props) {
  const { title, items } = props.collection;
  return (
    <div className="category collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  );
}

/* const mapStateToProps = createStructuredSelector({
  collection: getSingleCollection(0),
}); */
const mapStateToProps = (state, ownProps) => ({
  collection: getSingleCollection(ownProps.router.params.collectionId)(state),
});

export default withRouter(connect(mapStateToProps)(CategoryPage));
