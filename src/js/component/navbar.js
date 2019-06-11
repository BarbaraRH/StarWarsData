import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-light bg-light">
				<Link to="/">
					<span className="navbar-brand">
						<img
							src="https://seeklogo.com/images/S/Star_Wars-logo-97DD55947B-seeklogo.com.png"
							style={{ width: 100, heigth: "auto" }}
						/>
					</span>
				</Link>
				<span className="my-2 my-lg-0">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.buttons.map((item, index) => {
								return (
									<Link key={index} to={"/list/" + item.name}>
										<button className="btn btn-outline-dark my-2 mr-2">
											{item.name} <br />
											<i className={item.className} />
										</button>
									</Link>
								);
							});
						}}
					</Context.Consumer>
				</span>
			</nav>
		);
	}
}
