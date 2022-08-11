import React, { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";

export default function Favorite({ movieInfo, movieId, userFrom }) {
	const {
		title: movieTitle,
		backdrop_path: moviePost,
		runtime: movieRunTime,
	} = movieInfo;
	const variables = {
		userFrom,
		movieId,
		movieTitle,
		moviePost,
		movieRunTime,
	};

	const [favoriteNum, setFavoriteNum] = useState(0);
	const [favorited, setFavorited] = useState(false);

	const onClickFavorite = () => {
		if (favorited) {
			axios
				.post("/api/favorite/removeFromFavorite", variables)
				.then((response) => {
					if (response.data.success) {
						setFavoriteNum(favoriteNum - 1);
						setFavorited(!favorited);
					} else {
						alert("favorite 리스트에서 지우는 걸 실패했습니다.");
					}
				});
		} else {
			axios.post("/api/favorite/addToFavorite", variables).then((response) => {
				if (response.data.success) {
					setFavoriteNum(favoriteNum + 1);
					setFavorited(!favorited);
				} else {
					alert("favorite 리스트에 추가하는 걸 실패했습니다.");
				}
			});
		}
	};

	useEffect(() => {
		axios.get("/api/favorite/favoriteNumber", variables).then((response) => {
			if (response.data.success) {
				setFavoriteNum(response.data.favoriteNumber);
			} else {
				alert("숫자 정보를 가져오는데 실패했습니다.");
			}
		});

		axios.get("/api/favorite/favorited", variables).then((response) => {
			if (response.data.success) {
				setFavorited(response.data.favorited);
			} else {
				alert("데이터를 가져오는데 실패했습니다.");
			}
		});
	}, []);

	return (
		<Button onClick={onClickFavorite}>
			{favorited ? "Not Favorite" : "Add to Favorite"} {favoriteNum}
		</Button>
	);
}
