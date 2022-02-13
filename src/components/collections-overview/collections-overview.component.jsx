import React from "react";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import CollectionsPreview from "./../preview-collection.component/preview-collection.component";
import { createStructuredSelector } from "reselect";
import { getShopCollections } from "./../../redux/shop/shop.selector";
function CollectionsOverview({ collections }) {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...rest }) => {
        return <CollectionsPreview key={id} {...rest}></CollectionsPreview>;
      })}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  collections: getShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
