import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

/* store.demo[this.props.match.params.theid].title */
export class CardList extends React.Component {
	render() {
		return (
			<div className="container pt-3 pb-5 mb-5">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							let property = this.props.match.params.category;
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
												<div className="form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
														onChange={() => actions.favCard(property, index)}
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Check me out
													</label>
												</div>
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
					<Context.Consumer>
						{({ store, actions }) => {
							let property = this.props.match.params.category;
							let propertyNext;
							if (property === "characters") {
								propertyNext = "nextCharacters";
							} else if (property === "vehicles") {
								propertyNext = "nextVehicles";
							} else if (property === "planets") {
								propertyNext = "nextPlanets";
							}
							if (
								property in store &&
								propertyNext in store &&
								store[propertyNext] !== null &&
								store[propertyNext].length > 0
							) {
								return (
									<div className="text-center p-2">
										<button
											onClick={() => actions.showMore(property, propertyNext)}
											className="btn btn-primary btn-lg m-5"
											role="button">
											Show more
										</button>
									</div>
								);
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
