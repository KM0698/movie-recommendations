const API_KEY = '82978fd7ee4daa7d3a513f5d6db5977b';
const BASE_URL = 'https://api.themoviedb.org/3/';
// Dark mode toggle
document.getElementById('darkModeToggle').addEventListener('click', () => {
   const body = document.body;
   body.classList.toggle('dark-mode');
});
// Get recommendations
document.getElementById('recommendButton').addEventListener('click', async () => {
   const genre = document.getElementById('genre').value;
   const platform = document.getElementById('platform').value;
   const movies = await fetchMovies(genre);
   displayMovies(movies.results, platform);
});
// Fetch movies based on genre
const fetchMovies = async (genre) =>
   (await fetch(`${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=${genre}&sort_by=popularity.desc`)).json();
// Display movies
const displayMovies = (movies, platform) => {
   const container = document.getElementById('recommendations');
   container.innerHTML = '<h2>Your Recommendations</h2>';
   movies.forEach(({ title, poster_path, vote_average, release_date }) => {
       container.innerHTML += `
<div>
<img src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
<h3>${title}</h3>
<p>Rating: ${vote_average}</p>
<p>Release Date: ${release_date}</p>
<a href="https://${platform}.com" target="_blank">Watch on ${platform}</a>
</div>`;
   });
};