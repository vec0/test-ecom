import React, { Component } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getShop,
  getShopCollections,
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "../../redux/shop/shop.selector";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { withRouter } from "./../../utils/utils";

import {
  fetchCollectionsStartAsync,
  updateCollections,
} from "../../redux/shop/shop.actions";
import WithSpinner from "./../../components/with-spinner/with-spinner.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import ShopActionTypes from "./../../redux/shop/shop.types";

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    //this.props.fetchCollectionsStartAsync();
    this.props.dispatch({ type: ShopActionTypes.FETCH_COLLECTION_START });
  }

  render() {
    // const path = this.props.router.location.pathname;
    // const { params: match } = this.props.router;
    // console.log(this.props.router);\
    return (
      <div className="shop-page">
        <CollectionsOverviewContainer />
      </div>
    );
  }
}
/* 
export const ShopPageRoutes = () => (
  <Route path=":categoryId" element={<CategoryPage />} />
); */

const mapStateToProps = createStructuredSelector({
  //collections: getShopCollections,
  //shop: getShop,
});

const mapDispatchToProps = (d) => ({
  //updateCollections: (c) => d(updateCollections(c)),
  fetchCollectionsStartAsync: () => d(fetchCollectionsStartAsync()),
});

export default withRouter(connect(mapStateToProps, null)(ShopPage));
