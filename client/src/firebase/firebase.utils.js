//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import * as firestore from "firebase/firestore";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  setDocs,
} from "firebase/firestore";
import { getFirestore, writeBatch } from "firebase/firestore";
import { signOut } from "firebase/auth";
//import firestore from "firebase/firestore";

/* signOutUser

import "firebase/auth"; */
//import { getAuth, signInWithGoogle } from "firebase/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

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

const app = initializeApp(config);

export const firestoreGetMethod = () => {
  return getFirestore(app);
};

export const authGetMethod = () => {
  return getAuth(app);
};

//firebase.initializeApp(config);
const analytics = getAnalytics(app);

//export const auth = firebase.auth();
//export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((res, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      res(userAuth);
    }, reject);
  });
};

const auth = getAuth(app);

//auth.languageCode = 'it';
const googleProvider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

googleProvider.setCustomParameters({ prompt: "select_account" });
/* provider.setCustomParameters({
    'login_hint': 'user@example.com'
  }); */

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export { auth, googleProvider };

export const createUserProfileDocument2 = async (userAuth, additionalData) => {
  console.log(userAuth);
  console.log("ASD");
  if (!userAuth) return;
  // let docSnap, docRef;
  // try {
  const db = firestoreGetMethod();
  const collection = `users/${userAuth.uid}`;

  doc(db, collection).then((docRef) => {
    console.log(docRef);
    const docSnap = getDoc(docRef).then((e) => {});
  }); //, "cities", "SF"
  // console.log(docRef.get);

  return null;
};
function LOG(st) {
  //console.log(st);
}
export const createUserProfileDocument = async (
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
  const db = firestoreGetMethod();
  const userRef = doc(db, `users/${currentUser.uid}`); //, "cities", "SF"
  const collectionRef = collection(db, `users`);

  const userSnap = await getDoc(userRef);
  LOG("auth --- ", userSnap);
  const collectionSnap = await getDocs(collectionRef);
  LOG("auth --- ", collectionSnap);

  if (!userSnap.exists()) {
    const { displayName, email } = currentUser;
    const createAt = new Date();

    try {
      await addDoc(userRef, {
        displayName,
        email,
        createAt,
        ...additionalData,
      });
      LOG("auth --- ", userRef);
    } catch (err) {
      LOG("error creating user", err.message);
    }
  }
  return userRef;
};

export const addCollectionAndDocs = async (cKey, oKey) => {
  const firestore = firestoreGetMethod();
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

  /*let writeBatch = firestore.batch();

// Add two documents in an atomic batch.
let data = { foo: 'bar' };
writeBatch.set(firestore.doc('col/doc1'), data);
writeBatch.set(firestore.doc('col/doc2'), data);

writeBatch.commit().then(res => {
  console.log('Successfully executed batch.');
});*/
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

export const signOutUser = () => {
  const auth = authGetMethod();
  signOut(auth);
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
