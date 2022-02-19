import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	onSnapshot,
	setDoc,
	setDocs,
} from "firebase/firestore";
import { getFirestore, writeBatch } from "firebase/firestore";
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	signOut,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from "firebase/auth";

import { ASYNC_CALL, PROMISE_CALL } from "../../../utils/utils";
import { call, delay, put } from "redux-saga/effects";
import ErrorHandler from "../../error/error-handler";

const config = {
	apiKey: "AIzaSyD3rTwfrTVTv-IaN3kfef8fqbw6aSejxBI",
	authDomain: "test-ecom-c4603.firebaseapp.com",
	projectId: "test-ecom-c4603",
	storageBucket: "test-ecom-c4603.appspot.com",
	messagingSenderId: "759404075135",
	appId: "1:759404075135:web:35c976c9698149ef08474a",
	measurementId: "G-3MP0JWKEJW",
	//ignoreUndefinedProperties: true,
};

export const app = initializeApp(config);
//const analytics = getAnalytics(app);
const googleProvider = new GoogleAuthProvider();
//auth.languageCode = 'it';
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
googleProvider.setCustomParameters({ prompt: "select_account" });
/* provider.setCustomParameters({
    'login_hint': 'user@example.com'
  }); */

/* export const getCurrentUser = () => {
	return new Promise((res, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			res(userAuth);
		}, reject);
	});
};
 */

export async function* _checkCurrentSessionYield() {
	const auth = yield getAuth(app);
	console.log(auth);
	const user = auth.currentUser;
	console.log(user);
	return auth;
	/* 	const decodedToken = await verifyIdToken(idToken);
	console.log(decodedToken);
	decodedToken.uid; */
}

/* function qwe(){
  revokeRefreshTokens(auth, uid);
  .then(() => {
    return getAuth().getUser(uid);
  })
  .then((userRecord) => {
    return new Date(userRecord.tokensValidAfterTime).getTime() / 1000;
  })
  .then((timestamp) => {
    console.log(`Tokens revoked at: ${timestamp}`);
  });
}
 */

/* export const createUserProfileDocument2 = async (userAuth, additionalData) => {
	console.log(userAuth);
	console.log("ASD");
	if (!userAuth) return;
	// let docSnap, docRef;
	// try {
	const db = getFirestore(app);
	const collection = `users/${userAuth.uid}`;

	doc(db, collection).then((docRef) => {
		console.log(docRef);
		const docSnap = getDoc(docRef).then((e) => {});
	}); //, "cities", "SF"
	// console.log(docRef.get);

	return null;
}; */

export const createUserProfileDocumentAsync = async (
	currentUser,
	...additionalData
) => {
	/*   const userAuth = authGetMethod;
  LOG("auth >>> ");
  LOG(userAuth);
  LOG("auth >>> ");
  if (!userAuth) {
    LOG("auth --- error");
    return "error";
  }
  const currentUser = userAuth.currentUser; */
	//console.log(currentUser);

	const db = getFirestore(app);
	const userRef = doc(db, `users/${currentUser.uid}`); //, "cities", "SF"
	const collectionRef = collection(db, `users`);

	const userSnap = await getDoc(userRef);
	//console.log("auth --- ", userSnap);
	//const collectionSnap = await getDocs(collectionRef);
	//console.log("auth --- ", collectionSnap);

	if (!userSnap.exists()) {
		const { displayName, email } = currentUser;
		const createAt = new Date();

		try {
			await addDoc(collectionRef, {
				displayName,
				email,
				createAt,
				...additionalData,
			});
			//console.log("auth --- ", userRef);
		} catch (err) {
			ErrorHandler.throw("error creating user: " + err.message);
			//console.log("error creating user", err.message);
		}
	}
	return userRef;
};

export const addCollectionAndDocs = async (cKey, oKey) => {
	const firestore = getFirestore(app);
	//const writeBatch = writeBatch(firestore);

	const batch = writeBatch(firestore);

	const collectionRef = collection(firestore, cKey);
	oKey.forEach((o) => {
		const newDocRef = doc(collectionRef);
		//console.log(newDocRef);
		batch.set(newDocRef, o);
	});
	console.log("start batching");
	await batch.commit();
	console.log("stop batching");
	/*  batch.commit().then(res=>{

  }).catch(err=>console.log(err)); */
	/*   const cityRef = db.collection('cities').doc('BJ');

const res = await cityRef.set({
  capital: true
}, { merge: true });
 */
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollection = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});
	// return transformedCollection;
	return transformedCollection.reduce((res, o) => {
		res[o.title.toLowerCase()] = o;
		return res;
	}, {});
};

export const signInWithGoogle = (res, err) => {
	const auth = getAuth(app);
	signInWithPopup(auth, googleProvider) //auth, provider
		.then((result) => {
			// This gives you a Google Access Token. You can use it to access the Google API.
			const credential = GoogleAuthProvider.credentialFromResult(result);
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			res(user);
			// ...
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code;
			const errorMessage = error.message;
			// The email of the user's account used.
			const email = error.email;
			// The AuthCredential type that was used.
			// const credential = GoogleAuthProvider.credentialFromError(error);
			// console.error(errorMessage);
			err(errorMessage);
			// ...
		});
};

/* import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = authGetMethod;
signInWithRedirect(auth, provider);

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";
import { signOut } from 'firebase/auth';

const auth = authGetMethod;
getRedirectResult(auth)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  }); */

//export const signInGoogle = () => signInWithGoogle(provider);

/*let writeBatch = firestore.batch();

// Add two documents in an atomic batch.
let data = { foo: 'bar' };
writeBatch.set(firestore.doc('col/doc1'), data);
writeBatch.set(firestore.doc('col/doc2'), data);

writeBatch.commit().then(res => {
  console.log('Successfully executed batch.');
});*/

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
//import firebase from "firebase/app";
const auth = {
	storeToken: (token) => localStorage.setItem("token", token),
	getStoredToken: () => localStorage.getItem("token"),
	authorize: function* (refresh) {
		// const currentAuth =  yield checkCurrentSessionYield(  );
		const currentAuth = getAuth(app);
		if (!currentAuth) throw Error("token expired");
		yield currentAuth;
	},
};
function* writeSnapshopFromCurrentUserAuth3(user) {
	// COPY
	//let userSnapshop = null;
	let data = yield ASYNC_CALL(async () => createUserProfileDocumentAsync(user));
	return data;
	/* 	yield PROMISE_CALL((d) => (userSnapshop = d), onSnapshot, data);
	return userSnapshop; */

	/* yield put(
		actionsCreator.signInSuccess({
			id: userSnapshop.id,
			...userSnapshop.data(),
		})
	); */
	// COPY
}

function* writeSnapshopFromCurrentUserAuth(user) {
	let done = false;
	let data = null;
	const fetch = async () => {
		data = await createUserProfileDocumentAsync(user);
		done = true;
	};
	fetch();
	while (!done) yield delay(1);
	console.log(data);

	let userSnapshop = null;
	yield PROMISE_CALL((d) => (userSnapshop = d), onSnapshot, data);
	return userSnapshop;
}
export const authActions = {
	googleSigninYield: function* googleSigninYield() {
		let user = null;
		yield PROMISE_CALL((data) => (user = data), signInWithGoogle);
		/* console.log(user);
		user = yield writeSnapshopFromCurrentUserAuth(user);
		console.log(user); */
		return user;
	},

	emailSigninYield: function* emailSigninYield({ email, password }) {
		//let userSnapshop = null;
		const auth = getAuth(app);

		let credentialUser = null;
		let done = false;
		yield PROMISE_CALL(
			(data) => {
				credentialUser = data;
				done = true;
			},
			async (apply) => {
				const qwe = await signInWithEmailAndPassword(auth, email, password);
				apply(qwe);
			}
		);
		while (!done) yield delay(1);
		//credentialUser = credentialUser.credentialUser;
		//console.log(credentialUser);

		//console.log(tempData);
		/*     this.setState({ email: "", password: "" });
	this.navigate(this.props.from, { replace: true });
	
	yield put(signInSuccess(credentialUserSnapshop.data)); */
		return credentialUser;
		//	return yield writeSnapshopFromCurrentUserAuth(user);
	},
	signOutUserYield: function* () {
		const auth = getAuth(app);
		let done = false;
		yield PROMISE_CALL(
			(data) => {},
			async (res) => {
				await signOut(auth);
				done = true;
				res(null);
			}
		);
		while (!done) yield delay(1);
		return null;
	},
	signUpYield: function* ({ email, password, displayName }) {
		//console.log(email, password);
		const auth = getAuth();
		let done = false;
		let user = null;

		createUserWithEmailAndPassword(auth, email, password)
			// createUserAndRetrieveDataWithEmailAndPassword(auth, email, password)
			.then(async (userCredential) => {
				// Signed in
				//console.log(userCredential);

				user = userCredential.user;

				//console.log(user);

				await createUserProfileDocumentAsync(user, { displayName });
				//console.log(displayName);
				done = true;
				/* this.setState({
					displayName: "",
					email: "",
					password: "",
					confirmPassword: "",
				}); */
				// ...
			})
			.catch((error) => {
				ErrorHandler.throw(error.message);
			});

		/* .catch((error) => {
					//const errorCode = error.code;
					const errorMessage = error.message;
				
					//alert(errorCode);
					throw Error(errorMessage); // ..
				}) */
		/*  const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ); */
		//console.log("START UP");
		while (!done) yield delay(1);
		//console.log(user);
		return user;
	},
};

/*auth/email-already-in-use
auth/invalid-email
auth/operation-not-allowed
auth/weak-password*/
