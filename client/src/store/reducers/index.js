import { default as shopReducer } from "./shop.reducer";
import { default as cartReducer } from "./cart.reducer";
import { default as userReducer } from "./user.reducer";
//import directoryReducer from "../../../skip/directory/directory.reducer";

export const combinedReducers = {
	user: userReducer,
	cart: cartReducer,
	shop: shopReducer,
	//directory: directoryReducer,
};

/* function* rootSaga () {
    yield [
        fork(saga1), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
        fork(saga2),
    ];
} */
