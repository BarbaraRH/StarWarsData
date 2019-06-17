import React from "react";
import poster from "../../img/star-wars-movie-posters.jpg";
import "../../styles/home.scss";

export class Home extends React.Component {
	render() {
		return (
			<div className="text-center mt-4">
				<p>
					<img src={poster} />
				</p>
			</div>
		);
	}
}
