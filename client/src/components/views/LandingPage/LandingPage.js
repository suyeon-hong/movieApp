import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
	const [userLogin, setUserLogin] = useState(false);
	const navigate = useNavigate();

	const onLogoutHandler = () => {
		axios.get("/api/users/logout").then((response) => {
			if (response.data.success) {
				navigate("/LoginPage");
			} else {
				alert("로그아웃에 실패했습니다.");
			}
		});
	};

	useEffect(() => {
		axios.get("/api/users/auth").then((response) => {
			if (response.data.isAuth) {
				setUserLogin(response.data.isAuth);
			}
		});
	}, []);

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
			시작 페이지
			{userLogin && <button onClick={onLogoutHandler}>로그아웃</button>}
		</div>
	);
}
