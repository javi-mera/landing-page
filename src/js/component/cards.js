import React from "react";
import PropType from "prop-types";

export const Cards = prop => {
	return (
		<div className="card">
			<img
				className="card-img-top"
				src={prop.image}
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{prop.title}</h5>
				<p className="card-text">{prop.text}</p>
			</div>
		</div>
	);
};

Cards.propType = {
	title: PropType.string,
	image: PropType.string,
	text: PropType.string
};
