const axios = require("axios");
const jokeApi = axios.create({
	baseURL: "https://icanhazdadjoke.com",
	headers: {
		Accept: "application/json"
	}
});

document.addEventListener("DOMContentLoaded", () => {
	const searchButton = document.getElementById("search");
	const searchText = document.getElementById("searchBox");
	const results = document.getElementById("results");
	const clearResults = () => {
		while (results.firstChild) {
			results.removeChild(results.firstChild);
		}
	};
	const displayJokes = jokes => {
		jokes.forEach(joke => {
			const li = document.createElement("li");
			li.appendChild(document.createTextNode(joke.joke));
			results.appendChild(li);
		});
	};
	searchButton.addEventListener("click", e => {
		jokeApi
			.get("/search", {
				params: {
					term: searchText.value
				}
			})
			.then(res => {
				clearResults();
				displayJokes(res.data.results);
			});
	});
});
