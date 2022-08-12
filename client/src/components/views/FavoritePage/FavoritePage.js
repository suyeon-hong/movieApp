import axios from "axios";
import React, { useEffect, useState } from "react";
import { Popover } from "antd";

import "./style.css";
import { IMAGE_BASE_URL } from "../Config";

export default function FavoritePage() {
	const [favorites, setFavorites] = useState([]);

	const fetchFavoritedMovie = () => {
		axios
			.get("/api/favorite/getFavoritedMovie", {
				userFrom: document.cookie["x_auth"],
			})
			.then((response) => {
				if (response.data.success) {
					setFavorites(response.data.favorites);
				} else {
					alert("영화 정보를 가져오는데 실패했습니다.");
				}
			});
	};

	const onRemoveFavorite = (movieId, userFrom) => {
		const variables = {
			movieId,
			userFrom,
		};

		axios
			.post("/api/favorite/removeFromFavorite", variables)
			.then((response) => {
				if (response.data.success) {
					fetchFavoritedMovie();
				} else {
					alert("리스트에서 지우는데 실패했습니다.");
				}
			});
	};

	const renderCards = favorites.map((favorite, idx) => {
		const content = (
			<>
				{favorite.moviePost ? (
					<img
						src={`${IMAGE_BASE_URL}w500${favorite.moviePost}`}
						alt={favorite.movieTitle}
					/>
				) : (
					"no image"
				)}
			</>
		);
		return (
			<tr key={idx}>
				<Popover content={content} title={`${favorite.movieTitle}`}>
					<td>{favorite.movieTitle}</td>
				</Popover>
				<td>{favorite.movieRunTime} mins</td>
				<td>
					<button
						onClick={() =>
							onRemoveFavorite(favorite.movieId, favorite.userFrom)
						}
					>
						remove
					</button>
				</td>
			</tr>
		);
	});

	useEffect(() => {
		fetchFavoritedMovie();
	});

	return (
		<div className="favoritePage-wrap">
			<h2>Favorite Movies</h2>
			<hr />

			<table>
				<thead>
					<tr>
						<th>Movie Title</th>
						<th>Movie RunTime</th>
						<td>Remove from favorites</td>
					</tr>
				</thead>
				<tbody>{renderCards}</tbody>
			</table>
		</div>
	);
}
