import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class CardList extends React.Component {
	render() {
		return (
			<div className="container pt-3">
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.demo.map((item, index) => {
								return (
									<div key={index} className="card" style={{ width: "18rem" }}>
										<div className="card-body">
											<h5 className="card-title">{item.name}</h5>
											<p className="card-text">
												With supporting text below as a natural lead-in to additional content.
											</p>
											<a href="#" className="btn btn-primary">
												Go somewhere
											</a>
										</div>
									</div>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
