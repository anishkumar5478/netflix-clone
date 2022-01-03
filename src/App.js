import React from "react";
import "./App.css";
import Row from "./Row";
import request from "./request.js";

function App() {
  return (
    <div className="App">
      <h1> hey programer</h1>
      <Row title="NETFLIX ORIGINAL" fetchUrl={request.fetchNetflixOrignals} />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Comedy movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romantic movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
    </div>
  );
}

export default App;
