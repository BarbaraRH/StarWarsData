import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class CardList extends React.Component {
	render() {
		return (
			<div className="pt-3 pb-5 mb-5">
				<div className="row ml-5">
					<Context.Consumer>
						{({ store, actions }) => {
							let property = this.props.match.params.category;
							if (property in store) {
								return store[property].map((item, index) => {
									return (
										<div key={index} className="card m-2" style={{ width: "18rem" }}>
											<div className="card-body">
												<h5 className="card-title">{item.name}</h5>
												<p className="card-text" />
												<div className="form-check">
													<input
														type="checkbox"
														className="form-check-input"
														id="exampleCheck1"
														onChange={() => actions.favCard(property, index)}
													/>
													<label className="form-check-label" htmlFor="exampleCheck1">
														Check me out later
													</label>
												</div>
												<Link
													key={index}
													to={"/" + property + "/" + index}
													className="btn btn-secondary btn-lg mt-2"
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
										className="btn btn-dark btn-lg m-5"
										role="button">
										Show more
									</button>
								</div>
							);
						}
					}}
				</Context.Consumer>
			</div>
		);
	}
}

CardList.propTypes = {
	match: PropTypes.object
};
