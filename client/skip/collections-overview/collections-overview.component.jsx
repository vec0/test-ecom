import React, { useReducer } from "react";
import "./collections-overview.styles.scss";
import { connect } from "react-redux";
import CollectionsPreview from "./../preview-collection.component/preview-collection.component";
import { createStructuredSelector } from "reselect";
import { selectShopCollections } from "../../store/select/shop.selector";

/* const INITIAL_STATE = {};
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    default:
      return state;
  }
};

const setUser = (user) => ({
  type: "SET_USER",
  payload: user,
});

const setSearchQuery = (queryString) => ({
  type: "SET_SEARCH_QUERY",
  payload: queryString,
}); */

function CollectionsOverview(props) {
	const { collections } = props;

	/*  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { user, searchQuery } = state;
  dispatch(setUser(user));
  dispatch(setSearchQuery(searchQuery)); */

	/*  console.log("ASD");
  console.log(props);
  console.log(Object.values(collections)); */
	/*  console.log(
    Object.entries(collections)
      .values()
      .map((v) => v.values)
  ); */
	return (
	
	);
}

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
