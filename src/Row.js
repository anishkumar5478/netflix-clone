import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./Row.css";
import requests from "./Requests.js";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(`${requests.baseUrl}${fetchUrl}`);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchUrl]);
  //console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://youtu.be/oqxAJKy0ii4?list=RDCMUCWOA1ZGywLbqmigxE4Qlvuw,
      autoPlay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "The witcher")
        .then((url) => {
          //https://youtu.be/oqxAJKy0ii4?list=RDCMUCWOA1ZGywLbqmigxE4Qlvuw
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.error(error));
    }
    console.log(movie.name);
  };

  return (
    <div className="row">
      <h2 className="row_title">{title}</h2>
      <div className="row_posters">
        {/* several row poster */}

        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
