import React, {
	Suspense,
	lazy,
	useEffect,
	createContext,
	useState,
	useMemo,
	useLayoutEffect,
	useRef,
} from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { useRoutes, Navigate, useLocation, Link } from "react-router-dom";

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./global.styles.scss";
import { ShopPageRoutes } from "../pages/shop-collection/shop-collection.page";

import { selectCurrentUser } from "../store/select/user.selector";
import Error404Page from "../pages/error-404/error-404.page";
import ErrorBoundary from "../components/error-boundary-container/error-boundary.component";
import Header from "../components/layout-header/header.component";
import SpinnerContainer from "../components/spinner/with-spinner-no-redux.components";
import Footer from "../components/layout-footer/footer.layout";
import { actionsCreator } from "../store/reducers/user.reducer";

//import HomePage from "../pages/homepage/homepage.component";

export const SessionContext = createContext({
	cartDropdownHidden: true,
	setCartDropdownHidden: () => {},
});

const App = () => {
	const dispatch = useDispatch();
	//const ourDiv = useRef();
	useLayoutEffect(() => {
		const exist = actionsCreator.checkUserSessionSync();
		//console.log("EXIST");
		//	console.log(exist);
		if (exist) dispatch(actionsCreator.signInSuccess(exist));
	});

	/* 	const [cartDropdownHidden, setCartDropdownHidden] = useState(true);
	const currentUser = useSelector(selectCurrentUser);
	const contextValue = useMemo(
		() => ({
			cartDropdownHidden,
			setCartDropdownHidden: () => setCartDropdownHidden(!cartDropdownHidden),
			currentUser,
		}),
		[cartDropdownHidden, currentUser]
	); */

	//<SessionContext.Provider value={contextValue}>
	return (
		<React.Fragment>
			<div className="container">
				<Header />
				<RenderRoutes />
			</div>
			<Footer />
		</React.Fragment>
	);
	//</SessionContext.Provider>
};
export default connect(null)(App);

// spinner header

const HomePage = lazy(() => import("../pages/homepage/homepage.page"));
const ShopPage = lazy(() =>
	import("../pages/shop-all-categories/shop-all-categories.page")
);
const CheckOutPage = lazy(() => import("../pages/checkout/checkout.page"));
const SignInAndSignUpPage = lazy(() =>
	import("../pages/sign-in-and-sign-up/sign-in-and-sign-up.page")
);

function LoadingPageLayout() {
	return <SpinnerContainer> Loading Page Layout... </SpinnerContainer>;
}

function RenderRoutes() {
	const currentUser = useSelector(selectCurrentUser);
	const location = useLocation();
	const from =
		(location.state?.from || { from: { pathname: "/" } }).pathname ?? "/";
	const routes = useRoutes([
		{
			index: "true",
			path: "/",
			element: (
				<Suspense fallback={<LoadingPageLayout />}>
					<HomePage />{" "}
				</Suspense>
			),
		},
		{
			path: "/home",
			element: <Navigate to="/" replace="true" />,
		},
		ShopPageRoutes("/categories/"),
		{
			path: "/categories",
			element: (
				<Suspense fallback={<LoadingPageLayout />}>
					<ShopPage />
				</Suspense>
			),
		},

		{
			path: "/checkout",
			element: (
				<Suspense fallback={<LoadingPageLayout />}>
					<CheckOutPage />{" "}
				</Suspense>
			),
		},
		{
			path: "/signin",
			element: currentUser ? (
				<Navigate
					to={from.toLowerCase().endsWith("/signin") ? "" : from}
					replace="true"
				/>
			) : (
				<Suspense fallback={<LoadingPageLayout />}>
					<SignInAndSignUpPage from={from} />{" "}
				</Suspense>
			),
		},

		{
			path: "*",
			//element: <Navigate to="/404" replace="true" />,
			element: <Error404Page />,
		},
		{
			path: "/404",
			element: <Error404Page />,
		},
	]);
	return <ErrorBoundary>{routes}</ErrorBoundary>;
}

/*  <Routes>
           
           
            <Route path="/" element={<Navigate to="/movies" />}></Route>
            <Route
              path="*"
              element={<Wrapper comp={NotFound} props={props} />}
            />
            <Route
              path="/not-found"
              element={<Wrapper comp={NotFound} props={props} />}
            ></Route>
          </Routes>*/
/*   const currentUser = useSelector(selectCurrentUser);
  const isHidden = useSelector((state) => state.cart.isHidden);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]); */

/* {
      index: 5,
      exact: "true",
      path: "/shop",
      element: 
      <Suspense fallback={<LoadingPageLayout/>}>
        <ShopPage />
      </Suspense>,
      children: [
        {
          path: ":collectionId",
          element: <div>asd</div>,
        },
      ],
      // children: [ShopPageRoutes()],
    }, */

/* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview,
}); */

/* const mapDispatchToProps = (d) => ({
  setCurrentUser: (user) => d(setCurrentUser(user)),
  checkUserSession: () => d(checkUserSession()),
});
 */
//export default connect(mapStateToProps, mapDispatchToProps)(App);

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
