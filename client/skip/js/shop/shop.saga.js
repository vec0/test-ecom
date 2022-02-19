/* import { takeEvery, call, put } from "redux-saga/effects";
import { firestoreGetMethod } from "../../firebase/firebase.utils";
import ShopActionTypes from "./shop.types";
import { collection } from "firebase/firestore";
import { onSnapshot } from "firebase/firestore";
import { convertCollectionsSnapshotToMap } from "./../../firebase/firebase.utils";
import { fetchCollectionsSuccess, fetchCollectionsError } from "./shop.actions";
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function longTask() {
  longTask_();
}
async function longTask_() {
  //await timeout(100);
  let asd = new Promise((r) => setTimeout(r, 10500));
  await asd();
}

/* export const updateUserProfile = async (newUser, userID) => {
    return firestore
        .collection('users')
        .doc(userID)
        .set(newUser);
  };
  Then you call it with:
  
  yield call(() => await updateUserProfile(newUser, userID));
  yield console.log('waiting'); */

/*   getFamily() {
    return this.family;
  }
  
  setFamilyID(familyID) {
    this.familyID = familyID;
    return new Promise((resolve, reject) => {
      var resolveOnce = (doc) => {
        resolveOnce = () => void;
        resolve(doc);
      };
      this.detachFamilyIDWatcher = this.db
        .collection("families").doc(this.familyID)
        .onSnapshot((familyDoc) => {
          console.log("family updated");
  
          this.family = familyDoc;
          resolveOnce(familyDoc);
        }, reject);
    });
  }
 */

export function* fetchCollectionsAsync_test() {
  /*  console.log("Start");
  const d = new Date();
  //let ms =
  yield console.log("I a fired", performance.now());
  // let asd = d.getMilliseconds();
  call(longTask);
  // while (d.getMilliseconds() - asd < 100) yield (() => {})();
  yield console.log("I a fired", performance.now());
  yield console.log("I a fired", performance.now());
  return; */
  const firestore = firestoreGetMethod();
  const collectionRef = yield collection(firestore, "collections");
  // console.log(collectionRef);

  let snapShot = null;
  /*  const pms = () => {
    console.log("pms");
    return new Promise((res, err) => () => {
      console.log("Promise");
      onSnapshot(
        collectionRef,
        (s) => {
          snapShot = s;
          res();
        },
        (error) => res()
      );
    });
  }; */

  yield pms((res) => {
    //console.log("Promise");
    onSnapshot(collectionRef, (s) => {
      snapShot = s;
      res();
    });
  });

  //console.log("end");
  /* 
  let snapShot = null;
  onSnapshot(collectionRef, (s) => {
    snapShot = s;
  });
  while (snapShot == null) yield delay(100);
 */
  // let snap = yield call([firestore, onSnapshot], collectionRef);
  // console.log(snap);
  // snap = yield call(snap);
  // console.log(snap);
  /*  const snap = yield call(
    convertCollectionsSnapshotToMap,
    onSnapshot(collectionRef)
  ); */
  // const collectionMap = yield call(onSnapshot(collectionRef));
  const collectionMap = yield convertCollectionsSnapshotToMap(snapShot);
  //const collectionMap = yield call(convertCollectionsSnapshotToMap, snapShot);
  // console.log(collectionMap);
  yield put(fetchCollectionsSuccess(collectionMap));
  /* (err) => {
    dispatch(fetchCollectionsError(err.message));
  } */
}

/*var roomRef = firebase.database().ref('/Users/' + userid + '/rooms')
var rooms = yield call(function() {
  return new Promise(function(resolve, reject) {
    roomRef.once('value', function (snap) {
      var rooms = []
      var roomkeys = snap.val()
      for (var roomkey in roomkeys) {
        firebase.database().ref('/Rooms/' + roomkey).once('value', function (item) {
          rooms.push(item.val())
        })
      }
      resolve(rooms)
    })
  })
})
yield put({type: 'LOAD_ROOMS', payload: { rooms: rooms}})*/

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const pms = (fn) => new Promise((res, err) => fn(res, err));

export function* fetchCollectionsAsync() {
  const firestore = firestoreGetMethod();
  const collectionRef = yield collection(firestore, "collections");
  let snapShot = null;

  yield pms((res, err) => {
    //console.log("Promise");
    onSnapshot(
      collectionRef,
      (s) => {
        snapShot = s;
        res();
      },
      (error) => err(error)
    );
  });
  const collectionMap = yield convertCollectionsSnapshotToMap(snapShot);
  yield put(fetchCollectionsSuccess(collectionMap));
}

export function* fetchCollectionsStart() {
  // console.log("Start");
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTION_START,
    fetchCollectionsAsync
  );
}
/* 
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


  };
};
 */
 */