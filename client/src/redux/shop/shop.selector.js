import { createSelector } from "reselect";

/* const COLLECTION_ID_MAP = {
  hats: "hats",
  sneakers: "sneakers",
  jackets: "jackets",
  womens: "womens",
  mens: "mens",
};
 */
const getShopValue = (state) => state.shop;

export const getShop = createSelector([getShopValue], (shop) => shop);

export const getShopCollections = createSelector(
  [getShopValue],
  (shop) => shop.collections
);

/* 
export const getShopSingleCollection = createSelector(
    [getShopValue],
    (shop) => shop.collections
  );
   */

export const getSingleCollection_WITH_PARAMS = (collectionId) =>
  createSelector([getShopCollections], (collections) => {
    if (!collections) return {};
    return collections[collectionId.toLowerCase()];
  });
export const getSingleCollection = (state, collectionId) => {
  const { collections } = state.shop;
  //console.log(collections);
  if (!collections) return {};
  return collections[collectionId.toLowerCase()];
  /*  collections.find((c) => c.id == COLLECTION_ID_MAP[collectionurlParam]) */
};

export const getCollectionsForPreview = createSelector(
  [getShopCollections],
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
/*let query = db.collection("users");

if (country !== "") query = query.where("country", "==", country);
if (gender !== "") query = query.where("gender", "==", gender);
if (age !== "") query = query.where("age", "==", age);

query.get()...
In the new modular/v9 syntax, that'd be:

let conditions = []

if (country !== "") conditions.push(where("country", "==", country));
if (gender !== "") conditions.push(where("gender", "==", gender));
if (age !== "") conditions.push(where("age", "==", age));

let query = query(collection(db, "users"), ...conditions);

getDocuments(query)...*/
