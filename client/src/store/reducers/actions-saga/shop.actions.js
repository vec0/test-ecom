import { takeLatest, put } from "redux-saga/effects";
import {
	fetchAllCollectionsYield,
	fetchSingleCollectionYield,
} from "../../../domain-features/api/api-adapter";
import { actionsCreator, types } from "../shop.reducer";

/////////////
// ACTIONS //

export const actions = {
	fetchAllCollectionsYield: function* () {
		yield takeLatest(types.FETCH_PREVIEW_COLLECTIONS_START, function* (action) {
			try {
				const collectionMap = yield fetchAllCollectionsYield("collections");

				for (const property in collectionMap) {
					collectionMap[property].items = collectionMap[property].items.filter(
						(o, i) => i < 4
					);
				}

				yield put(actionsCreator.fetchPreviewCollectionsSuccess(collectionMap));
			} catch (err) {
				yield put(actionsCreator.fetchCollectionsFailure(err.message));
			}
		});
	},
	fetchSingleCollectionYield: function* () {
		yield takeLatest(types.FETCH_SINGLE_COLLECTION_START, function* (action) {
			try {
				const singleCollection = yield fetchSingleCollectionYield(
					"collections",
					action.payload
				);
				yield put(
					actionsCreator.fetchSingleCollectionSuccess(singleCollection)
				);
			} catch (err) {
				yield put(actionsCreator.fetchCollectionsFailure(err.message));
			}
		});
	},
};
