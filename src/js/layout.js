import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { CardList } from "./views/cardList";
import { Detail } from "./views/detail";
import { Home } from "./views/home";

import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

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
						<div>
							<Switch>
								<Route exact path="/" component={Home} />
								<Route path="/:category/:theid" component={Detail} />
								<Route path="/:category" component={CardList} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
						</div>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default injectContext(Layout);
