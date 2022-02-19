import "./styles.scss";
import CollectionItem from "../../components/collection-full-item/collection-full-item.component";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLayoutEffect } from "react";
import { actionsCreator } from "./../../store/reducers/shop.reducer";
import SpinnerContainer from "../../components/spinner/with-spinner-no-redux.components";
import {
	selectErrorMessage,
	selectShopCollections,
} from "../../store/select/shop.selector";
import ErrorContiner from "../../components/error-boundary-container/error.container";
import { useEffect } from "react";

export const ShopPageRoutes = (path) => ({
	path: path + ":collectionId",
	element: <ShopSingleCollectionPage />,
});

const ShopSingleCollectionPage = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const definedCollection = useSelector(selectShopCollections);
	const cId = params.collectionId.toLocaleLowerCase();

	const isFetching = definedCollection[cId] === undefined;
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		if (isFetching)
			dispatch(
				actionsCreator.fetchSingleCollectionStart(definedCollection, cId)
			);
	}, []);

	const errorMessage = useSelector(selectErrorMessage);
	if (errorMessage) {
		return <ErrorContiner>{errorMessage}</ErrorContiner>;
	}

	if (isFetching) {
		return <SpinnerContainer> Fetching Data... </SpinnerContainer>;
	}

	const sc = definedCollection[cId];
	const { title, items } = sc;

	return (
		<div className="category collection-page">
			<h2 className="title">Collection</h2>

			<div className="title-banner">
				<div className="row">
					<div className="col cont">
						<header className="row">
							<h2>{title}</h2>
						</header>
						<div id="fashion" className="row">
							<h1>
								We take inspiration from the World's best cuiisines, and craet a
								uniqu fusion experieice. Our lipsmacking craeate will tickec
								will create
							</h1>
						</div>
					</div>
					<div
						className="img"
						style={{
							backgroundImage: `url(${items[0].imageUrl})`,
						}}
					></div>
				</div>
			</div>

			<div className="items">
				{items.map((i) => (
					<CollectionItem key={i.id} title={title} item={i} />
				))}
			</div>
		</div>
	);
};

export default ShopSingleCollectionPage;
