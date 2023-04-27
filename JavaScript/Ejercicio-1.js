const names = [
"Hole-in-one!",
"Eagle",
"Birdie",
"Par",
"Bogey",
"Double Bogey",
"Go Home!",
];


function golfScore(par, strokes) {
	if (strokes === 1) {
		return names[0]
	}

	if (strokes <= par - 2) {
		return names[1]
	}

	if (strokes >= par + 3) {
		return names[names.length - 1]
	}

	return names[strokes - par + 3]

}
