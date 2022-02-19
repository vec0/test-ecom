/* import ShopActionTypes from "./shop.types";

import {
  firestoreGetMethod,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";
import { collection, onSnapshot } from "firebase/firestore";

export const updateCollections = (collectionMap) => ({
  type: ShopActionTypes.UPDATE_COLLECTIONS,
  payload: collectionMap,
});

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTION_START,
  payload: null,
});

export const fetchCollectionsSuccess = (collectionsMap) => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});
export const fetchCollectionsError = (message) => ({
  type: ShopActionTypes.FETCH_COLLECTION_FAILURE,
  payload: message,
});

export const fetchCollectionsStartAsync = () => {
  return (dispatch) => {
    const firestore = firestoreGetMethod();
    const collectionRef = collection(firestore, "collections");
    dispatch(fetchCollectionsStart());

    onSnapshot(
      collectionRef,
      (snapShot) => {
        snapShot = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(snapShot));
      },
      (err) => {
        dispatch(fetchCollectionsError(err.message));
      }
    );

    /*   onSnapshot(collectionRef)
      .then((snapShot) => {
        snapShot = convertCollectionsSnapshotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(snapShot));
        //console.log(snapShot);
      })
      .catch((err) => {
        dispatch(fetchCollectionsError(err.message));
      }); */
  };
};
 */