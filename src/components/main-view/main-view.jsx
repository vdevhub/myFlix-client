import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      "Genre": {
        "Name": "Action",
        "Description": "Action films involve physical feats, chases, fights, and battles."
      },
      "Director": {
        "Name": "Stanley Kubrick",
        "Bio": "Stanley Kubrick was an American film director, screenwriter, and producer. He is considered one of the greatest and most influential directors in cinematic history. Kubrick's films are known for their technical precision, innovative use of music, and thought-provoking themes. Some of his most famous works include 2001: A Space Odyssey, A Clockwork Orange, and The Shining.",
        "Birth": "1928-07-26T00:00:00.000Z",
        "Death": "1999-03-07T00:00:00.000Z"
      },
      "Actors": [],
      "_id": "660cf4f4a8e808e3b590a916",
      "Title": "2001: A Space Odyssey",
      "Description": "Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.",
      "ImagePath": "2001aspaceodyssey.png",
      "Featured": true
    },
    {
      "Genre": {
        "Name": "Action",
        "Description": "Action films involve physical feats, chases, fights, and battles."
      },
      "Director": {
        "Name": "Christopher Nolan",
        "Bio": "Christopher Edward Nolan is a British-American film director, producer, and screenwriter. He is known for his distinctive style of storytelling, often involving nonlinear narratives and exploring themes of memory, identity, and time. Nolan's films, such as Inception and The Dark Knight trilogy, have been both critically acclaimed and commercially successful.",
        "Birth": "1970-07-30T00:00:00.000Z",
        "Death": null
      },
      "Actors": [],
      "_id": "660cf026a8e808e3b590a90f",
      "Title": "The Dark Knight",
      "Description": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      "ImagePath": "thedarkknight.png",
      "Featured": false
    },
    {
      "Genre": {
        "Name": "Drama",
        "Description": "Drama films are intended to portray realistic characters, settings, life situations, and stories."
      },
      "Director": {
        "Name": "James Cameron",
        "Bio": "James Francis Cameron is a Canadian film director, producer, and screenwriter. He is known for his groundbreaking work in the science fiction genre, particularly with the films The Terminator, Aliens, and Avatar. Cameron's films are often characterized by their innovative special effects and immersive storytelling.",
        "Birth": "1954-08-16T00:00:00.000Z",
        "Death": null
      },
      "Actors": [],
      "_id": "660cf110a8e808e3b590a911",
      "Title": "The Shawshank Redemption",
      "Description": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      "ImagePath": "shawshankredemption.png",
      "Featured": true
    },
    {
      "Genre": {
        "Name": "Adventure",
        "Description": "Adventure films typically involve characters embarking on a journey or quest, often featuring excitement, exploration, and risk-taking."
      },
      "Director": {
        "Name": "Billy Wilder",
        "Bio": "Billy Wilder was an Austrian-American film director, screenwriter, and producer. He is regarded as one of the most brilliant and versatile filmmakers of the Hollywood Golden Age. Wilder's films are known for their sharp wit, cynical humor, and incisive commentary on society. Some of his most acclaimed works include Sunset Boulevard, Some Like It Hot, and The Apartment.",
        "Birth": "1906-06-22T00:00:00.000Z",
        "Death": "2002-03-27T00:00:00.000Z"
      },
      "Actors": [],
      "_id": "660cf441a8e808e3b590a915",
      "Title": "Aliens",
      "Description": "Fifty-seven years after surviving an apocalyptic attack aboard her space vessel by merciless space creatures, Officer Ripley awakens from hyper-sleep and tries to warn anyone who will listen about the predators.",
      "ImagePath": "aliens.png",
      "Featured": true
    }
  ]);

  if (movies.length === 0) {
    return <div>There is no movie to display!</div>;
  } else {
    return (
      <div>
        {movies.map((movie) => {
          return (
            <MovieCard key={movie._id} movieData={movie} />
          );
        })}
      </div>
    );
  }
};