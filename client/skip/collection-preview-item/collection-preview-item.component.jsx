/* import React from "react";
import CollectionItem from "../collection-full-item/collection-item.component";
import "./styles.scss";

const CollectionsPreview = ({ title, items }) => {
	return (
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((i, idx) => {
						return idx < 4;
					})
					.map((item) => {
						return <CollectionItem key={item.id} item={item} />;
					})}
			</div>
		</div>
	);
};

export default CollectionsPreview;
 */
