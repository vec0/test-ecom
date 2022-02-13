import { Navigate, useLocation, useParams, useRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import CheckOutPage from "../pages/checkout/checkout.component";
import HomePage from "../pages/homepage/homepage.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ShopPage, { ShopPageRoutes } from "../pages/shop/shop.component";

export function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }
  return ComponentWithRouterProp;
}

/* 
from = () => {
  const from =
    (this.props.state || { from: { pathname: "/" } }).pathname ?? "/";
  return from;
}; */

export function RenderRoutes(props) {
  const from =
    (props.location.state || { from: { pathname: "/" } }).pathname ?? "/";
  const routes = useRoutes([
    { index: "true", path: "/", element: <HomePage /> },
    { path: "/home", element: <HomePage /> },
    ShopPageRoutes("/shop/"),
    { path: "/shop", element: <ShopPage /> },
    /* {
      index: 5,
      exact: "true",
      path: "/shop",
      element: <ShopPage />,
      children: [
        {
          path: ":collectionId",
          element: <div>asd</div>,
        },
      ],
      // children: [ShopPageRoutes()],
    }, */
    { path: "/checkout", element: <CheckOutPage /> },
    {
      path: "/signin",
      element: props.currentUser ? (
        <Navigate
          to={from.toLowerCase().endsWith("/signin") ? "" : from}
          replace="true"
        />
      ) : (
        <SignInAndSignUpPage from={from} />
      ),
    },
  ]);
  return routes;
}
