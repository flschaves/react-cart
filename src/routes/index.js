import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Cart = React.lazy(() => import("../pages/Cart"));
const Checkout = React.lazy(() => import("../pages/Checkout"));
const NotFound = React.lazy(() => import("../pages/NotFound"));

const Routes = () => {
	return (
		<React.Suspense fallback={<div>Carregando...</div>}>
			<Router>
				<Switch>
					<Route exact path="/checkout" component={Checkout} />
					<Route exact path="/" component={Cart} />
					<Route component={NotFound} />
				</Switch>
			</Router>
		</React.Suspense>
	);
};

export default Routes;
