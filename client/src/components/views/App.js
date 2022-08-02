import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, LoginPage, RegisterPage } from "./index";

function App() {
	return (
		<Router>
			<Routes>
				<Route exact path="/" element={<LandingPage />}></Route>
				<Route exact path="/LoginPage" element={<LoginPage />}></Route>
				<Route exact path="/RegisterPage" element={<RegisterPage />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
