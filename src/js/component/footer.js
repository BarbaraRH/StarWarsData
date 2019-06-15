import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Footer = () => (
	<footer className="footer fixed-bottom py-3 bg-light">
		<Context.Consumer>
			{({ store, actions }) => {
				if (store.favorites.length > 0) {
					return store.favorites.map((item, index) => {
						return (
							<Link key={index} to={"/" + item.category + "/" + item.position}>
								<button type="button" className="btn btn-outline-primary">
									{item.name}
								</button>
							</Link>
						);
					});
				}
			}}
		</Context.Consumer>
	</footer>
);
