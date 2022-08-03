import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUser } from "../_actions/user_action";

export default function (SpecificComponent, option, adminRoute = null) {
	function AuthenticationCheack() {
		const dispatch = useDispatch();
		const navigate = useNavigate();

		useEffect(() => {
			dispatch(authUser()).then((response) => {
				if (!response.payload.isAuth) {
					if (option) {
						navigate("/login");
					}
				} else {
					if (adminRoute && !response.payload.isAdmin) {
						navigate("/");
					} else {
						if (option === false) {
							navigate("/");
						}
					}
				}
			});
		}, []);
		return <SpecificComponent />;
	}

	return <AuthenticationCheack />;
}
