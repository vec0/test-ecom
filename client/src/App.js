import React, { Component, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";

import Header from "./components/header/header.component";

import "./App.css";

import { getCollectionsForPreview } from "./redux/shop/shop.selector";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckOut from "./pages/checkout/checkout.component";
import { useRoutes } from "react-router-dom";
import RenderRoutes from "./utils/utils";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isHidden = useSelector((state) => state.cart.isHidden);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <RenderRoutes />
    </div>
  );
};

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: getCollectionsForPreview,
}); */

/* const mapDispatchToProps = (d) => ({
  setCurrentUser: (user) => d(setCurrentUser(user)),
  checkUserSession: () => d(checkUserSession()),
});
 */
//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

/*<Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />}>
            {ShopPageRoutes()}
          </Route>
          <Route path="/checkout" element={<CheckOut />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate
                  to={from.toLowerCase().endsWith("/signin") ? "" : from}
                  replace="true"
                />
              ) : (
                <SignInAndSignUpPage from={from} />
              )
            }
          />
        </Routes>*/

/*
  componentDidMount_ThunkExample() {
    const { setCurrentUser, collectionsArray } = this.props;
    const auth = getAuth();
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async (docRef) => {
        this.setState({ currentUser: null });
        //  throw new Error("ASD");
        if (docRef) {
          const userRef = await createUserProfileDocument(docRef);

          const u = onSnapshot(
            userRef,
            (doc) => {
           
              setCurrentUser({
                id: doc.id,
                ...doc.data(),
              });

              u();
              //console.log(this.state);
            },
            (err) => {
              u();
              console.log(err);
            }
          );
        }
      },
      (error) => {
        // ...
        console.log(error);
      }
    );

   
  }
*/
/*  this.setState({
                currentUser: {
                  id: doc.id,
                  ...doc.data(),
                },
              }); */

/*  addCollectionAndDocs(
      "collections",
      collectionsArray.map(({ title, items }) => ({ title, items }))
    ); */
