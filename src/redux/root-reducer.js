import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import shopReducer from "./shop/shop.reducer";
import storage from "redux-persist/lib/storage"; //sessionStorage
import { persistReducer } from "redux-persist";
import { store } from "./store";
import directoryReducer from "./directory/directory.reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const increase = 0;
const DECREASE = 0;

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  shop: shopReducer,
  directory: directoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
