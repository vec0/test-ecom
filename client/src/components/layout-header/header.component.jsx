import React, { useState, useContext, useEffect, useLayoutEffect } from "react";
import "./header.styles.scss";
import { Link, useLocation } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
//import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect, useDispatch, useSelector } from "react-redux";
import CartIcon from "./cart-icon/cart-icon.component";
import CartDrowpdown from "./cart-dropdown/cart-dropdown.component";
import { actionsCreator } from "../../store/reducers/user.reducer";
import { SessionContext } from "../../app/app";
import { selectCurrentUser } from "../../store/select/user.selector";
//<Logo className="logo" />

const Header = (props) => {
	const { cartDropdownHidden } = useContext(SessionContext);
	const dispatch = useDispatch();

	const currentUser = useSelector(selectCurrentUser);
	//console.log("currentUser");
	//console.log(currentUser);
	const nav = useLocation();
	const homeButton = React.useRef();
	const logoContainer = React.useRef();
	useEffect(() => {
		const node = homeButton.current;
		homeButton.current.addEventListener(
			"mouseover",
			() => {
				logoContainer.current.classList.remove("logo-hover");
				logoContainer.current.classList.add("logo-hover");
			},
			false
		);
		homeButton.current.addEventListener(
			"mouseleave",
			() => {
				logoContainer.current.classList.remove("logo-hover");
			},
			false
		);
		//
	}, []);

	let tl = "";
	let path = nav.pathname;
	if (path === "/home") path = "/";
	let names = path
		.toUpperCase()
		.split("/")
		.slice(1)
		.map((p) => {
			return [p, (tl += "/" + p)];
		});

	if (names.length === 1 && names[0][0] === "") names = [];
	//console.log(names.length);
	return (
		<React.Fragment>
			<div className="header">
				<div className="bread-container">
					<div to="/" className="logo-container" ref={logoContainer}>
						<span className="logo" />
					</div>
					<div className="breadcrumb">
						<div className={`breadcrumb-item `}>
							<Link className="option" to="/home" ref={homeButton}>
								CROWN SHOP
							</Link>
						</div>
						{names.length === 0
							? ""
							: names.map((o, i) => {
									if (i === names.length - 1)
										return (
											<div key={i} className="breadcrumb-item option active">
												{o[0]}
											</div>
										);
									else
										return (
											<div key={i} className="breadcrumb-item">
												<Link className="option" to={o[1]}>
													{o[0]}
												</Link>
											</div>
										);
							  })}
					</div>
				</div>

				<div className="options">
					<Link className="option" to="/categories">
						CATEGORIES
					</Link>
					<Link className="option" to="/contact">
						CONTACT
					</Link>

					{currentUser ? (
						<React.Fragment>
							<div
								className="option"
								style={{ border: "solid 1px black", marginRight: "65px" }}
								onClick={() => dispatch(actionsCreator.signOutStart())}
							>
								SIGN OUT
							</div>
						</React.Fragment>
					) : (
						<Link
							className="option sign-in "
							to={{
								pathname: "/signin",
							}}
							state={{ from: { pathname: path } }}
							style={{ border: "solid 1px black", marginRight: "65px" }}
						>
							<span className="fa fa-sign-in fa-lg"></span>
							<span>SIGN IN</span>
						</Link>
					)}
					<CartIcon />
				</div>
				{cartDropdownHidden ? null : <CartDrowpdown />}
			</div>
		</React.Fragment>
	);
};

export default Header;
