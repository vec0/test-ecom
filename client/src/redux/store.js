import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import rootReducer from "./root-reducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./shop/shop.saga";
import rootSaga from "./root-saga";

const middleWares = [];

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
//middleWares.push(thunk);
middleWares.push(sagaMiddleware);

if (process.env.NODE_ENV === "development") {
  middleWares.push(logger);
}

// [x,x,...] => ... === {k:v , k:v, ...}
export const store = createStore(rootReducer, applyMiddleware(...middleWares));

// then run the saga
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };

// render the application
