import React from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { Detail } from "./detail";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

/* store.demo[this.props.match.params.theid].title */
export class CardList extends React.Component {
	render() {
		return (
			<div className="container pt-3">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							console.log(store);
							let property = this.props.match.params.category;
							console.log(this.props.match);
							console.log(property);
							console.log(store[property]);
							if (property in store) {
								return store[property].map((item, index) => {
									return (
										<div key={index} className="card" style={{ width: "18rem" }}>
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text">
													With supporting text below as a natural lead-in to additional
													content.
												</p>
												<Link
													key={index}
													to={"/" + property + "/" + index}
													className="btn btn-primary btn-lg"
													role="button">
													Learn more
												</Link>
											</div>
										</div>
									);
								});
							}
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

CardList.propTypes = {
	match: PropTypes.object
};
