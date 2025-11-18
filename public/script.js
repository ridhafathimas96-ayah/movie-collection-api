const output = document.getElementById("output");

document.getElementById("btnAll").addEventListener("click", () => {
  fetchData("/movies", renderMovies);
});

document.getElementById("btnClassics").addEventListener("click", () => {
  fetchData("/movies/classics", renderMovies);
});

document.getElementById("btnGenres").addEventListener("click", () => {
  fetchData("/movies/genres", renderGenres);
});

// Generic Fetch Function
async function fetchData(url, callback) {
  output.innerHTML = "Loading...";
  try {
    const res = await fetch(url);
    const data = await res.json();
    callback(data);
  } catch (err) {
    output.innerHTML = "Error fetching data.";
  }
}

// Render Movies
function renderMovies(movies) {
  output.innerHTML = "";
  movies.forEach(m => {
    output.innerHTML += `
      <div class="movie-card">
        <h3>${m.title} 
          ${m.isClassic ? "<span class='classic'>Classic</span>" : ""}
        </h3>
        <p><strong>Genre:</strong> ${m.genre}</p>
        <p><strong>Year:</strong> ${m.releaseYear}</p>
        <p><strong>Director:</strong> ${m.director}</p>
      </div>
    `;
  });
}

// Render Genres
function renderGenres(data) {
  output.innerHTML = "";
  data.genres.forEach(g => {
    output.innerHTML += `
      <div class="movie-card">
        <h3>${g.name}</h3>
        <p><strong>Movies:</strong> ${g.movieCount}</p>
      </div>
    `;
  });
}
