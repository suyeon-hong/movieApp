import React, { useState } from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function NavBar() {
	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const authenticated = user != null;

	const toMainPage = () => {
		navigate("/");
	};

	const toLoginPage = () => {
		navigate("/LoginPage");
	};

	const toRegisterPage = () => {
		navigate("/RegisterPage");
	};

	const onLogoutHandler = () => {
		axios.get("/api/users/logout").then((response) => {
			if (response.data.success) {
				navigate("/LoginPage");
			} else {
				alert("로그아웃에 실패했습니다.");
			}
		});
	};

	// useEffect(() => {
	// 	async function getUserState() {
	// 		const result = await axios
	// 			.get("/api/users/auth")
	// 			.then((response) => response.data.isAuth);
	// 		return result;
	// 	}
	// 	setUserLogin(getUserState());
	// }, []);

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
			}}
		>
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
			<div>
				{/* {authenticated ? (
					<Button
						style={{ height: "100%", border: "none" }}
						onClick={onLogoutHandler}
					>
						Logout
					</Button>
				) : (
					<>
						<Button
							style={{ height: "100%", border: "none" }}
							onClick={toLoginPage}
						>
							Login
						</Button>
						<Button
							style={{ height: "100%", border: "none" }}
							onClick={toRegisterPage}
						>
							Register
						</Button>
					</>
				)} */}
				<Button
					style={{ height: "100%", border: "none" }}
					onClick={onLogoutHandler}
				>
					Logout
				</Button>
				<Button
					style={{ height: "100%", border: "none" }}
					onClick={toLoginPage}
				>
					Login
				</Button>
				<Button
					style={{ height: "100%", border: "none" }}
					onClick={toRegisterPage}
				>
					Register
				</Button>
			</div>
		</header>
	);
}
