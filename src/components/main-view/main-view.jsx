import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const MainView = () => {
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

  return (
    <Row className="justify-content-md-center">
      {!user ? (
        <Col md={5}>
          <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} /> or <SignupView />
        </Col>
      ) : selectedMovie ? (
        <Col md={8}>
          <MovieView movieData={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
        </Col>
      ) : movies.length === 0 ? (
        <div>There is no movie to display!</div>
      ) : (
        <>
          <button onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</button>
          {movies.map((movie) => (
            <Col className="mb-4" key={movie._id} md={3}>
              <MovieCard movieData={movie} onMovieClick={(newSelectedMovie) => {
                setSelectedMovie(newSelectedMovie);
              }} />
            </Col>
          ))}
        </>
      )}
    </Row>
  );
};