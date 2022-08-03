import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../../_actions/user_action";

export default function RegisterPage() {
	const [registerInfo, setRegisterInfo] = useState({
		email: "",
		name: "",
		password: "",
		confirmPassword: "",
	});

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onChangeHandler = (e) => {
		setRegisterInfo((registerInfo) => ({
			...registerInfo,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmitHandler = (e) => {
		e.preventDefault();

		const body = {
			email: registerInfo.email,
			name: registerInfo.name,
			password: registerInfo.password,
			confirmPassword: registerInfo.confirmPassword,
		};

		console.log(body);

		dispatch(registerUser(body)).then((response) => {
			if (response.payload.success) {
				navigate("/LoginPage");
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
					value={registerInfo.email}
					onChange={onChangeHandler}
				/>
				<label htmlFor="text">name</label>
				<input
					type="name"
					name="name"
					id="name"
					value={registerInfo.name}
					onChange={onChangeHandler}
				/>
				<label htmlFor="password">password</label>
				<input
					type="password"
					name="password"
					id="password"
					value={registerInfo.password}
					onChange={onChangeHandler}
				/>
				<label htmlFor="confirmPassword">confirmPassword</label>
				<input
					type="password"
					name="confirmPassword"
					id="confirmPassword"
					value={registerInfo.confirmPassword}
					onChange={onChangeHandler}
				/>

				<br />
				<button type="submit">Register</button>
			</form>
		</div>
	);
}
