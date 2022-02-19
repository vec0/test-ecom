import React, { Component, useLayoutEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
//import { CollectionsOverviewGql } from "../collection/collection.gql";
import "./styles.scss";

import { selectShopPreviewCollections } from "../../store/select/shop.selector";
import SpinnerContainer from "../../components/spinner/with-spinner-no-redux.components";
import { actionsCreator } from "../../store/reducers/shop.reducer";
import { put } from "redux-saga/effects";
import CollectionFullItem from "../../components/collection-full-item/collection-full-item.component";
import { useNavigate } from "react-router-dom";
/* function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
} */
const ShopPage = () => {
	const previewCollection = useSelector(selectShopPreviewCollections);
	const dispatch = useDispatch();
	useLayoutEffect(() => {
		window.scrollTo(0, 0);
		dispatch(
			actionsCreator.fetchPreviewCollectionsStart(previewCollection, -1)
		);
	}, []);
	const navigate = useNavigate();
	//const isFetching = useSelector(selectIsCollectionFetching);
	/* const itemsCountForPreview = getWindowDimensions().width > 800 ? 3 : 2;
	console.log(itemsCountForPreview); */
	const itemsCountForPreview = 3;
	return (
		<div className="shop-page">
			<div className="collections-overview">
				{Object.keys(previewCollection).length === 0 ? (
					<SpinnerContainer> Fetching Data... </SpinnerContainer>
				) : (
					Object.values(previewCollection)
						.reverse()
						.map(({ id, title, items, ...rest }) => {
							return (
								<div key={id} className="collection-preview">
									<h1 className="title w-100 text-center">
										{title.toUpperCase()}
									</h1>
									<div className="preview">
										{items
											.filter((i, idx) => {
												return idx < itemsCountForPreview;
											})
											.map((item) => {
												return (
													<CollectionFullItem
														key={item.id}
														item={item}
														onDivClick={() => {
															navigate("/categories/" + title.toLowerCase());
														}}
													>
														<div style={{ padding: "5px" }}>
															Open {title} Collection
														</div>
													</CollectionFullItem>
												);
											})}
									</div>
								</div>
							);
						})
				)}
			</div>
		</div>
	);
};
export default ShopPage;
