import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { call } from "redux-saga/effects";
import { PROMISE_CALL } from "../../../utils/utils";
import { app, convertCollectionsSnapshotToMap } from "./firebase.utils";

export function* _fetchAllCollectionsYield(url) {
	const firestore = yield getFirestore(app);
	const collectionRef = yield collection(firestore, url);

	// Create a query against the collection
	let snapShot = null;
	//console.log(snapShot);

	yield PROMISE_CALL(
		(data) => {
			snapShot = data;
		},
		(res, err) => {
			//console.log("Promise");
			onSnapshot(
				collectionRef,
				(s) => {
					//console.log("123s");
					//snapShot = s;
					res(s);
				},
				(error) => {
					err(error);
				}
			);
		}
	);
	//console.log(snapShot);
	const collectionMap = yield convertCollectionsSnapshotToMap(snapShot);
	return collectionMap;
}

export function* _fetchSingleCollectionYield(url, collectionName) {
	const collectionMap = yield _fetchAllCollectionsYield(url);
	if (collectionMap[collectionName] === undefined)
		throw Error(`Collection "${collectionName}" not found`);
	return collectionMap[collectionName];
}
