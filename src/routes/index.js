import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";

const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={Cart} />
				<Route path="/checkout" component={Checkout} />
				<Route path="*" component={NotFound} />
			</Switch>
		</Router>
	);
};

export default Routes;
