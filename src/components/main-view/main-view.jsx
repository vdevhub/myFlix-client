import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";

export const MainView = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!token) {
      return;
    }

    fetch("https://movies-myflix-api-84dbf8740f2d.herokuapp.com/movies")
      .then((response) => response.json())
      .then((data) => {
        console.log("Movies from API: ", data);
        const moviesFromApi = data.map((movie) => {
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
    return <LoginView />
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