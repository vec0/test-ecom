import { Navigate, useLocation, useParams, useRoutes } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//import { takeLatest, put, all, call, delay } from "redux-saga/effects";

/* import ShopPage from "../pages/shop/shop.component";
import CheckOutPage from "../pages/checkout/checkout.component";
import SignInAndSignUpPage from "../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
 */
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

/* 
const PMS__ = (fn, back) =>
  new Promise((res, err) =>
    fn((data) => {
      back(data);
      res();
    }, err)
  );
 */
export const PROMISE_CALL = (apply, fn, args = undefined) => {
	if (args !== undefined && Object.keys(args).length > 0)
		return new Promise((res, err) =>
			fn(
				args,
				(data) => {
					apply(data);
					res();
				},
				err
			)
		);
	else
		return new Promise((res, err) =>
			fn((data) => {
				apply(data);
				res();
			}, err)
		);
};

export function* ASYNC_CALL(fn) {
	//console.log("1");
	//yield delay(1000);
	let finalize = false;
	let result = false;
	const zxc = async (fn, back) => {
		let result = null;
		try {
			result = await fn();
			// console.log("ass " + result);
		} catch (err) {
			throw new Error(err);
		}
		back(result);
	};
	zxc(fn, (res) => {
		finalize = true;
		//console.log("2");
		result = res;
	});
	//	while (!finalize) yield delay(16);// single frame using saga
	while (!finalize) yield null;
	//console.log("3");
	return result;
}
