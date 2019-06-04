import React from "react";
import { Link } from "react-router-dom";

export class Favorites extends React.Component {
	render() {
		return (
			<div className="sidebar-sticky">
				<ul className="nav flex-column">
					<li className="nav-item">
						<a className="nav-link active" href="#">
							Dashboard <span className="sr-only">(current)</span>
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Orders
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Products
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Customers
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Reports
						</a>
					</li>
					<li className="nav-item">
						<a className="nav-link" href="#">
							Integrations
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
