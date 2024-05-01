import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {

  // const initUser = localStorage.getItem("user");
  // console.log('User key in localStorage is: ' + initUser);

  // if (typeof initUser === "undefined") {
  //   localStorage.setItem("user", JSON.stringify({}));
  // }

  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser ? storedUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movies-myflix-api-84dbf8740f2d.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => response.json())
      .then((movies) => {
        const moviesFromApi = movies.map((movie) => {
          return {
            _id: movie._id,
            Title: movie.Title,
            Description: movie.Description,
            ImagePath: movie.ImagePath,
            Featured: movie.Featured,
            Genre: {
              Name: movie.Genre.Name,
              Description: movie.Genre.Description
            },
            Director: {
              Name: movie.Director.Name,
              Bio: movie.Director.Bio,
              Birth: movie.Director.Birth,
              Death: movie.Director.Death
            }
          };
        });

        setMovies(moviesFromApi);
      });
  }, [token]);

  if (!user) {
    return <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />
  }

  if (selectedMovie) {
    return (
      <MovieView movieData={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    );
  }

  if (movies.length === 0) {
    return <div>There is no movie to display!</div>;
  } else {
    return (
      <div>
        <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
        {movies.map((movie) => {
          return (
            <MovieCard key={movie._id} movieData={movie} onMovieClick={(newSelectedMovie) => {
              setSelectedMovie(newSelectedMovie);
            }} />
          );
        })}
      </div>
    );
  }
};