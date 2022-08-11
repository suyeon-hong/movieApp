const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema(
	{
		userFrom: {
			type: Schema.Types.ObjectId,
			ref: "User",
		},
		movieId: {
			type: String,
		},
		movieTitle: {
			type: String,
		},
		moviePost: {
			type: String,
		},
		movieRunTime: {
			type: String,
		},
	},
	{ timestamps: true }
);

favoriteSchema.post("/api/favorite/favoriteNumber", (res, req) => {});

const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports = { Favorite };
