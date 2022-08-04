import React from "react";
import { Col } from "antd";
import { IMAGE_BASE_URL } from "../Config";

export default function GridCard({ poster_path, movie_id, movie_title }) {
	return (
		<Col xs={24} md={8} lg={6}>
			<div>
				<a
					href={`movie/${movie_id}`}
					alt={movie_title}
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
						alt="영화 포스터"
					/>
				</a>
			</div>
		</Col>
	);
}
