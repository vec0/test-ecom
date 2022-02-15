import React, { useEffect, useReducer } from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { connect, useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  getShop,
  getShopCollections,
  getSingleCollection,
  getSingleCollection_WITH_PARAMS,
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from "./../../redux/shop/shop.selector";
import { withRouter } from "../../utils/utils";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import ShopActionTypes from "../../redux/shop/shop.types";
import shopReducer, { INITIAL_STATES } from "./../../redux/shop/shop.reducer";
/*
function _CategoryPage(props) {
  console.log("ASD");
  console.log(props);
  return <CategoryPageWithSpinner isLoading={props.shop.loading} {...props} />;
}

const mapStateToProps = (state, ownProps) => ({
  collection: getSingleCollection(ownProps.router.params.collectionId)(state),
  shop: getShop(state),
});
const CategoryPage = withRouter(connect(mapStateToProps)(_CategoryPage));
 */
function CategoryPageChild(props) {
  /*  console.log(props);
  const collections = useSelector(getShopCollections);
  console.log(collections);
  const { title, items } = props.collection; */
  const collectionId = useParams().collectionId;
  //console.log(collectionId);
  const qwe = useSelector(getShopCollections);
  console.log(qwe);
  // const sc = useSelector((state) => getSingleCollection(state, collectionId));
  const sc = useSelector(getSingleCollection_WITH_PARAMS(collectionId));
  console.log(sc);
  const { title, items } = sc;

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

const CategoryPage = () => {
  const params = useParams();
  const dispatch = useDispatch();
  // const [state, dispatch] = useReducer(shopReducer, INITIAL_STATES);
  const collections = useSelector(getShopCollections);
  // console.log(collections);
  //const collections = dispatch(getShopCollections);
  //const collection = dispatch(getSingleCollection(params.collectionId));
  //const isLoading = dispatch(selectIsCollectionLoaded()) && !dispatch(selectIsCollectionFetching());
  //const { title, items } = collection;

  useEffect(() => {
    //  console.log("ASD");
    dispatch({ type: ShopActionTypes.FETCH_COLLECTION_START });
  }, []);

  return <CategoryPageWithSpinner />;
  /*  return (
    <div className="category collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((i) => (
          <CollectionItem key={i.id} item={i} />
        ))}
      </div>
    </div>
  ); */
};

const mapStateToPropsSpinner = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  selectIsCollectionLoaded: selectIsCollectionLoaded,
});

const CategoryPageWithSpinner = compose(
  connect(mapStateToPropsSpinner),
  WithSpinner
)(CategoryPageChild);

//const CategoryPageWithSpinner = WithSpinner(CategoryPage);

export const ShopPageRoutes = (path) => ({
  path: path + ":collectionId",
  element: <CategoryPage />,
});
/* const mapStateToProps = createStructuredSelector({
  collection: getSingleCollection(0),
}); */

//export default withRouter(connect(mapStateToProps)(CategoryPage));
