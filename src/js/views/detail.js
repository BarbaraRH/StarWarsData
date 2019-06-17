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
					let details;
					if (property in store) {
						if (property === "characters") {
							details = (
								<p>
									Birth Year: {store[property][index].birth_year}
									<br />
									Eye Color: {store[property][index].eye_color}
									<br />
									Gender: {store[property][index].gender}
									<br />
									Hair Color: {store[property][index].hair_color}
									<br />
									Height: {store[property][index].height}
									<br />
									Mass: {store[property][index].mass}
									<br />
									Skin Color: {store[property][index].skin_color}
								</p>
							);
						} else if (property === "vehicles") {
							details = (
								<p>
									Cargo Capacity: {store[property][index].cargo_capacity}
									<br />
									Consumables: {store[property][index].consumables}
									<br />
									Cost in Credits: {store[property][index].cost_in_credits}
									<br />
									Crew: {store[property][index].crew}
									<br />
									Length: {store[property][index].length}
									<br />
									Manufacturer: {store[property][index].manufacturer}
									<br />
									Max Atmosphering Speed: {store[property][index].max_atmosphering_speed}
									<br />
									Model: {store[property][index].model}
									<br />
									Passengers: {store[property][index].passengers}
									<br />
									Vehicle Class: {store[property][index].vehicle_class}
								</p>
							);
						} else if (property === "planets") {
							details = (
								<p>
									Climate: {store[property][index].climate}
									<br />
									Diameter: {store[property][index].diameter}
									<br />
									Gravity: {store[property][index].gravity}
									<br />
									Orbital Period: {store[property][index].orbital_period}
									<br />
									Population: {store[property][index].population}
									<br />
									Rotation Period: {store[property][index].rotation_period}
									<br />
									Surface Water: {store[property][index].surface_water}
									<br />
									Terrain: {store[property][index].terrain}
								</p>
							);
						}
						return (
							<div className="jumbotron">
								<h1 className="display-4">{store[property][index].name}</h1>
								<p className="lead">Here is more info about {store[property][index].name}:</p>
								<hr className="my-4" />
								{details}
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
