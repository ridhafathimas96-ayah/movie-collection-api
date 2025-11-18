// server.js
// Movie Collection Display API

const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

// Movie Data (6+ movies, different genres, classics + new)
const movies = [
  { id: 1, title: "The Shawshank Redemption", genre: "Drama", releaseYear: 1994, isClassic: true, director: "Frank Darabont" },
  { id: 2, title: "Inception", genre: "Sci-Fi", releaseYear: 2010, isClassic: false, director: "Christopher Nolan" },
  { id: 3, title: "The Dark Knight", genre: "Action", releaseYear: 2008, isClassic: false, director: "Christopher Nolan" },
  { id: 4, title: "Pulp Fiction", genre: "Crime", releaseYear: 1994, isClassic: true, director: "Quentin Tarantino" },
  { id: 5, title: "Back to the Future", genre: "Sci-Fi", releaseYear: 1985, isClassic: true, director: "Robert Zemeckis" },
  { id: 6, title: "Superbad", genre: "Comedy", releaseYear: 2007, isClassic: false, director: "Greg Mottola" }
];

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, "public")));

// GET /movies → return all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});

// GET /movies/classics → return only classics
app.get("/movies/classics", (req, res) => {
  const classics = movies.filter(m => m.isClassic === true);
  res.json(classics);
});

// GET /movies/genres → return unique genres + count
app.get("/movies/genres", (req, res) => {
  const genreCounts = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {});

  const genres = Object.keys(genreCounts).map(g => ({
    name: g,
    movieCount: genreCounts[g]
  }));

  res.json({ genres });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
