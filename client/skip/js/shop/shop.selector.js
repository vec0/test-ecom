import { createSelector } from "reselect";
import { allCategoriesData } from "../../../src/constants/temp-data";

const getShopValue = (state) => state.shop;

export const getShop = createSelector([getShopValue], (shop) => shop);

export const selectShopCollections = createSelector(
	[getShopValue],
	(shop) => shop.collections
);

export const selectSingleCollection_WITH_PARAMS = (collectionId) =>
	createSelector([selectShopCollections], (collections) => {
		if (!collections) return {};
		return collections[collectionId.toLowerCase()];
	});

export const selectSingleCollection = (state, collectionId) => {
	const { collections } = state.shop;
	//console.log(collections);
	if (!collections) return {};
	return collections[collectionId.toLowerCase()];
	/*  collections.find((c) => c.id == COLLECTION_ID_MAP[collectionurlParam]) */
};

export const selectCollectionsForPreview = createSelector(
	[selectShopCollections],
	(collections) => {
		/*   return collections.map((col) => {
      console.log(col);
      return col.filter((o, i) => i < 5);
    }); */
		/*  return collections.map((col) => {
      col = { ...col };
      col.items = col.items.filter((o, i) => i < 5);
      return col;
    }); */
		return collections;
	}
);

export const selectIsCollectionFetching = createSelector(
	[getShopValue],
	(shop) => shop.isFetching
);
export const selectIsCollectionLoaded = createSelector(
	[getShopValue],
	(shop) => !!shop.collections
);
