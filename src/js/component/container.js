import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";

export function Container() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-9 mx-auto">
					<Jumbotron />
					<div className="card-group">
						<Cards
							title="Card title that wraps to a new line"
							image="https://images.pexels.com/photos/1002237/pexels-photo-1002237.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						/>
						<Cards
							title="Card title that wraps to a new line"
							image="https://images.pexels.com/photos/1194420/pexels-photo-1194420.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						/>
						<Cards
							title="Card title that wraps to a new line"
							image="https://images.pexels.com/photos/1405773/pexels-photo-1405773.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						/>
						<Cards
							title="Card title that wraps to a new line"
							image="https://images.pexels.com/photos/545008/pexels-photo-545008.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
							text="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
