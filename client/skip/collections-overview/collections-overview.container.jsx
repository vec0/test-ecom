import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import {
	selectIsCollectionFetching,
	selectIsCollectionLoaded,
} from "../../store/select/shop.selector";
import WithSpinner from "../../container-layouts/with-spinner/with-spinner.component";
import CollectionsOverview from "./collections-overview.component";

const mapStateToProps = createStructuredSelector({
	isCollectionFetching: selectIsCollectionFetching,
	selectIsCollectionLoaded: selectIsCollectionLoaded,
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
