import React, { Component, Profiler, useEffect, useLayoutEffect } from "react";
import CategoryCoverItem from "../../components/category-cover-item/category-cover-item.component";
//import MenuItem from "../../components/menu-item/menu-item.component";
import "./styles.scss";
import { connect, useSelector } from "react-redux";
import { selectShopCategoriesData } from "../../store/select/shop.selector";
import TitleBanner from "./title-banner/tittle.banner";
const HomePage = () => {
	const allCategoriesData = useSelector(selectShopCategoriesData);
	//#SCROLL_RESET
	useEffect(() => {
		window.scrollTo(0, 0);
	});
	return (
		<div className="homapage">
			<div className="p-0 mb-4">
				<div className="container">
					<TitleBanner />
				</div>
			</div>

			<div className="directory-menu">
				<Profiler
					id="Directory"
					onRender={(id, phase, actualDuration) => {
						console.log({
							id,
							phase,
							actualDuration,
						});
					}}
				>
					{allCategoriesData.map(({ id, ...rest }) => {
						return <CategoryCoverItem key={id} {...rest} />;
					})}
				</Profiler>
			</div>
		</div>
	);
};

export default connect(null)(HomePage);

//export default HomePage;
