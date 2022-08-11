import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MOVIDB_BASE_URL, API_KEY } from "../Config";

import MainImage from "../LandingPage/Sections/MainImage";
import MovieInfo from "./Sections/MovieInfo";

import { Button, Row } from "antd";
import GridCard from "../Commons/GridCard";
import Favorite from "./Sections/Favorite";

export default function MovieDetail() {
	const { movieId } = useParams();
	const [movie, setMovie] = useState([]);
	const [casts, setCasts] = useState([]);
	const [actorToggle, setActorToggle] = useState(false);

	const toggleActorView = () => {
		setActorToggle(!actorToggle);
	};

	useEffect(() => {
		const endpointInfo = `${MOVIDB_BASE_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
		const endpointCrew = `${MOVIDB_BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`;

		fetch(endpointInfo)
			.then((response) => response.json())
			.then((response) => {
				setMovie(response);
			});

		fetch(endpointCrew)
			.then((response) => response.json())
			.then((response) => {
				setCasts(response.cast);
			});
	}, []);

	return (
		<>
			{movie && <MainImage mainImg={movie} />}

			<div
				style={{
					width: "85%",
					margin: "1rem auto",
				}}
			>
				<div style={{ display: "flex", justifyContent: "flex-end" }}>
					<Favorite
						movieInfo={movie}
						movieId={movieId}
						// userFrom={document.cookie["x_auth"]}
					/>
				</div>

				{movie && <MovieInfo movie={movie} />}

				<Button
					style={{
						margin: "50px auto",
						textAlign: "center",
						display: "block",
						cursor: "pointer",
					}}
					onClick={toggleActorView}
				>
					Toggle Actor View
				</Button>

				{actorToggle && (
					<Row gutter={[16, 16]}>
						{casts.map(
							(cast, idx) =>
								cast.profile_path && (
									<GridCard
										profile_path={cast.profile_path}
										charactor_name={cast.name}
										key={idx}
									/>
								)
						)}
					</Row>
				)}
			</div>
		</>
	);
}
