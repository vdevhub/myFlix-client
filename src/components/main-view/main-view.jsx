import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

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
    <BrowserRouter>
      <Row className="justify-content-md-center">
        <Routes>
          <Route
            path="/signup"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5} className="m-5 text-light">
                    <h1 className="text-center mb-5">Welcome to myFlix</h1>
                    <h2>Sign Up</h2>
                    <SignupView />
                  </Col>
                )}
              </>
            } />
          <Route
            path="/login"
            element={
              <>
                {user ? (
                  <Navigate to="/" />
                ) : (
                  <Col md={5} className="m-5 text-light">
                    <h1 className="text-center mb-5">Welcome to myFlix</h1>
                    <h2>Login</h2>
                    <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />
                  </Col>
                )}
              </>
            } />
          <Route
            path="/movies/:movieId"
            element={
              <>
                {!user ? (
                  <Navigate to="/login" replace />
                ) : movies.length === 0 ? (
                  <div>There is no movie to display!</div>
                ) : (
                  <Col md={10}>
                    <MovieView />
                  </Col>
                )}
              </>
            } />
          <Route
            path="/"
            element={
              <>{!user ? (
                <Navigate to="/login" replace />
              ) : movies.length === 0 ? (
                <div>There is no movie to display!</div>
              ) : (
                <>
                  <Col md={12} className="text-center">
                    <Button className="m-4" type="button" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
                  </Col>
                  {movies.map((movie) => (
                    <Col className="mb-4" key={movie._id} md={3}>
                      <MovieCard movieData={movie} />
                    </Col>
                  ))}
                </>
              )}
              </>
            } />
          <Route path="" element={<></>} />
        </Routes>
      </Row>
    </BrowserRouter>



    // <Row className="justify-content-md-center">
    //   {!user ? (
    //     <Col md={5} className="m-5 text-light">
    //       <h1 className="text-center mb-5">Welcome to myFlix</h1>
    //       <h2>Login</h2>
    //       <LoginView onLoggedIn={(user, token) => { setUser(user); setToken(token) }} />
    //       <h2>Sign Up</h2>
    //       <SignupView />
    //     </Col>
    //   ) : selectedMovie ? (
    //     <Col md={10}>
    //       <MovieView movieData={selectedMovie} onBackClick={() => setSelectedMovie(null)} />
    //     </Col>
    //   ) : movies.length === 0 ? (
    //     <div>There is no movie to display!</div>
    //   ) : (
    // <>
    //   <Col md={12} className="text-center">
    //     <Button className="m-4" type="button" onClick={() => { setUser(null); setToken(null); localStorage.clear(); }}>Logout</Button>
    //   </Col>
    //   {movies.map((movie) => (
    //     <Col className="mb-4" key={movie._id} md={3}>
    //       <MovieCard movieData={movie} onMovieClick={(newSelectedMovie) => {
    //         setSelectedMovie(newSelectedMovie);
    //       }} />
    //     </Col>
    //   ))}
    // </>
    //   )}
    // </Row>
  );
};