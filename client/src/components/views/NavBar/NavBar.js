import React, { useState, useEffect } from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NavBar() {
	const navigate = useNavigate();
	const [isAuth, setIsAuth] = useState(false);
	const menuItems = [{ label: "Favorite", key: "favorite" }];
	const logoutItems = [{ label: "Logout", key: "Logout" }];
	const loginItems = [
		{ label: "Login", key: "Login" },
		{ label: "Register", key: "Register" },
	];

	const toMainPage = () => {
		navigate("/");
	};

	const onLocationHandler = (e) => {
		const key = e.key;

		if (key === "Logout") {
			axios.get("/api/users/logout").then((response) => {
				if (response.data.success) {
					navigate("/LoginPage");
				} else {
					alert("로그아웃에 실패했습니다.");
				}
			});
		} else {
			navigate(`/${key}Page`);
		}
		getUserState();
	};

	async function getUserState() {
		const result = await axios
			.get("/api/users/auth")
			.then((response) => response.data.isAuth);
		setIsAuth(result);
	}

	useEffect(() => {
		getUserState();
	}, []);

	return (
		<header
			style={{
				position: "fixed",
				top: "0",
				left: "0",
				width: "100%",
				height: "50px",
				background: "#fff",
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				padding: "0 7%",
				zIndex: 100,
			}}
		>
			<div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
				<h1
					style={{
						fontSize: "18px",
						fontWeight: "bold",
						letterSpacing: "-.5px",
						marginBottom: "0px",
						cursor: "pointer",
					}}
					onClick={toMainPage}
				>
					MovieApp
				</h1>
				<Menu items={menuItems} onClick={onLocationHandler} />
			</div>
			<div>
				{isAuth ? (
					<Menu
						items={logoutItems}
						onClick={onLocationHandler}
						style={{ display: "flex", height: "50px" }}
					/>
				) : (
					<Menu
						items={loginItems}
						onClick={onLocationHandler}
						style={{ display: "flex", height: "50px" }}
					/>
				)}
			</div>
		</header>
	);
}
