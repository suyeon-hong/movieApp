import React from "react";
import { IMAGE_BASE_URL } from "../../Config";

export default function MainImage({ mainImg }) {
	return (
		<div
			style={{
				width: "100%",
				height: "400px",
				display: "flex",
				alignItems: "flex-end",
				background: `url(${IMAGE_BASE_URL}w1280${mainImg.poster_path}) no-repeat center/cover`,
			}}
		>
			<div
				style={{
					width: "85%",
					margin: "1rem auto",
					color: "#fff",
				}}
			>
				<h2
					style={{
						color: "#fff",
						fontSize: "28px",
					}}
				>
					{mainImg.original_title}
				</h2>
				<p
					style={{
						color: "#fff",
						fontSize: "16px",
						lineHeight: 1.2,
					}}
				>
					{mainImg.overview}
				</p>
			</div>
		</div>
	);
}
