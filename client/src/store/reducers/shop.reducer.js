///////////
// TYPES //

import { selectShopCollections } from "../select/shop.selector";
import { useSelector } from "react-redux";
import ErrorHandler from "../../domain-features/error/error-handler";

export const types = {
	FETCH_PREVIEW_COLLECTIONS_START: "shop/FETCH_PREVIEW_COLLECTIONS_START",
	FETCH_PREVIEW_COLLECTIONS_SUCCESS: "shop/FETCH_PREVIEW_COLLECTIONS_SUCCESS",

	FETCH_SINGLE_COLLECTION_START: "shop/FETCH_SINGLE_COLLECTION_START",
	FETCH_SINGLE_COLLECTION_SUCCESS: "shop/FETCH_SINGLE_COLLECTION_SUCCESS",
	//FETCH_COLLECTIONS_SUCCESS: "shop/FETCH_COLLECTIONS_SUCCESS",
	//FETCH_ALL_COLLECTIONS_START: "shop/FETCH_ALL_COLLECTIONS_START",
	FETCH_COLLECTION_FAILURE: "shop/FETCH_COLLECTION_FAILURE",
};

/////////////
// REDUCER //

export const initialState = {
	collections: {},
	previewCollections: {},
	errorMessage: undefined,
};

export default function reducer(state = initialState, { type, payload }) {
	switch (type) {
		case types.FETCH_PREVIEW_COLLECTIONS_SUCCESS:
			return { ...state, previewCollections: payload };
		case types.FETCH_SINGLE_COLLECTION_SUCCESS:
			const res = { ...state };
			res.collections = {
				...res.collections,
				[payload.title.toLowerCase()]: payload,
			};
			return res;
		case types.FETCH_COLLECTIONS_SUCCESS:
			return { ...state, collections: payload };
		case types.FETCH_COLLECTION_FAILURE:
			ErrorHandler.throw(payload);
			return { ...state, errorMessage: payload };
		default:
			return state;
	}
}

/////////////////////
// ACTIONS CREATOR //

export const actionsCreator = {
	fetchSingleCollectionStart: (definedCollection, collectionUid) => {
		if (definedCollection[collectionUid] !== undefined) return { type: "_" };
		return {
			type: types.FETCH_SINGLE_COLLECTION_START,
			payload: collectionUid,
		};
	},
	fetchPreviewCollectionsStart: (previewCollections, collectionUid) => {
		if (Object.values(previewCollections).length === 5) return { type: "_" };
		return { type: types.FETCH_PREVIEW_COLLECTIONS_START };
	},
	fetchSingleCollectionSuccess: (singleCollection) => ({
		type: types.FETCH_SINGLE_COLLECTION_SUCCESS,
		payload: singleCollection,
	}),
	fetchPreviewCollectionsSuccess: (collectionsMap) => ({
		type: types.FETCH_PREVIEW_COLLECTIONS_SUCCESS,
		payload: collectionsMap,
	}),
	fetchCollectionsFailure: (message) => ({
		type: types.FETCH_COLLECTION_FAILURE,
		payload: message,
	}),
};
