import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export class Detail extends React.Component {
	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					let property = this.props.match.params.category;
					let index = this.props.match.params.theid;
					if (property in store) {
						return (
							<div className="jumbotron">
								<h1 className="display-4">{store[property][index].name}</h1>
								<p className="lead">
									This is a simple hero unit, a simple jumbotron-style component for calling extra
									attention to featured content or information.
								</p>
								<hr className="my-4" />
								<p>
									It uses utility classes for typography and spacing to space content out within the
									larger container.
								</p>
							</div>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}

Detail.propTypes = {
	match: PropTypes.object
};
