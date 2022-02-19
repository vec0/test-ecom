import React from "react";
import "./category-cover-item.styles.scss";
import { useLocation, useNavigate } from "react-router-dom";
const CategoryCoverItem = ({ title, imageUrl, size, linkUrl, isNew }) => {
	let location = useLocation();
	let navigate = useNavigate();

	//if (size !== "large")
	return (
		<div
			className={`${size ? size : ""} menu-item`}
			onClick={() => {
				navigate(`${location.pathname}${linkUrl}`);
			}}
		>
			<div
				className="background-image-cont"
				style={{
					animationDuration: `${(Math.random() * 5 + 3).toString() + "s"}`,
				}}
			>
				<div
					className="background-image"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</div>
			<div class="card-title">
				<h2>
					<span class="title-accent">...</span>
				</h2>
				{isNew ? <span>NEW</span> : ""}

				<h1>{title.toUpperCase()}</h1>
			</div>
		</div>
	);
	/* 
	return (
		<div
			className={`${size ? size : ""} menu-item`}
			onClick={() => {
				navigate(`${location.pathname}${linkUrl}`);
			}}
		>
			<div
				className="background-image-cont"
				style={{
					animationDuration: `${(Math.random() * 5 + 3).toString() + "s"}`,
				}}
			>
				<div
					className="background-image"
					style={{
						backgroundImage: `url(${imageUrl})`,
					}}
				/>
			</div>
			<div className="content">
				<h1 className="title">{title.toUpperCase()}</h1>
				<span className="subtitle">SHOP NOW</span>
			</div>
		</div>
	); */
};

export default CategoryCoverItem;
