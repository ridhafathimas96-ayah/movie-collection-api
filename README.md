## Movie Collection Display API
1. About the Collection
This movie collection includes a mix of classic and modern films across multiple genres.
The selection highlights powerful storytelling, memorable characters, and impactful direction.
Each movie was chosen to represent a unique style and cinematic experience.

2. Project Description
This project is a Movie Collection API built using Node.js and Express.js.
It exposes three API endpoints that return movie data, classic movies, and genres with movie counts.
A frontend HTML page displays this data using fetch() calls.
Technologies used:
a. Node.js
b. Express.js
c. HTML
d. CSS
e. JavaScript (Fetch API)

3. Genres Available
a. Drama
b. Action
c. Sci-Fi
d. Thriller
e. Comedy

4. Project Structure
movie-collection-api/
  │
  ├── public/
  │   └── index.html
  │
  ├── server.js
  ├── movies.js
  ├── package.json
  ├── .gitignore
  └── README.md

5. API Documentation
  ## 1.GET /movies  
     Method: GET
     Description: Returns all movies in the collection.
     Sample Response : 
[
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Frank Darabont"
    },
    {
        "id": 2,
        "title": "Inception",
        "genre": "Sci-Fi",
        "releaseYear": 2010,
        "isClassic": false,
        "director": "Christopher Nolan"
    },
    {
        "id": 3,
        "title": "The Dark Knight",
        "genre": "Action",
        "releaseYear": 2008,
        "isClassic": false,
        "director": "Christopher Nolan"
    },
    {
        "id": 4,
        "title": "Pulp Fiction",
        "genre": "Crime",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Quentin Tarantino"
    },
    {
        "id": 5,
        "title": "Back to the Future",
        "genre": "Sci-Fi",
        "releaseYear": 1985,
        "isClassic": true,
        "director": "Robert Zemeckis"
    },
    {
        "id": 6,
        "title": "Superbad",
        "genre": "Comedy",
        "releaseYear": 2007,
        "isClassic": false,
        "director": "Greg Mottola"
    }
]

 ## 2.GET /movies/classics
    Method: GET
    Description: Returns only classic movies (release year < 2000).
    Sample Response: 
[
    {
        "id": 1,
        "title": "The Shawshank Redemption",
        "genre": "Drama",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Frank Darabont"
    },
    {
        "id": 4,
        "title": "Pulp Fiction",
        "genre": "Crime",
        "releaseYear": 1994,
        "isClassic": true,
        "director": "Quentin Tarantino"
    },
    {
        "id": 5,
        "title": "Back to the Future",
        "genre": "Sci-Fi",
        "releaseYear": 1985,
        "isClassic": true,
        "director": "Robert Zemeckis"
    }
]

## 3. GET /movies/genres
    Method: GET
    Description: Returns list of unique genres with movie counts.
    Sample Response:
{
    "genres": [
        {
            "name": "Drama",
            "movieCount": 1
        },
        {
            "name": "Sci-Fi",
            "movieCount": 2
        },
        {
            "name": "Action",
            "movieCount": 1
        },
        {
            "name": "Crime",
            "movieCount": 1
        },
        {
            "name": "Comedy",
            "movieCount": 1
        }
    ]
}


6. Installation & Setup Instructions
## 1. Clone the Repository
git clone https://github.com/ridhafathimas96-ayah/movie-collection-api

## 2. Navigate into the Project
cd movie-collection-api

## 3. Install Dependencies
npm install

## 4. Start the Server
npm start
   or
node server.js

## 5. Access API
  All Movies	http://localhost:3000/movies
  Classic Movies	http://localhost:3000/movies/classics
  Genres	http://localhost:3000/movies/genres

## 6. Open Frontend
 Open your browser: http://localhost:3000

7. Features
    Movie API with 6+ movies
    Classic movie filter
    Genre count endpoint
    Interactive HTML frontend
    Clean UI with clear movie display
    Static file hosting with Express
    Fully documented API

8. GitHub Repository Link :-
  https://github.com/ridhafathimas96-ayah/movie-collection-api

9. Author :-
    Rida Fathima