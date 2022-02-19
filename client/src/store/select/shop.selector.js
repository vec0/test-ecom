import { createSelector } from "reselect";
import { allCategoriesData } from "../../constants/temp-data";

const getShopValue = (state) => state.shop;
export const getShop = createSelector([getShopValue], (shop) => shop);

export const selectShopCategoriesData = createSelector(
	[getShopValue],
	(shop) => {
		const catData = allCategoriesData;
		return catData;
	}
);

export const selectShopCollections = createSelector(
	[getShopValue],
	(shop) => shop.collections
);

export const selectShopPreviewCollections = createSelector(
	[getShopValue],
	(shop) => shop.previewCollections
);

export const selectErrorMessage = createSelector(
	[getShopValue],
	(shop) => shop.errorMessage
);

export const selectIsCollectionLoaded = createSelector(
	[getShopValue],
	(shop) => !!shop.collections
);
