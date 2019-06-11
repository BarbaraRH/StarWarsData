import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CardList } from "./views/cardList";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Favorites } from "./component/favorites";

//create your first component
export class Layout extends React.Component {
	render() {
		//the basename is used when your project is published in a subdirectory and not in the root of the domain
		// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
		const basename = process.env.BASENAME || "";

		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter basename={basename}>
					<ScrollToTop>
						<Navbar />
						<div className="row">
							<div className="col-9">
								<Switch>
									<Route exact path="/" component={CardList} />
									<Route path="/list/:theid" component={CardList} />
									<Route render={() => <h1>Not found!</h1>} />
								</Switch>
							</div>
							<div className="col-3 p-3 bg-light">
								<Favorites />
							</div>
						</div>
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
