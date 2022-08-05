import React from "react";
import { Col } from "antd";
import { IMAGE_BASE_URL } from "../Config";

export default function GridCard({
	landingPage,
	poster_path,
	movie_id,
	movie_title,
	profile_path,
	charactor_name,
}) {
	if (landingPage) {
		return (
			<Col xs={24} md={8} lg={6}>
				<div>
					<a
						href={`movie/${movie_id}`}
						style={{
							width: "100%",
							height: "100%",
							display: "block",
						}}
					>
						<img
							style={{
								width: "100%",
								height: "320px",
							}}
							src={`${IMAGE_BASE_URL}w500${poster_path}`}
							alt={movie_title}
						/>
					</a>
				</div>
			</Col>
		);
	} else {
		return (
			<Col xs={24} md={8} lg={6}>
				<div>
					<img
						style={{
							width: "100%",
							height: "320px",
						}}
						src={`${IMAGE_BASE_URL}w500${profile_path}`}
						alt={charactor_name}
					/>
				</div>
			</Col>
		);
	}
}
