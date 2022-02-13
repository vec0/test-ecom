import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 0,
  sneakers: 1,
  jackets: 2,
  womens: 3,
  mens: 4,
};

const getShop = (state) => state.shop;

export const getShopCollections = createSelector(
  [getShop],
  (shop) => shop.collections
);

/* 
export const getShopSingleCollection = createSelector(
    [getShop],
    (shop) => shop.collections
  );
   */

export const getSingleCollection = (collectionurlParam) =>
  createSelector(
    [getShopCollections],
    (collections) => collections[COLLECTION_ID_MAP[collectionurlParam]]
    /*  collections.find((c) => c.id == COLLECTION_ID_MAP[collectionurlParam]) */
  );

export const getCollectionsForPreview = createSelector(
  [getShopCollections],
  (shop) => {
    return shop.collections.map((col) => col.filter((o, i) => i < 5));
  }
);
