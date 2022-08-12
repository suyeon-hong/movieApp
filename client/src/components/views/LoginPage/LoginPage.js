import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../_actions/user_action";

export default function LoginPage() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onEmailHandler = (e) => {
		setEmail(e.target.value);
	};

	const onPasswordHandler = (e) => {
		setPassword(e.target.value);
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const body = {
			email: email,
			password: password,
		};

		dispatch(loginUser(body)).then((response) => {
			if (response.payload.loginSuccess) {
				navigate(-1);
			} else {
				alert("error");
			}
		});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				width: "100%",
				height: "100vh",
			}}
		>
			<form
				onSubmit={onSubmitHandler}
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "flex-start",
				}}
			>
				<label htmlFor="email">email</label>
				<input
					type="email"
					name="email"
					id="email"
					value={email}
					onChange={onEmailHandler}
				/>
				<label htmlFor="password">password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={password}
					onChange={onPasswordHandler}
				/>

				<br />
				<button type="submit">Login</button>
			</form>
		</div>
	);
}
