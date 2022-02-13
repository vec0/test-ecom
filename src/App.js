import React, { Component } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { connect } from "react-redux";

import HomePage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage, { ShopPageRoutes } from "./pages/shop/shop.component";

import "./App.css";
import logo from "./logo.svg";

import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { onSnapshot } from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";
import { createUserProfileDocument } from "./firebase/firebase.utils";

import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import CheckOut from "./pages/checkout/checkout.component";
import { useRoutes } from "react-router-dom";
import { RenderRoutes } from "./utils/utils";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

class App extends Component {
  //state = { currentUser: null, test: "App" };

  componentDidMount() {
    const { setCurrentUser } = this.props;
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
              /*  this.setState({
                currentUser: {
                  id: doc.id,
                  ...doc.data(),
                },
              }); */
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

  unsubscribeFromAuth = null;
  componentWillUnmount() {
    if (this.unsubscribeFromAuth) this.unsubscribeFromAuth();
  }
  signOut = async () => {
    try {
      this.setState({ currentUser: null });
      const auth = getAuth();
      await signOut(auth);
      this.setState({ currentUser: null });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div className="App">
        <Header signOut={this.signOut} />
        <RenderRoutes {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (d) => ({
  setCurrentUser: (user) => d(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);

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
