import React, { useEffect, useState } from "react";
import { MOVIDB_BASE_URL, API_KEY } from "../Config";
import MainImage from "./Sections/MainImage";

import { Button, Row } from "antd";

import GridCard from "../Commons/GridCard";

export default function LandingPage() {
	const [movieList, setMovieList] = useState([]);
	const [mainImg, setMainImg] = useState(null);
	const [currentPage, setCurrentPage] = useState(0);

	const fetchMovie = (endpoint) => {
		fetch(endpoint)
			.then((response) => response.json())
			.then((response) => {
				setMovieList([...movieList, ...response.results]);
				setMainImg(response.results[0]);
				setCurrentPage(response.page);
			});
	};

	const loadMoreMovies = () => {
		const endpoint = `${MOVIDB_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${
			currentPage + 1
		}`;
		fetchMovie(endpoint);
	};

	useEffect(() => {
		const endpoint = `${MOVIDB_BASE_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
		fetchMovie(endpoint);
	}, []);

	return (
		<div>
			{mainImg && <MainImage mainImg={mainImg} />}

			<div
				style={{
					width: "85%",
					margin: "1rem auto",
				}}
			>
				<h2
					style={{
						fontSize: "30px",
						lineHeight: 2,
						borderBottom: "2px solid #ddd",
					}}
				>
					Movies By latest
				</h2>

				<Row gutter={[16, 16]}>
					{movieList &&
						movieList.map(
							(info, index) =>
								info.poster_path && (
									<GridCard
										poster_path={info.poster_path}
										movie_id={info.id}
										movie_title={info.original_title}
										key={index}
									/>
								)
						)}
				</Row>

				<Button
					style={{
						margin: "50px auto",
						textAlign: "center",
						display: "block",
						cursor: "pointer",
					}}
					onClick={loadMoreMovies}
				>
					Load More
				</Button>
			</div>
		</div>
	);
}
