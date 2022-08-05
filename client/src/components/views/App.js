import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage, MovieDetail } from "./index";

import Auth from "../../hoc/auth";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={Auth(LandingPage, null)}></Route>
				<Route exact path="/LoginPage" element={Auth(LoginPage, false)}></Route>
				<Route
					exact
					path="/RegisterPage"
					element={Auth(RegisterPage, false)}
				></Route>
				<Route
					exact
					path="/movie/:movieId"
					element={Auth(MovieDetail, false)}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
