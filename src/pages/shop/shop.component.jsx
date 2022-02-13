import React, { Component } from "react";
import CollectionPreview from "../../components/preview-collection.component/preview-collection.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getShopCollections } from "../../redux/shop/shop.selector";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { Route, Routes } from "react-router-dom";
import { withRouter } from "./../../utils/utils";
import CategoryPage from "../collection/collection.component";

class ShopPage extends Component {
  render() {
    const path = this.props.router.location.pathname;
    return (
      <div className="shop-page">
        <CollectionsOverview />
      </div>
    );
  }
}
/* 
export const ShopPageRoutes = () => (
  <Route path=":categoryId" element={<CategoryPage />} />
); */

export const ShopPageRoutes = (path) => ({
  path: path + ":collectionId",
  element: <CategoryPage />,
});

const mapStateToProps = createStructuredSelector({
  collections: getShopCollections,
});

export default withRouter(connect(mapStateToProps)(ShopPage));
