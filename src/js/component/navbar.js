import React from "react";
import { Link } from "react-router-dom";

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
					<button className="btn btn-outline-dark my-2 mr-2">
						Characters <br />
						<i className="fas fa-users" />
					</button>
					<button className="btn btn-outline-dark my-2 mr-2">
						Vehicles <br /> <i className="fas fa-truck-pickup" />
					</button>
					<button className="btn btn-outline-dark my-2 mr-2">
						Planets <br /> <i className="fas fa-globe-asia" />
					</button>
				</span>
			</nav>
		);
	}
}
