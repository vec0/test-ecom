//import firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import * as firestore from "firebase/firestore";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
//import firestore from "firebase/firestore";

/* 

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
};

export const createUserProfileDocument2 = async (userAuth, additionalData) => {
  console.log(userAuth);
  console.log("ASD");
  if (!userAuth) return;
  // let docSnap, docRef;
  // try {
  const db = getFirestore();
  const collection = `users/${userAuth.uid}`;

  doc(db, collection).then((docRef) => {
    console.log(docRef);
    const docSnap = getDoc(docRef).then((e) => {});
  }); //, "cities", "SF"
  // console.log(docRef.get);

  return null;
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  //console.log(userAuth);
  //console.log("ASD");
  if (!userAuth) return;
  // let docSnap, docRef;
  // try {
  const db = getFirestore();
  const collection = `users/${userAuth.uid}`;

  const docRef = doc(db, collection); //, "cities", "SF"
  // console.log(docRef.get);
  const docSnap = await getDoc(docRef);
  /*   try {
    getDoc(docRef)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
  return; */
  //console.log(docSnap);
  //} catch (err) {
  //  console.log("error reading db", err.message);
  //}
  //const userRef = doc();
  //console.log(userRef);
  //const snapShot = await userRef.get();
  if (!docSnap.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await setDoc(docRef, { displayName, email, createAt, ...additionalData });
      // await docRef.set({ displayName, email, createAt, ...additionalData });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }

  // console.log(snapShot);

  return docRef;
  // console.log(firestore);
};

//firebase.initializeApp(config);
const app = initializeApp(config);
const analytics = getAnalytics(app);

//export const auth = firebase.auth();
//export const firestore = firebase.firestore();

const auth = getAuth();

//auth.languageCode = 'it';
const provider = new GoogleAuthProvider();
//provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

provider.setCustomParameters({ prompt: "select_account" });
/* provider.setCustomParameters({
    'login_hint': 'user@example.com'
  }); */

// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider) //auth, provider
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.error(errorMessage);
      // ...
    });
};

/* import { getAuth, signInWithRedirect } from "firebase/auth";

const auth = getAuth();
signInWithRedirect(auth, provider);

import { getAuth, getRedirectResult, GoogleAuthProvider } from "firebase/auth";

const auth = getAuth();
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
