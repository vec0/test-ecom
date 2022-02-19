import { createStore, applyMiddleware, combineReducers } from "redux";

import logger from "redux-logger";
//import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import storage from "redux-persist/lib/storage"; //sessionStorage
import { persistReducer } from "redux-persist";
import { persistStore } from "redux-persist";

//////////////////
// MIDDLE-WARES //

const middleWares = [];
const sagaMiddleware = createSagaMiddleware();
//middleWares.push(thunk);
middleWares.push(sagaMiddleware);
if (process.env.NODE_ENV === "development") {
	middleWares.push(logger);
}

//////////////
// REDUCERS //

export const combinedReducer = combineReducers({
	...require("./reducers/index").combinedReducers,
});
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["cart"],
};
const persisterReducer = persistReducer(persistConfig, combinedReducer);

////////////
// EXPORT //

// [x,x,...] => ... === {k:v , k:v, ...}
export const store = createStore(
	persisterReducer,
	applyMiddleware(...middleWares)
);
export const persister = persistStore(store);

/////////////////
// SAGA RUNNER //

sagaMiddleware.run(require("./reducers/actions-saga/index").combinedSaga);
