/* //import SHOP_DATA from "./shop.data";
import { collection } from "firebase/firestore";
import ShopActionTypes from "./shop.types";
export const INITIAL_STATES = {
  collections: null,
  isFetching: false,
  errorMessage: undefined,
};

const shopReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTION_START:
      return { ...state, isFetching: true };
    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case ShopActionTypes.FETCH_COLLECTION_FAILURE:
      return { ...state, errorMessage: action.payload, isFetching: false };
    default:
      return state;
  }
};

export default shopReducer;
 */
